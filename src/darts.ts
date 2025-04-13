export function calcPoints(input: string): number {
  if (!input.trim()) return 0;

  const parts = input.trim().split(/\s+/).map(Number);
  if (parts.length % 2 !== 0 || parts.some(isNaN)) {
    throw new Error("Invalid input format");
  }

  let total = 0;
  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parts[i];
    const sector = parts[i + 1];
    total += multiplier * sector;
  }

  return total;
}

export function possibleCheckout(currentScore: number): string | null {
  const remaining = 501 - currentScore;
  if (remaining % 2 !== 0) return null;

  const double = remaining / 2;

  if (double >= 1 && double <= 20) {
    return `Double ${double}`;
  }

  return null;
}
