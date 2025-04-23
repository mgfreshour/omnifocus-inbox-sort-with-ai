import { jest } from '@jest/globals';
import { URLMetadataService } from '../urlMetadata';

// Mock the HTTP global
const mockRequest = jest.fn();
global.HTTP = { request: mockRequest };

describe('URLMetadataService', () => {
  describe('isValidURL', () => {
    it('should return true for valid HTTP URLs', () => {
      expect(URLMetadataService.isValidURL('http://example.com')).toBe(true);
      expect(URLMetadataService.isValidURL('https://example.com/page')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(URLMetadataService.isValidURL('not a url')).toBe(false);
      expect(URLMetadataService.isValidURL('ftp://example.com')).toBe(false);
    });

    it('should handle URLs with whitespace', () => {
      expect(URLMetadataService.isValidURL('  https://example.com  ')).toBe(true);
    });
  });

  describe('fetchMetadata', () => {
    beforeEach(() => {
      mockRequest.mockReset();
    });

    it('should extract title and description from HTML', async () => {
      mockRequest.mockResolvedValue(`
        <html>
          <head>
            <title>Test Page</title>
            <meta name="description" content="Test description">
          </head>
          <body>Content</body>
        </html>
      `);

      const result = await URLMetadataService.fetchMetadata('https://example.com');
      expect(result).toEqual({
        title: 'Test Page',
        description: 'Test description'
      });
    });

    it('should handle missing description', async () => {
      mockRequest.mockResolvedValue(`
        <html>
          <head>
            <title>Test Page</title>
          </head>
          <body>Content</body>
        </html>
      `);

      const result = await URLMetadataService.fetchMetadata('https://example.com');
      expect(result).toEqual({
        title: 'Test Page',
        description: null
      });
    });

    it('should handle network errors', async () => {
      mockRequest.mockRejectedValue(new Error('Network error'));

      const result = await URLMetadataService.fetchMetadata('https://example.com');
      expect(result).toBeNull();
    });

    it('should handle invalid HTML', async () => {
      mockRequest.mockResolvedValue('Invalid HTML');

      const result = await URLMetadataService.fetchMetadata('https://example.com');
      expect(result).toBeNull();
    });
  });
}); 