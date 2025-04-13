import { calcPoints, possibleCheckout } from './darts';

describe('calcPoints', () => {
  it('calculates correct score from input string', () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    expect(calcPoints("3 20 1 5")).toBe(65);
    expect(calcPoints("")).toBe(0);
  });

  it('throws error on invalid input', () => {
    expect(() => calcPoints("3")).toThrow();
    expect(() => calcPoints("x y")).toThrow();
  });
});

describe('possibleCheckout', () => {
  it('returns correct double checkout', () => {
    expect(possibleCheckout(477)).toBe("Double 12"); // 501 - 477 = 24
    expect(possibleCheckout(441)).toBe(null);        // 60, ama Double 30 geçersiz
  });

  it('returns null if no valid checkout possible', () => {
    expect(possibleCheckout(480)).toBe(null); // 21, tek sayı
    expect(possibleCheckout(490)).toBe(null); // 11, çift ama 11 > 20
    expect(possibleCheckout(500)).toBe(null); // 1 puan kaldı
  });
});
