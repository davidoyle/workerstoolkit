import { useState } from 'react';
import { MessageSquare, X, Send, Check } from 'lucide-react';
import { isSupabaseConfigured, getSupabaseClient } from '@/lib/supabase';

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [page, setPage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!feedback.trim()) return;
    setStatus('submitting');

    try {
      if (isSupabaseConfigured()) {
        const supabase = getSupabaseClient();
        const { error } = await supabase.from('feedback').insert({
          message: feedback,
          page: page || window.location.pathname,
          created_at: new Date().toISOString(),
        });
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 800));
        console.log('Feedback submitted (Supabase not configured):', { feedback, page });
      }

      setStatus('success');
      setFeedback('');
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 2000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#D4A03A] text-[#0B3C43] shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
        aria-label="Send feedback"
      >
        <MessageSquare size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative bg-[#0B3C43] border border-[#F3EFE6]/15 rounded-[24px] p-6 w-full max-w-md shadow-2xl">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-[#F3EFE6]/50 hover:text-[#F3EFE6]">
              <X size={20} />
            </button>

            {status === 'success' ? (
              <div className="text-center py-6">
                <Check size={40} className="text-[#D4A03A] mx-auto mb-3" />
                <p className="body-text text-[#F3EFE6]">Thank you for your feedback.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-1">Send Feedback</h3>
                <p className="body-text text-[#F3EFE6]/60 text-sm mb-4">Found an issue? Have a suggestion? Let us know.</p>

                <input type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="Which page? (optional)" className="w-full px-4 py-2 rounded-lg bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 text-sm focus:outline-none focus:border-[#D4A03A] mb-3" />

                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your feedback..." rows={4} className="w-full px-4 py-3 rounded-lg bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 text-sm focus:outline-none focus:border-[#D4A03A] resize-none mb-4" />

                {status === 'error' && <p className="body-text text-red-400 text-sm mb-3">Something went wrong. Please try again.</p>}

                <button onClick={handleSubmit} disabled={!feedback.trim() || status === 'submitting'} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'submitting' ? (<><div className="w-4 h-4 border-2 border-[#0B3C43]/30 border-t-[#0B3C43] rounded-full animate-spin" />Sending...</>) : (<><Send size={16} />Send Feedback</>)}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackButton;
