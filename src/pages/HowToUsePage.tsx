import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FolderOpen, Scale, Mail, BookMarked, ChevronDown, ChevronUp,
  FileText, Phone, ClipboardCheck, AlertTriangle, Download, ArrowRight
} from 'lucide-react';

const HowToUsePage = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>('secure');

  const toggleCard = (card: string) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  const moves = [
    {
      id: 'secure',
      number: '1',
      title: 'Secure the evidence',
      description: 'Save decisions, photos, texts, call logs.',
      icon: FolderOpen,
      content: {
        intro: 'If it isn\'t documented, they\'ll swear it never happened. WorkSafeBC lives on paper — and pixels. Phone calls vanish. Misunderstandings appear. Memories get convenient.',
        checklist: [
          'Medical & Health Evidence: Doctor reports, specialist consultations, physiotherapy reports, imaging results',
          'WorkSafeBC Documents: Claim letters, decisions, case manager emails, portal messages',
          'Employer Evidence: Incident reports, emails about modified duties, performance issues',
          'Financial Evidence: Pay stubs, EI records, rent statements, eviction threats',
        ],
        action: 'Start a simple timeline today. Write down 5–10 key dates: injury, first doctor visit, first decision, any big changes.',
        link: '/tools',
        linkText: 'Get documentation templates',
      },
    },
    {
      id: 'identify',
      number: '2',
      title: 'Identify violations',
      description: 'Map what they did to what the Act requires.',
      icon: Scale,
      content: {
        intro: 'WorkSafeBC must follow the Workers Compensation Act. When they don\'t, you have leverage. The key is knowing which sections apply to your situation.',
        checklist: [
          'Section 5: Compensation for personal injury arising out of employment',
          'Section 151: Right to request medical reports and evidence',
          'Section 244: Review Division procedures and timelines',
          'Section 285: WCAT jurisdiction and standards',
        ],
        action: 'Learn three key phrases: "arising out of employment," "significant contributing factor," "preponderance of evidence." These are the tests they have to meet.',
        link: '/glossary',
        linkText: 'View full glossary',
      },
    },
    {
      id: 'pressure',
      number: '3',
      title: 'Send targeted pressure',
      description: 'Use the words that create accountability.',
      icon: Mail,
      content: {
        intro: 'You don\'t need to be a lawyer. You need to ask the right questions — on paper. Written communication creates a record they can\'t ignore.',
        checklist: [
          'Email to WorkSafeBC: Request the specific evidence they relied on',
          'Letter to your MLA: Frame as oversight, not casework',
          'Minister escalation: Document systemic patterns, not just your case',
          'Ombudsperson complaint: When internal processes fail',
        ],
        action: 'Always write, never just call. If you do call, follow up immediately with an email summarizing what was discussed.',
        link: '/email-templates',
        linkText: 'Copy email templates',
      },
    },
    {
      id: 'study',
      number: '4',
      title: 'Study what won',
      description: 'WCAT decisions show what actually works.',
      icon: BookMarked,
      content: {
        intro: 'Other workers have faced similar battles and won. WCAT decisions are public record and show what evidence, framing, and persistence can achieve.',
        checklist: [
          'Mental disorder claims: A1900037 — refusal to accommodate as stressor',
          'Cumulative trauma: A2101129 — repeated minor incidents as compensable',
          'No clear diagnosis: 2004-06686 — mechanism + credible evidence sufficient',
          'Late applications: 2014-01368 — mental disorder delaying filing',
        ],
        action: 'Read decisions in your category. Note what evidence carried weight and which legal arguments succeeded. Then use that language in your own submissions.',
        link: '/precedents',
        linkText: 'Browse all precedents',
      },
    },
  ];

  const quickStart = [
    { title: 'Claim Timeline', icon: FileText, desc: 'One page: dates, decisions, what changed' },
    { title: 'Call Log', icon: Phone, desc: 'Who you spoke to, when, what was promised' },
    { title: 'Evidence Checklist', icon: ClipboardCheck, desc: 'Photos, texts, reports, forms' },
    { title: 'Violation Tracker', icon: AlertTriangle, desc: 'Match their actions to Act sections' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">How to use this</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            The first four moves.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            You don't need to learn everything. Start here. Each move builds on the last, turning your experience into evidence they can't dismiss.
          </p>
        </div>

        {/* Warning box */}
        <div className="attention-box mb-10 max-w-2xl">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle size={17} style={{ color: 'var(--attention)', flexShrink: 0, marginTop: 1 }} />
            <p className="font-semibold text-sm" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
              Before you do anything else
            </p>
          </div>
          <ul className="space-y-2">
            {[
              "Don't call just to 'talk it through' with no notes.",
              "Don't agree to anything on the phone you don't understand.",
              "Don't send a rage email you can't walk back.",
            ].map((item, idx) => (
              <li key={idx} className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm mt-3" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
            <strong>Do this first:</strong> Save a copy of whatever they sent. Write the date, what they decided, and how it affects you. Then take ten minutes to figure out what kind of issue it is.
          </p>
        </div>

        {/* Expandable move cards */}
        <div className="space-y-3 mb-14">
          {moves.map((move) => {
            const Icon = move.icon;
            const isExpanded = expandedCard === move.id;

            return (
              <div
                key={move.id}
                className="rounded-xl border overflow-hidden transition-all"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: isExpanded ? 'var(--accent)' : 'var(--border)',
                }}
              >
                <button
                  onClick={() => toggleCard(move.id)}
                  className="w-full p-5 lg:p-6 flex items-start gap-5 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs mb-1" style={{ color: 'var(--text-3)' }}>
                          Move {move.number}
                        </p>
                        <h3 className="font-bold text-lg" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                          {move.title}
                        </h3>
                      </div>
                      {isExpanded
                        ? <ChevronUp size={20} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                        : <ChevronDown size={20} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                      }
                    </div>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                      {move.description}
                    </p>
                  </div>
                </button>

                {isExpanded && (
                  <div
                    className="px-5 lg:px-6 pb-6 pt-4"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <p className="body-text mb-5" style={{ color: 'var(--text-2)' }}>
                      {move.content.intro}
                    </p>

                    <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                      Key points
                    </p>
                    <ul className="space-y-2 mb-5">
                      {move.content.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                            style={{ backgroundColor: 'var(--accent)' }}
                          />
                          <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="tip-box mb-5">
                      <p className="text-sm" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                        <strong>Action step:</strong> {move.content.action}
                      </p>
                    </div>

                    <Link to={move.content.link} className="btn-primary inline-flex">
                      {move.content.linkText}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick start tools */}
        <div className="mb-14">
          <div className="mb-6">
            <p className="eyebrow mb-2">Quick start</p>
            <h2 className="headline-md mb-2" style={{ color: 'var(--text)' }}>
              Download these now.
            </h2>
            <p className="body-text" style={{ color: 'var(--text-2)' }}>
              Print them out or fill them in digitally. Start building your record today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStart.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="p-5 rounded-xl border"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                    {tool.title}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                    {tool.desc}
                  </p>
                  <button
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: 'var(--accent)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <Download size={14} />
                    Download PDF
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUsePage;
