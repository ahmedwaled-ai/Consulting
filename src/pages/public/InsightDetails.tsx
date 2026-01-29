import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { useEffect } from 'react';

// قاعدة بيانات وهمية (يفضل وضعها في ملف منفصل لاحقاً)
// يجب أن تطابق نفس البيانات الموجودة في الصفحة الرئيسية
const blogPosts = [
  {
    id: 1,
    cat: "Strategy",
    title: "Navigating Economic Uncertainty: A CFO's Guide",
    date: "Oct 24, 2026",
    readTime: "5 min read",
    author: "Dr. Ahmed Sameh",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    content: "Detailed content about Strategy goes here..."
  },
  {
    id: 2,
    cat: "Sustainability",
    title: "The Circular Economy: Beyond Compliance",
    date: "Oct 20, 2026",
    readTime: "4 min read",
    author: "Sarah Jenkins",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    content: "Detailed content about Sustainability goes here..."
  },
  {
    id: 3,
    cat: "Digital Transformation",
    title: "AI Implementation: The Human Element",
    date: "Oct 15, 2026",
    readTime: "7 min read",
    author: "Michael Ross",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    content: "Detailed content about AI goes here..."
  }
];

export default function InsightDetails() {
  const { id } = useParams(); // 1. قراءة الرقم من الرابط
  
  // 2. البحث عن المقال الذي يطابق الرقم
  const post = blogPosts.find(p => p.id === Number(id));

  // تمرير الشاشة للأعلى عند فتح الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // إذا لم نجد المقال (رقم خطأ)، نرسل المستخدم لصفحة 404 أو المقالات
  if (!post) {
    return <Navigate to="/insights" />;
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/insights" className="group inline-flex items-center text-gray-500 hover:text-[#1e3a8a] transition-colors font-medium">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
               <ArrowLeft size={16} />
            </div>
            Back to Insights
          </Link>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wide">
            {post.cat}
          </span>
        </div>
        
        {/* Title & Meta */}
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2"><Calendar size={18} className="text-blue-600"/> {post.date}</div>
          <div className="flex items-center gap-2"><Clock size={18} className="text-blue-600"/> {post.readTime}</div>
          <div className="flex items-center gap-2"><User size={18} className="text-blue-600"/> {post.author}</div>
          <button className="ml-auto flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors">
            <Share2 size={18} /> Share
          </button>
        </div>

        {/* Dynamic Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-2xl shadow-blue-900/10">
           <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-gray-600 leading-loose">
          <p className="text-xl font-medium text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
            {post.content}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Understanding the market dynamics in 2026.</li>
            <li>How to implement {post.cat} effectively.</li>
            <li>Risk management strategies for modern enterprises.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}