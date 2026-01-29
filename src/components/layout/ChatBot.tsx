import { useState, useRef, useEffect } from 'react';
import { X, Send, ChevronRight, Sparkles, BotMessageSquare } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: 'Hello! 👋 Welcome to CID Consulting. How can we help you achieve your goals today?', 
      sender: 'bot', 
      timestamp: new Date() 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, chatOpen]);

  const quickReplies = [
    'Explore Services 💼',
    'Book a Consultation 📅',
    'Get Contact Info 📞',
    'Request Pricing 💰'
  ];

  // const getBotResponse = (userMessage: string): string => {
  //   const msg = userMessage.toLowerCase();
  //   if (msg.includes('service')) return 'We offer Strategy, HR, and Financial Auditing. Which one interests you?';
  //   if (msg.includes('book')) return 'You can book a slot directly on our Booking page.';
  //   return 'Thank you. A consultant will cover this shortly.';
  // };

  const handleSend = async (text: string = message) => {
    if (!text.trim()) return;
    const userMsg: Message = { text: text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setMessage('');
    setIsTyping(true);

    try {
      // 3. نداء الباك إند الحقيقي (FastAPI)
      const response = await fetch('http://127.0.0.1:8000/api/chatbot/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          // بنجيب الـ session_id لو موجود في الـ localStorage عشان البوت يفتكرنا
          session_id: localStorage.getItem('chat_session_id') || null
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();

      // 4. إضافة رد البوت الذكي القادم من OpenAI
      setMessages(prev => [...prev, { 
        text: data.message, 
        sender: 'bot', 
        timestamp: new Date() 
      }]);

      // 5. حفظ الـ session_id الجديد لو دي أول مرة
      if (data.session_id) {
        localStorage.setItem('chat_session_id', data.session_id);
      }

    } catch (error) {
      console.error('Chat Error:', error);
      // رد بديل في حالة وقوع السيرفر
      setMessages(prev => [...prev, { 
        text: "I'm having trouble reaching my strategy brain. Please try again later.", 
        sender: 'bot', 
        timestamp: new Date() 
      }]);
    } finally {
      // 6. إيقاف الأنيميشن في كل الأحوال
      setIsTyping(false);
    }
    // setTimeout(() => {
    //   setIsTyping(false);
    //   const botResponse = getBotResponse(text);
    //   setMessages(prev => [...prev, { text: botResponse, sender: 'bot', timestamp: new Date() }]);
    // }, 1500);
    
  };
  


  return (
    /* التعديل الجوهري: إضافة pointer-events-none للحاوية الكبرى */
    /* هذا يمنع الشات بوت من تكوين "جدار شفاف" يحجب باقي الموقع */
    <div className="fixed bottom-6 right-6 z-999 flex flex-col items-end gap-4 font-sans pointer-events-none">
      
      {/* 1. نافذة المحادثة */}
      <div 
        className={`
          transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] origin-bottom-right
          /* التعديل: تفعيل pointer-events-auto فقط عندما تكون النافذة مفتوحة */
          ${chatOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}
          w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col
        `}
        style={{ height: '550px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-[#1e3a8a] p-4 flex justify-between items-center text-white shadow-md relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={60} /></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <BotMessageSquare size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm">CID Smart Assistant</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                 <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                 <p className="text-[10px] text-blue-100 opacity-90">Online now</p>
              </div>
            </div>
          </div>
          <button onClick={() => setChatOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors relative z-10 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-5 bg-slate-50 space-y-5 custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-3.5 text-sm shadow-sm relative ${msg.sender === 'user' ? 'bg-[#1e3a8a] text-white rounded-2xl rounded-tr-sm' : 'bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-sm'}`}>
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
               </div>
             </div>
          )}
          {messages.length === 1 && !isTyping && (
            <div className="grid gap-2 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <p className="text-xs text-gray-400 font-medium ml-1 mb-1">Suggested topics:</p>
               {quickReplies.map((reply, i) => (
                 <button key={i} onClick={() => handleSend(reply)} className="w-full text-left bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-200 p-3 rounded-xl text-sm text-gray-700 transition-all flex justify-between items-center group cursor-pointer">
                   {reply} <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                 </button>
               ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer */}
        <div className="p-3 bg-white border-t border-gray-100 shrink-0">
           <div className="flex items-center gap-2">
             <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your message..." className="flex-1 bg-gray-50 text-sm p-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 transition-all"/>
             <button onClick={() => handleSend()} disabled={!message.trim()} className="p-3.5 bg-[#1e3a8a] text-white rounded-xl hover:bg-blue-800 disabled:opacity-50 transition-all shadow-lg shadow-blue-900/20 cursor-pointer"><Send size={18} /></button>
           </div>
        </div>
      </div>

      {/* 2. زر التبديل (Toggle Button) */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        /* التعديل: إضافة pointer-events-auto لكي يظل الزر قابلاً للضغط */
        className={`
          pointer-events-auto
          relative w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
          transition-all duration-500 hover:scale-105 hover:-translate-y-1 z-10
          flex items-center justify-center group cursor-pointer
          ${chatOpen ? 'bg-white text-[#1e3a8a]' : 'bg-[#1e3a8a] text-white'}
        `}
      >
        {!chatOpen && (
          <span className="absolute -inset-2 rounded-full bg-[#1e3a8a] opacity-20 animate-pulse blur-md -z-10"></span>
        )}

        <div className="relative w-full h-full flex items-center justify-center">
            <div className={`absolute transition-all duration-500 transform ${chatOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
               <BotMessageSquare size={28} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className={`absolute transition-all duration-500 transform ${chatOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
               <X size={28} strokeWidth={2} />
            </div>
        </div>

        {!chatOpen && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow-sm z-20"></span>
        )}
      </button>

    </div>
  );
}