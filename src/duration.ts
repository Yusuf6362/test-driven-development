export function formatDuration(seconds: number): string {
  if (seconds < 0) throw new Error('Negative duration');

  seconds = Math.round(seconds);

  const h = Math.floor(seconds / 3600);
  seconds %= 3600;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${h ? h + 'h' : ''}${m ? m + 'm' : ''}${(h || m) && !s ? '' : s + 's'}`;
}
