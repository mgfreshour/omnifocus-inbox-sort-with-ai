import { log, error } from './utils/logger.js';

export class URLMetadataService {
    static isValidURL(text) {
        log(`Validating URL: ${text}`);
        try {
            const url = URL.fromString(text.trim());
            const isValid = url && url.host;
            log(`URL validation result: ${isValid}`);
            return isValid;
        } catch (err) {
            log('Invalid URL format:', err);
            return false;
        }
    }

    static async fetchMetadata(url) {
        log(`Starting URL metadata fetch for: ${url}`);
        try {
            log('Making HTTP request to fetch page content');
            const request = URL.FetchRequest.fromString(url);
            request.method = 'GET';
            request.headers = {
                'Content-Type': 'text/html'
            };

            const response = await request.fetch();
            log('Received HTML response');
            if (!response) {
                throw new Error('Empty response from URL');
            }

            const html = response.bodyString;

            // Extract title
            log('Extracting title from HTML');
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
            const title = titleMatch ? titleMatch[1].trim() : '';
            log('Title extraction result:', title);

            // Extract meta description
            log('Extracting meta description from HTML');
            const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i) ||
                html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/i);
            const description = descMatch ? descMatch[1].trim() : null;
            log('Description extraction result:', description);

            // If we couldn't get a title, the page might not be accessible
            if (!title) {
                error('Failed to extract title from URL:', url);
                log('HTML content:', html);
                return null;
            }

            const metadata = {
                title,
                description
            };
            log('Successfully extracted metadata:', metadata);
            return metadata;
        } catch (err) {
            error('Failed to fetch URL metadata:', err);
            log('Error details:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            return null;
        }
    }
}
