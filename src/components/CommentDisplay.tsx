import { sanitizeHTML } from '../utils/sanitize';

// أضف كلمة export هنا لحل مشكلة "declared but never read"
export function CommentDisplay({ comment }: { comment: string }) {
  return (
    <div 
      className="p-3 bg-white border rounded shadow-sm"
      dangerouslySetInnerHTML={{ 
        __html: sanitizeHTML(comment) 
      }} 
    />
  );
}