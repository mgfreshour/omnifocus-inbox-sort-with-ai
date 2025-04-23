import { log, error } from './utils/logger.js';

export class YouTubeService {
    static isYouTubeURL(url) {
        log(`Validating YouTube URL: ${url}`);
        try {
            const urlObj = URL.fromString(url);
            if (!urlObj) {
                return false;
            }
            if (!urlObj.host.includes('youtube.com') && !urlObj.host.includes('youtu.be')) {
                return false;
            }
            return true;
        } catch (err) {
            log('Invalid URL format:', err);
            return false;
        }
    }

    static async fetchMetadata(url) {
        log(`Starting YouTube metadata fetch for URL: ${url}`);
        if (!this.isYouTubeURL(url)) {
            log('URL is not a valid YouTube URL');
            return null;
        }

        try {
            log('Making request to noembed.com');
            const request = URL.FetchRequest.fromString(`https://noembed.com/embed?url=${encodeURIComponent(url)}`);
            request.method = 'GET';
            request.headers = {
                'Content-Type': 'application/json'
            };

            const response = await request.fetch();
            log('Received response from noembed.com');
            if (!response) {
                throw new Error('Empty response from noembed.com');
            }

            const responseData = JSON.parse(response.bodyString);

            // Check for API errors
            if (responseData.error) {
                log('noembed.com API error:', responseData.error);
                // Fallback to direct YouTube URL
                return this.fetchMetadataFromYouTube(url);
            }

            if (!responseData || !responseData.title) {
                error('Invalid response format from noembed.com', responseData);
                throw new Error('Invalid response format from noembed.com');
            }

            const metadata = {
                title: responseData.title.replace(/\s*-\s*YouTube$/, ''),
                description: responseData.description || null
            };
            log('Processed metadata:', metadata);
            return metadata;
        } catch (err) {
            error('Failed to fetch YouTube metadata:', err);
            // Try fallback method if noembed fails
            return null;
        }
    }

    static async fetchMetadataFromYouTube(url) {
        log('Attempting to fetch metadata directly from YouTube');
        try {
            const request = URL.FetchRequest.fromString(url);
            request.method = 'GET';
            request.headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            };

            const response = await request.fetch();
            if (!response) {
                throw new Error('Empty response from YouTube');
            }

            const html = response.bodyString;

            // Extract title from HTML
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
            if (!titleMatch) {
                throw new Error('Could not extract title from YouTube page');
            }

            const title = titleMatch[1].replace(/\s*-\s*YouTube$/, '').trim();

            // Extract description from meta tags
            const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i);
            const description = descMatch ? descMatch[1].trim() : null;

            const metadata = {
                title,
                description
            };
            log('Successfully extracted metadata from YouTube:', metadata);
            return metadata;
        } catch (err) {
            error('Failed to fetch metadata directly from YouTube:', err);
            return null;
        }
    }
}
