import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Check, Mail, Shield, Eye, Info } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ backgroundColor: 'var(--bg)' }}>
        <div className="px-6 lg:px-[8vw] pt-10 pb-16">
          <div className="max-w-xl mx-auto text-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'var(--success-light)' }}
            >
              <Check size={28} style={{ color: 'var(--success)' }} />
            </div>
            <h1 className="headline-md mb-4" style={{ color: 'var(--text)' }}>
              Submitted. Thank you.
            </h1>
            <p className="body-text mb-8" style={{ color: 'var(--text-2)' }}>
              We'll review your story and may follow up with clarifying questions. Once published, it will help other workers understand they're not alone.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/stories" className="btn-primary">
                Read other stories
              </Link>
              <Link to="/" className="btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '8px',
    width: '100%',
    padding: '11px 14px',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  };

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.borderColor = 'var(--accent)';
    (e.target as HTMLElement).style.boxShadow = '0 0 0 3px var(--accent-light)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.borderColor = 'var(--border)';
    (e.target as HTMLElement).style.boxShadow = 'none';
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        <div className="max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <p className="eyebrow mb-3">Share your story</p>
            <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
              Add your experience to the record.
            </h1>
            <p className="body-text" style={{ color: 'var(--text-2)' }}>
              The more we document, the stronger the case for change. Your experience can help others prepare, push back, and feel less alone.
            </p>
          </div>

          {/* Privacy */}
          <div
            className="rounded-xl border p-5 mb-8"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--accent-light)' }}
              >
                <Shield size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-3" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                  Your privacy is protected
                </p>
                <ul className="space-y-2">
                  {[
                    'We remove all names, locations, and claim numbers',
                    'Your employer and WorkSafeBC will not be identified',
                    'We never share your contact information',
                    'You can request removal at any time',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Eye size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="form-label mb-2 block">
                  What type of issue? <span style={{ color: 'var(--attention)' }}>*</span>
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  style={{ ...inputStyle, appearance: 'auto' }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select...</option>
                  <option value="delay">Delay in processing</option>
                  <option value="denial">Claim denial</option>
                  <option value="mental-health">Mental health claim</option>
                  <option value="retaliation">Employer retaliation</option>
                  <option value="return-to-work">Return to work issues</option>
                  <option value="wcat-win">WCAT appeal win</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="form-label mb-2 block">
                  What year did this happen? <span style={{ color: 'var(--attention)' }}>*</span>
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  style={{ ...inputStyle, appearance: 'auto' }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select...</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="earlier">Earlier</option>
                </select>
              </div>
            </div>

            <div>
              <label className="form-label mb-1 block">
                What happened? <span style={{ color: 'var(--attention)' }}>*</span>
              </label>
              <p className="text-xs mb-2" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                Include key dates, decisions, and how you were affected. We'll remove all identifying information before publishing.
              </p>
              <textarea
                value={formData.whatHappened}
                onChange={(e) => setFormData({ ...formData, whatHappened: e.target.value })}
                placeholder="I was injured at work when..."
                rows={6}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>

            <div>
              <label className="form-label mb-1 block">
                What was the outcome?
              </label>
              <p className="text-xs mb-2" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                Is your case resolved? Still ongoing? What happened with appeals?
              </p>
              <textarea
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                placeholder="The claim was initially denied..."
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label className="form-label mb-1 block">
                What would you tell other workers?
              </label>
              <p className="text-xs mb-2" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                What did you learn? What would you do differently? What helped you?
              </p>
              <textarea
                value={formData.lessons}
                onChange={(e) => setFormData({ ...formData, lessons: e.target.value })}
                placeholder="Document everything from day one..."
                rows={3}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Confirmation */}
            <div
              className="flex items-start gap-3 p-4 rounded-lg"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <input
                type="checkbox"
                id="confirm"
                checked={formData.confirmed}
                onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                className="mt-0.5 w-4 h-4 flex-shrink-0"
                style={{ accentColor: 'var(--accent)' }}
                required
              />
              <label htmlFor="confirm" className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55', cursor: 'pointer' }}>
                I confirm this is my own experience. I understand that all names, locations, and identifying details will be removed before publication.
              </label>
            </div>

            {/* Newsletter */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
              <div className="flex items-start gap-3 mb-4">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="mt-0.5 w-4 h-4 flex-shrink-0"
                  style={{ accentColor: 'var(--accent)' }}
                />
                <label htmlFor="newsletter" className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55', cursor: 'pointer' }}>
                  Keep me updated on new tools, precedents, and stories. Your email will not be published or shared.
                </label>
              </div>

              {formData.newsletter && (
                <div className="ml-7">
                  <div className="relative max-w-sm">
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      style={{ ...inputStyle, paddingLeft: '38px' }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              {isSubmitting ? (
                <>
                  <div
                    className="w-4 h-4 rounded-full border-2 animate-spin"
                    style={{ borderColor: 'rgba(255,255,255,0.3)', borderTopColor: 'white' }}
                  />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Submit story
                </>
              )}
            </button>

            <div className="flex items-start gap-2">
              <Info size={14} style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: 2 }} />
              <p className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                This submission is for the Workers Toolkit archive only. It does not create any legal relationship or constitute a formal complaint to any regulatory body.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
