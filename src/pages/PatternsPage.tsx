import { Link } from 'react-router-dom';
import { TrendingUp, AlertTriangle, Clock, Brain, Shield, FileX, Eye, BarChart3 } from 'lucide-react';

const PatternsPage = () => {
  const denialTactics = [
    {
      tactic: '"Pre-existing condition" dismissal',
      description: 'Claiming your injury is due to a prior condition, ignoring that work aggravated it.',
      frequency: 'Very common',
      icon: FileX,
    },
    {
      tactic: '"Soft tissue only" minimization',
      description: 'Labeling serious injuries as minor soft tissue damage to limit benefits.',
      frequency: 'Very common',
      icon: AlertTriangle,
    },
    {
      tactic: 'IME over treating physician',
      description: 'Preferring a 20-minute file review over your doctor who knows your history.',
      frequency: 'Extremely common',
      icon: Eye,
    },
    {
      tactic: '"Non-cooperative" labeling',
      description: 'Flagging workers who ask questions or challenge decisions.',
      frequency: 'Common',
      icon: Shield,
    },
    {
      tactic: 'Delay until worker gives up',
      description: 'Strategic delays hoping workers will abandon their claims.',
      frequency: 'Very common',
      icon: Clock,
    },
  ];

  const gaslightingPhrases = [
    {
      phrase: '"That\'s just the standard process."',
      translation: 'We know it\'s frustrating, but we\'re not going to change it.',
    },
    {
      phrase: '"Our medical advisors reviewed your file."',
      translation: 'Someone who never examined you disagrees with your doctor.',
    },
    {
      phrase: '"You should be recovered by now."',
      translation: 'We\'ve decided your pain isn\'t real, regardless of what you say.',
    },
    {
      phrase: '"There\'s no objective evidence."',
      translation: 'Your subjective experience doesn\'t count.',
    },
    {
      phrase: '"We need more information."',
      translation: 'We\'re stalling and hoping you\'ll go away.',
    },
  ];

  const stats = [
    {
      label: 'Average time to WCAT decision',
      value: '18–24',
      unit: 'months',
      icon: Clock,
    },
    {
      label: 'WCAT appeals that succeed',
      value: '~40%',
      unit: '',
      icon: BarChart3,
    },
    {
      label: 'Workers who give up before appeal',
      value: 'Unknown',
      unit: 'not tracked',
      icon: Eye,
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Patterns we're seeing</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            You're not the only one.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            These patterns come from anonymized story submissions and public WCAT decisions. They validate individual experiences and inform our advocacy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border p-5 text-center"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--accent-light)' }}
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="font-bold text-3xl mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                  {stat.value}
                </div>
                {stat.unit && (
                  <div className="font-mono text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)' }}>
                    {stat.unit}
                  </div>
                )}
                <p className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Denial Tactics */}
        <div className="mb-10">
          <h2
            className="font-bold text-xl mb-5 flex items-center gap-3"
            style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}
          >
            <TrendingUp size={20} style={{ color: 'var(--accent)' }} />
            The five most common denial patterns
          </h2>

          <div className="space-y-3">
            {denialTactics.map((tactic, idx) => {
              const Icon = tactic.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border p-5 flex items-start gap-4"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-bold text-base" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                        {tactic.tactic}
                      </h3>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: 'var(--attention-light)',
                          color: 'var(--attention)',
                        }}
                      >
                        {tactic.frequency}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                      {tactic.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gaslighting Phrases */}
        <div className="mb-10">
          <h2
            className="font-bold text-xl mb-5 flex items-center gap-3"
            style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}
          >
            <Brain size={20} style={{ color: 'var(--accent)' }} />
            Common phrases in decision letters
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {gaslightingPhrases.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border p-5"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="mb-3">
                  <span
                    className="font-mono text-[10px] uppercase tracking-wide block mb-1.5"
                    style={{ color: 'var(--text-3)' }}
                  >
                    What they say
                  </span>
                  <p className="text-sm italic" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                    {item.phrase}
                  </p>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <span
                    className="font-mono text-[10px] uppercase tracking-wide block mb-1.5"
                    style={{ color: 'var(--attention)' }}
                  >
                    What it means
                  </span>
                  <p className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                    {item.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Red Flags */}
        <div
          className="rounded-xl border p-5 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <h3
            className="font-bold text-base mb-4 flex items-center gap-2"
            style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}
          >
            <AlertTriangle size={16} style={{ color: 'var(--attention)' }} />
            Red flags that signal appealable errors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Decision ignores or mischaracterizes your treating physician\'s opinion',
              'No clear explanation for rejecting key evidence',
              'Relies on IME that contradicts without addressing treating doctor\'s reasoning',
              'Findings of fact not supported by evidence in the file',
              'Misapplication of legal tests (e.g., "sole cause" instead of "significant contributing factor")',
              'Decision refers to documents you were never shown',
              'Case manager made decision without required consultation',
              'Timeline violations (delays beyond statutory limits)',
            ].map((flag, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg"
                style={{ backgroundColor: 'var(--bg)' }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: 'var(--attention)' }}
                />
                <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {flag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="pt-10"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-xl">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
              See a pattern we missed?
            </h3>
            <p className="body-text mb-5" style={{ color: 'var(--text-2)' }}>
              Your experience helps identify new patterns and build better tools. Submit your story anonymously.
            </p>
            <Link to="/submit" className="btn-primary">
              Submit your story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsPage;
