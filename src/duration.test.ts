import { formatDuration } from './duration';

describe('formatDuration', () => {
  it('formats duration correctly', () => {
    expect(formatDuration(33)).toBe('33s');
    expect(formatDuration(123)).toBe('2m3s');
    expect(formatDuration(500)).toBe('8m20s');
    expect(formatDuration(3600)).toBe('1h');
    expect(formatDuration(3999)).toBe('1h6m39s');
    expect(formatDuration(0)).toBe('0s');
  });

  it('rounds fractional seconds', () => {
    expect(formatDuration(61.6)).toBe('1m2s');
    expect(formatDuration(61.4)).toBe('1m1s');
  });

  it('throws error on negative input', () => {
    expect(() => formatDuration(-1)).toThrow('Negative duration');
  });
});
