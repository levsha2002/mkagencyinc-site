// Daily/weekly content rotation.
// Pages that use this must export `revalidate` (ISR) so Vercel re-renders
// them on schedule — then the picked variant changes automatically with no
// deploys: day index advances -> next image/text variant is served.

export type Period = 'day' | 'week';

export function rotationIndex(period: Period = 'day'): number {
  const ms = Date.now();
  return period === 'week'
    ? Math.floor(ms / (7 * 86400000))
    : Math.floor(ms / 86400000);
}

export function pickRotating<T>(arr: readonly T[], period: Period = 'day'): T {
  return arr[rotationIndex(period) % arr.length];
}
