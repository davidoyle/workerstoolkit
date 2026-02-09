import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { hasSupabase, insertRow } from '../lib/supabase';

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  const submitFeedback = async () => {
    if (!message.trim()) return;
    if (!hasSupabase) {
      setStatus('error');
      return;
    }
    setStatus('saving');
    const { error } = await insertRow('feedback_submissions', {
      page_path: window.location.pathname,
      message,
      email: email || null,
      category: 'general',
    });
    setStatus(error ? 'error' : 'done');
    if (!error) {
      setMessage('');
      setEmail('');
      setTimeout(() => setOpen(false), 1200);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-[120] btn-primary"><MessageSquare size={16} />Feedback</button>
      {open && (
        <div className="fixed inset-0 z-[130] bg-black/50 flex items-end md:items-center justify-center p-4">
          <div className="w-full max-w-md card relative">
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-[#F3EFE6]/60"><X size={16} /></button>
            <h3 className="font-heading font-bold text-xl text-[#F3EFE6] mb-3">Send feedback</h3>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What should we improve?" className="w-full min-h-28 px-3 py-2 rounded-lg bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] mb-3" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" className="w-full px-3 py-2 rounded-lg bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] mb-4" />
            <button onClick={submitFeedback} className="btn-primary" disabled={status === 'saving'}>{status === 'saving' ? 'Sending...' : 'Submit feedback'}</button>
            {status === 'done' && <p className="text-green-300 text-sm mt-2">Thanks for helping improve the toolkit.</p>}
            {status === 'error' && <p className="text-red-300 text-sm mt-2">Unable to send feedback. Check Supabase configuration.</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;
