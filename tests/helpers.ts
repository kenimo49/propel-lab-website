// Base path for all test URLs
export const BASE = process.env.BASE_PATH || '/propel-lab-website';

export function url(path: string): string {
  // Avoid double slash
  if (path.startsWith('/')) {
    return `${BASE}${path}`;
  }
  return `${BASE}/${path}`;
}
