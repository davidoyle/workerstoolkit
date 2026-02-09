import { useState } from 'react';
import { Send, Check, Shield, Eye, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hasSupabase, insertRow, invokeFunction } from '../lib/supabase';

const SubmitPage = () => {
  const [formData, setFormData] = useState({
    topic: '',
    year: '',
    whatHappened: '',
    outcome: '',
    lessons: '',
    confirmed: false,
    newsletter: false,
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!hasSupabase) {
      setError('Submission backend is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
      return;
    }

    setIsSubmitting(true);
    const { error: insertError } = await insertRow('story_submissions', {
      topic: formData.topic,
      year: formData.year,
      what_happened: formData.whatHappened,
      outcome: formData.outcome,
      lessons: formData.lessons,
      confirmed: formData.confirmed,
      newsletter: formData.newsletter,
      email: formData.email || null,
    });

    if (insertError) {
      setError(insertError.message);
      setIsSubmitting(false);
      return;
    }

    await invokeFunction('notify-submission', { topic: formData.topic, year: formData.year, email: formData.email || null });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="w-20 h-20 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mx-auto mb-6"><Check size={40} className="text-[#D4A03A]" /></div>
          <h1 className="headline-lg text-[#F3EFE6] mb-4">Thank you</h1>
          <p className="body-text text-[#F3EFE6]/70 mb-8">Your story has been submitted.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/stories" className="btn-primary">Read other stories</Link>
            <Link to="/" className="btn-secondary">Back to home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="eyebrow mb-4 block">Share Your Story</span>
          <h1 className="headline-lg text-[#F3EFE6] mb-4">Add your story to the record.</h1>
        </div>

        <div className="card mb-8">
          <h3 className="font-heading font-bold text-base text-[#F3EFE6] mb-2 flex items-center gap-2"><Shield size={18} className="text-[#D4A03A]" />Your privacy is protected</h3>
          <ul className="space-y-2">
            {['We remove names and claim numbers', 'We never share contact info', 'You can request removal at any time'].map((item) => (
              <li key={item} className="flex items-start gap-2"><Eye size={14} className="text-[#D4A03A] mt-1" /><span className="body-text text-[#F3EFE6]/60 text-sm">{item}</span></li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input required placeholder="Topic" value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6]" />
          <input required placeholder="Year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6]" />
          <textarea required placeholder="What happened" value={formData.whatHappened} onChange={(e) => setFormData({ ...formData, whatHappened: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] min-h-32" />
          <textarea placeholder="Outcome" value={formData.outcome} onChange={(e) => setFormData({ ...formData, outcome: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] min-h-20" />
          <textarea placeholder="Lessons" value={formData.lessons} onChange={(e) => setFormData({ ...formData, lessons: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] min-h-20" />
          <input type="email" placeholder="Email (optional)" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6]" />
          <label className="flex items-center gap-2 text-[#F3EFE6]/70 text-sm"><input type="checkbox" checked={formData.confirmed} onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })} /> I confirm this is accurate.</label>
          {error && <p className="text-red-300 text-sm flex items-center gap-2"><AlertCircle size={14} />{error}</p>}
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">{isSubmitting ? 'Submitting...' : <><Send size={16} />Submit story</>}</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;
