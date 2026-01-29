import DOMPurify from 'dompurify';

export function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href'],
  });
}

export function escapeHTML(text: string): string {
  // للبيئات التي تدعم الـ DOM (المتصفح)
  if (typeof document === 'undefined') return text; 
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}