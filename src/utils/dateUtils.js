/**
 * Formats a given ISO date string into a relative time string (e.g., "3 days ago").
 *
 * @param {string} isoDate - The ISO date string to format.
 * @returns {string} Relative time string.
 */
export function formatDate(isoDate) {
  if (!isoDate) return 'Date not available';

  const date = new Date(isoDate);
  const now = new Date();
  const secondsAgo = Math.floor((now - date) / 1000);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const units = [
    { max: 60, value: 1, unit: 'second' },
    { max: 3600, value: 60, unit: 'minute' },
    { max: 86400, value: 3600, unit: 'hour' },
    { max: 604800, value: 86400, unit: 'day' },
    { max: 2592000, value: 604800, unit: 'week' },
    { max: 31536000, value: 2592000, unit: 'month' },
    { max: Infinity, value: 31536000, unit: 'year' }
  ];

  for (const { max, value, unit } of units) {
    if (secondsAgo < max) {
      const timeAgo = Math.floor(secondsAgo / value);
      return rtf.format(-timeAgo, unit); // Negative for past
    }
  }

  return 'some time ago';
}