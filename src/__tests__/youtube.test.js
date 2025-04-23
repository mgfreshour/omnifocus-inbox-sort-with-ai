import { jest } from '@jest/globals';
import { YouTubeService } from '../youtube';

// Mock the HTTP global
const mockRequestJSON = jest.fn();
global.HTTP = { requestJSON: mockRequestJSON };

describe('YouTubeService', () => {
  beforeEach(() => {
    mockRequestJSON.mockReset();
  });

  describe('isYouTubeURL', () => {
    it('should return true for valid YouTube URLs', () => {
      expect(YouTubeService.isYouTubeURL('https://www.youtube.com/watch?v=123')).toBe(true);
      expect(YouTubeService.isYouTubeURL('https://youtu.be/123')).toBe(true);
    });

    it('should return false for non-YouTube URLs', () => {
      expect(YouTubeService.isYouTubeURL('https://example.com')).toBe(false);
      expect(YouTubeService.isYouTubeURL('not a url')).toBe(false);
    });
  });

  describe('fetchMetadata', () => {
    it('should extract title and description from YouTube page', async () => {
      mockRequestJSON.mockResolvedValue({
        title: 'Test Video - YouTube',
        description: 'Test video description'
      });

      const result = await YouTubeService.fetchMetadata('https://www.youtube.com/watch?v=123');
      expect(result).toEqual({
        title: 'Test Video',
        description: 'Test video description'
      });
    });

    it('should handle missing metadata', async () => {
      mockRequestJSON.mockResolvedValue({
        title: 'Test Video - YouTube',
        description: ''
      });

      const result = await YouTubeService.fetchMetadata('https://www.youtube.com/watch?v=123');
      expect(result).toEqual({
        title: 'Test Video',
        description: null
      });
    });
  });
}); 