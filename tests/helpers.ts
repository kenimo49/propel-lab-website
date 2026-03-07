// Base path for all test URLs
export const BASE = process.env.BASE_PATH ?? '';

export function url(path: string): string {
  const base = BASE || '';
  if (path.startsWith('/')) {
    return `${base}${path}`;
  }
  return path ? `${base}/${path}` : base || '/';
}
