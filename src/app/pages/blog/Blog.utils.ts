export const getBackLabel = (path: string): string => {
  const pageMatch = path.match(/^\/blog\/page\/(\d+)$/);
  if (pageMatch) return `Blog (page ${pageMatch[1]})`;

  if (path === '/blog/archive') return 'Archive';
  if (path === '/blog') return 'Blog';

  // Fallback: last path segment, hyphens to spaces, capitalized
  const lastSegment = path.split('/').filter(Boolean).pop();
  if (!lastSegment) return 'Back';

  const text = lastSegment.replace(/-/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
};
