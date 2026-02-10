import { useState } from 'react';
import { Send, Check, Shield, Eye, Info } from 'lucide-react';
import { isSupabaseConfigured, getSupabaseClient } from '@/lib/supabase';

const issueTagOptions = [
  { value: 'delay', label: 'Delay in processing' },
  { value: 'denial', label: 'Claim denial' },
  { value: 'mental-health', label: 'Mental health claim' },
  { value: 'retaliation', label: 'Employer retaliation' },
  { value: 'return-to-work', label: 'Return to work issues' },
  { value: 'evidence-ignored', label: 'Evidence ignored' },
  { value: 'wcat-win', label: 'WCAT appeal win' },
  { value: 'other', label: 'Other' },
];

const SubmitPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    incidentMonthYear: '',
    issueTags: [] as string[],
    story: '',
    publicPermission: false,
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const toggleIssueTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      issueTags: prev.issueTags.includes(tag)
        ? prev.issueTags.filter((t) => t !== tag)
        : [...prev.issueTags, tag],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (isSupabaseConfigured()) {
        const supabase = getSupabaseClient();
        const { error: insertError } = await supabase.from('stories').insert({
          full_name: formData.name || null,
          phone: formData.phone || null,
          email: formData.email || null,
          postal_code: formData.postalCode || null,
          incident_month_year: formData.incidentMonthYear,
          issue_tags: formData.issueTags,
          story: formData.story,
          public_permission: formData.publicPermission,
          consent: formData.consent,
        });
        if (insertError) throw new Error(insertError.message);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Story submitted (Supabase not configured):', formData);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="w-20 h-20 rounded-full bg-[#D4A03A]/20 flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-[#D4A03A]" />
          </div>
          <h1 className="headline-lg text-[#F3EFE6] mb-4">Thank you</h1>
          <p className="body-text text-[#F3EFE6]/70 mb-8">
            Your story has been submitted. We'll review it and may follow up with
            clarifying questions. Once published, it will help other workers understand
            they're not alone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/stories" className="btn-primary">Read other stories</a>
            <a href="/" className="btn-secondary">Back to home</a>
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
          <p className="body-text text-[#F3EFE6]/70">
            The more we document, the stronger the case for change. Your experience
            can help others prepare, push back, and feel less alone.
          </p>
        </div>

        <div className="card mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4A03A]/15 flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-[#D4A03A]" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-[#F3EFE6] mb-2">Your privacy is protected</h3>
              <ul className="space-y-2">
                {['We remove all names, locations, and claim numbers', 'Your employer and WorkSafeBC will not be identified', 'We never share your contact information', 'You can request removal at any time'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Eye size={14} className="text-[#D4A03A] mt-1 flex-shrink-0" />
                    <span className="body-text text-[#F3EFE6]/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="form-label text-[#F3EFE6]/70 mb-2 block">Name (optional)</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 focus:outline-none focus:border-[#D4A03A]" />
            </div>
            <div>
              <label className="form-label text-[#F3EFE6]/70 mb-2 block">Email (optional)</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 focus:outline-none focus:border-[#D4A03A]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="form-label text-[#F3EFE6]/70 mb-2 block">Phone (optional)</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 focus:outline-none focus:border-[#D4A03A]" />
            </div>
            <div>
              <label className="form-label text-[#F3EFE6]/70 mb-2 block">Postal Code (optional)</label>
              <input type="text" value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} placeholder="V5K 1A1" className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 focus:outline-none focus:border-[#D4A03A]" />
            </div>
          </div>

          <div>
            <label className="form-label text-[#F3EFE6]/70 mb-2 block">Month/Year of incident or decision <span className="text-[#D4A03A]">*</span></label>
            <input type="text" value={formData.incidentMonthYear} onChange={(e) => setFormData({ ...formData, incidentMonthYear: e.target.value })} placeholder="e.g., November 2024" className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 focus:outline-none focus:border-[#D4A03A]" required />
          </div>

          <div>
            <label className="form-label text-[#F3EFE6]/70 mb-2 block">What type of issue? (select all that apply)</label>
            <div className="flex flex-wrap gap-2">
              {issueTagOptions.map((tag) => (
                <button key={tag.value} type="button" onClick={() => toggleIssueTag(tag.value)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${formData.issueTags.includes(tag.value) ? 'bg-[#D4A03A] text-[#0B3C43]' : 'bg-[#F3EFE6]/5 text-[#F3EFE6]/70 hover:bg-[#F3EFE6]/10 border border-[#F3EFE6]/15'}`}>
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label text-[#F3EFE6]/70 mb-2 block">Your story <span className="text-[#D4A03A]">*</span></label>
            <p className="body-text text-[#F3EFE6]/50 text-xs mb-2">Tell us what happened. Include key dates, decisions, and how you were affected. We'll remove all identifying information.</p>
            <textarea value={formData.story} onChange={(e) => setFormData({ ...formData, story: e.target.value })} placeholder="I was injured at work when..." rows={6} className="w-full px-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6] placeholder:text-[#F3EFE6]/30 focus:outline-none focus:border-[#D4A03A] resize-none" required />
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/10">
            <input type="checkbox" id="publicPermission" checked={formData.publicPermission} onChange={(e) => setFormData({ ...formData, publicPermission: e.target.checked })} className="mt-1 w-4 h-4 rounded border-[#F3EFE6]/30 bg-transparent text-[#D4A03A] focus:ring-[#D4A03A]" />
            <label htmlFor="publicPermission" className="body-text text-[#F3EFE6]/70 text-sm">I give permission for an anonymized version of my story to be published on this site to help other workers.</label>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/10">
            <input type="checkbox" id="consent" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} className="mt-1 w-4 h-4 rounded border-[#F3EFE6]/30 bg-transparent text-[#D4A03A] focus:ring-[#D4A03A]" required />
            <label htmlFor="consent" className="body-text text-[#F3EFE6]/70 text-sm">I consent to share this story for analysis and pattern detection. I understand identifying details will be removed. <span className="text-[#D4A03A]">*</span></label>
          </div>

          {error && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20"><p className="body-text text-red-400 text-sm">{error}</p></div>}

          <button type="submit" disabled={isSubmitting || !formData.story || !formData.incidentMonthYear || !formData.consent} className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? (<><div className="w-5 h-5 border-2 border-[#0B3C43]/30 border-t-[#0B3C43] rounded-full animate-spin" />Submitting...</>) : (<><Send size={18} />Submit story</>)}
          </button>

          <div className="flex items-start gap-3 text-[#F3EFE6]/50">
            <Info size={16} className="mt-0.5 flex-shrink-0" />
            <p className="body-text text-xs">This submission is for the Workers Toolkit archive only. It does not create any legal relationship or constitute a formal complaint to any regulatory body.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;
