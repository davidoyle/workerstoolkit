import { useState } from 'react';
import { Users, Megaphone, FileText, ArrowRight, ExternalLink, Heart, Share2, Check } from 'lucide-react';

const CollectiveActionPage = () => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copyPost = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const actions = [
    {
      title: 'Contact your MLA',
      description: 'Political pressure matters. MLAs need to hear from constituents about WorkSafeBC issues.',
      steps: [
        'Find your MLA at leg.bc.ca',
        'Share your story (anonymized if preferred)',
        'Ask for their support on systemic reforms',
        'Request a meeting with their constituency assistant',
      ],
      icon: Users,
    },
    {
      title: 'Share publicly',
      description: 'Media attention can drive change. Consider speaking to journalists or posting on social media.',
      steps: [
        'Contact local media outlets',
        'Use hashtags like #WorkersCompBC #InjuredWorkers',
        'Tag relevant politicians and organizations',
        'Share anonymized versions of your experience',
      ],
      icon: Megaphone,
    },
    {
      title: 'Support legislative reform',
      description: 'Advocate for changes to the Workers Compensation Act and oversight mechanisms.',
      steps: [
        'Sign petitions for injured worker rights',
        'Write to the Minister of Labour',
        'Support calls for independent oversight',
        'Attend public consultations when announced',
      ],
      icon: FileText,
    },
  ];

  const tenPoints = [
    'Independent oversight of WorkSafeBC decisions',
    'Mandatory reasons for all denials',
    'Timelines for decision-making with consequences for delays',
    'Presumption of credibility for injured workers',
    'Preference for treating physician opinions over IMEs',
    'Fair compensation for permanent disabilities',
    'Protection from employer retaliation',
    'Mental health claims treated with same standard as physical',
    'Right to legal representation at all stages',
    'Public reporting on claim outcomes and appeals',
  ];

  const socialPosts = [
    'I was injured at work. What followed was a system more focused on denying claims than helping workers recover. This needs to change. #WorkersCompBC #InjuredWorkers',
    'WorkSafeBC denied my claim despite medical evidence. 18 months later, WCAT overturned the decision. The appeal process shouldn\'t be a lottery. #SystemicReform',
    'My treating doctor of 10 years was ignored. A 20-minute file review by a Board advisor overruled them. This is evidentiary bias in action. #FixWorkSafeBC',
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Collective action</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            Change happens when we act together.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            Individual appeals matter. Systemic change requires collective pressure. Here's how to add your voice.
          </p>
        </div>

        {/* 10-Point Call to Action */}
        <div
          className="rounded-xl border p-6 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--accent-light)' }}
            >
              <Megaphone size={18} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <h2 className="font-bold text-xl mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                10-Point Call to Action
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                These reforms would transform the workers compensation system in BC.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tenPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg"
                style={{ backgroundColor: 'var(--bg)' }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold"
                  style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}
                >
                  {idx + 1}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            <button
              onClick={() => navigator.clipboard.writeText(tenPoints.join('\n'))}
              className="btn-secondary"
            >
              <Share2 size={15} />
              Copy the 10 points
            </button>
          </div>
        </div>

        {/* Action Cards */}
        <h2 className="font-bold text-xl mb-5" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
          Ways to take action
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.title}
                className="rounded-xl border p-5"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--accent-light)' }}
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                  {action.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {action.description}
                </p>
                <ul className="space-y-2">
                  {action.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                      <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Allied Groups */}
        <div
          className="rounded-xl border p-5 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Heart size={16} style={{ color: 'var(--accent)' }} />
            <h3 className="font-bold text-base" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
              Allied organizations
            </h3>
          </div>
          <p className="text-sm mb-5" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
            Groups advocating for injured workers across BC and Canada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                name: 'BC Federation of Labour',
                description: 'Provincial labour federation advocating for worker rights',
                url: 'https://bcfed.ca',
              },
              {
                name: 'Canadian Injured Workers Alliance',
                description: 'National network of injured worker groups',
                url: '#',
              },
              {
                name: 'Workers Compensation Action Group',
                description: 'Grassroots advocacy for system reform',
                url: '#',
              },
              {
                name: 'BC Ombudsperson',
                description: 'Independent oversight of administrative fairness',
                url: 'https://bcombudsperson.ca',
              },
            ].map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between p-4 rounded-lg"
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                }}
              >
                <div>
                  <h4 className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                    {org.name}
                  </h4>
                  <p className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                    {org.description}
                  </p>
                </div>
                <ExternalLink size={13} style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: 2 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Posts */}
        <div
          className="rounded-xl border p-5"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
            Sample social media posts
          </h3>
          <p className="text-sm mb-5" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
            Use these as starting points. Personalize with your own experience (anonymized).
          </p>
          <div className="space-y-3">
            {socialPosts.map((post, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-light)' }}
                >
                  <Share2 size={13} style={{ color: 'var(--accent)' }} />
                </div>
                <p className="text-sm flex-1" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                  {post}
                </p>
                <button
                  onClick={() => copyPost(post, idx)}
                  className="flex items-center gap-1.5 text-xs font-semibold flex-shrink-0 px-2.5 py-1.5 rounded-lg transition-all"
                  style={{
                    backgroundColor: copiedIdx === idx ? 'var(--success-light)' : 'var(--surface)',
                    color: copiedIdx === idx ? 'var(--success)' : 'var(--accent)',
                    border: `1px solid ${copiedIdx === idx ? 'rgba(46,125,82,0.2)' : 'var(--border)'}`,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {copiedIdx === idx ? <Check size={12} /> : null}
                  {copiedIdx === idx ? 'Copied' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectiveActionPage;
