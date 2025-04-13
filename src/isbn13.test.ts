import { isValid } from './isbn13';

describe('ISBN-13 Validation', () => {
  it('validates correct ISBN-13 numbers', () => {
    expect(isValid('9780470059029')).toBe(true);
    expect(isValid('9783161484100')).toBe(true);
    expect(isValid('9780306406157')).toBe(true);
  });

  it('detects incorrect ISBN-13 numbers', () => {
    expect(isValid('9780470059020')).toBe(false); // wrong checksum
    expect(isValid('9783161484101')).toBe(false);
  });

  it('returns false for invalid format (not 13 digits)', () => {
    expect(isValid('123456789012')).toBe(false);  // 12 digits
    expect(isValid('abcdefghijklm')).toBe(false); // letters
  });
});
