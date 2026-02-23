const BLOG_DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

function parseBlogDate(input: string): Date | null {
  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
    return new Date(`${input}T00:00:00.000Z`);
  }

  const date = new Date(input);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatBlogDate(input?: string): string {
  if (!input) {
    return '';
  }

  const parsed = parseBlogDate(input);
  if (!parsed) {
    return '';
  }

  return BLOG_DATE_FORMATTER.format(parsed);
}
