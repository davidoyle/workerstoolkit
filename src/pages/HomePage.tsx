import { Link } from 'react-router-dom';
import { ArrowRight, FolderOpen, Scale, Mail, BookMarked, FileCheck, Clock, Brain } from 'lucide-react';

const HomePage = () => {
  const entryPoints = [
    {
      label: 'My claim was just denied',
      sub: 'Learn what to do first',
      path: '/how-to-use',
      icon: Scale,
    },
    {
      label: 'I need to document this properly',
      sub: 'Evidence templates & checklists',
      path: '/tools',
      icon: FolderOpen,
    },
    {
      label: "I'm preparing an appeal",
      sub: 'Precedents & submission language',
      path: '/precedents',
      icon: BookMarked,
    },
    {
      label: 'I need to send them something',
      sub: 'Copy-ready email templates',
      path: '/email-templates',
      icon: Mail,
    },
  ];

  const moves = [
    {
      number: '1',
      title: 'Secure the evidence',
      description: 'Save decisions, photos, texts, and call logs. If it is not documented, it can be disputed or denied.',
      link: '/tools',
    },
    {
      number: '2',
      title: 'Identify violations',
      description: 'Compare what they did to what the Act requires. Work through it section by section.',
      link: '/glossary',
    },
    {
      number: '3',
      title: 'Send targeted pressure',
      description: 'Written communication creates accountability. Use the right language.',
      link: '/email-templates',
    },
    {
      number: '4',
      title: 'Study what won',
      description: 'WCAT decisions are public record. They show what evidence and arguments actually worked.',
      link: '/precedents',
    },
  ];

  const stories = [
    {
      title: "They said it was 'just stress.'",
      category: 'Mental health',
      preview: 'My doctor diagnosed work-related anxiety. WorkSafeBC said it was a pre-existing condition. It took 8 months and a specialist report to get them to acknowledge the workplace bullying.',
    },
    {
      title: 'My employer changed their story.',
      category: 'Retaliation',
      preview: 'First they said I was job-attached. Then they said I quit. The Board accepted both versions without questioning the contradiction.',
    },
    {
      title: 'WCAT overturned the denial.',
      category: 'WCAT win',
      preview: 'It took 18 months, but the Tribunal found the Board ignored my treating physician and relied solely on an internal advisor who never examined me.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="px-6 lg:px-[8vw] pt-16 pb-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">BC Injured Workers Resource</p>
          <h1 className="headline-xl mb-5" style={{ color: 'var(--text)' }}>
            Your claim deserves a fair fight.
          </h1>
          <p className="body-text mb-8" style={{ color: 'var(--text-2)', maxWidth: '520px' }}>
            A practical toolkit for injured workers in BC navigating WorkSafeBC. It includes evidence templates, appeal language, WCAT precedents, and strategies that work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/how-to-use" className="btn-primary">
              Start with the first four moves
              <ArrowRight size={16} />
            </Link>
            <Link to="/stories" className="btn-secondary">
              Read worker stories
            </Link>
          </div>
          <p className="mt-5 text-xs" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
            No legal advice. Independent and worker-led.
          </p>
        </div>
      </section>

      {/* Situation entry points */}
      <section className="px-6 lg:px-[8vw] py-14" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="mb-8">
          <p className="eyebrow mb-2">Where are you right now?</p>
          <h2 className="headline-md" style={{ color: 'var(--text)' }}>
            Pick where to start.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entryPoints.map((entry) => {
            const Icon = entry.icon;
            return (
              <Link
                key={entry.path}
                to={entry.path}
                className="group block p-5 rounded-xl border transition-all"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-light)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--surface)';
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--accent-light)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                  {entry.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                  {entry.sub}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* The four moves */}
      <section className="px-6 lg:px-[8vw] py-14" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="mb-8">
          <p className="eyebrow mb-2">How to use this</p>
          <h2 className="headline-md mb-2" style={{ color: 'var(--text)' }}>
            The first four moves.
          </h2>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            You do not need to learn everything at once. Start here. Each step builds on the one before.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {moves.map((move) => (
            <Link
              key={move.number}
              to={move.link}
              className="group block p-5 rounded-xl border transition-all"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="step-number">{move.number}</div>
                <ArrowRight size={14} style={{ color: 'var(--text-3)' }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                {move.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                {move.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stories preview */}
      <section className="px-6 lg:px-[8vw] py-14" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-2">Worker stories</p>
            <h2 className="headline-md" style={{ color: 'var(--text)' }}>
              What workers are facing.
            </h2>
          </div>
          <Link to="/stories" className="btn-ghost mt-4 md:mt-0">
            View all stories
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((story, index) => (
            <Link
              key={index}
              to="/stories"
              className="block p-5 rounded-xl border transition-all"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-block text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'var(--surface-alt)',
                    color: 'var(--text-2)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {story.category}
                </span>
                <FileCheck size={16} style={{ color: 'var(--text-3)' }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                {story.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                {story.preview}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Patterns callout */}
      <section className="px-6 lg:px-[8vw] py-14" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className="lg:col-span-2 p-6 rounded-xl border"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <p className="eyebrow mb-3">Systemic patterns</p>
            <h2 className="headline-md mb-4" style={{ color: 'var(--text)' }}>
              This isn't random. It's a pattern.
            </h2>
            <p className="body-text mb-5" style={{ color: 'var(--text-2)' }}>
              Independent reviews and WCAT precedents point to the same dynamics: cost pressure shaping decisions, treating physicians sidelined, early framing locking in outcomes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: Clock, label: 'Cost-containment bias', desc: 'Sustainability language becomes a reason to close files.' },
                { icon: Brain, label: 'Evidentiary bias', desc: 'Internal advisors preferred over treating doctors.' },
                { icon: Scale, label: 'Path-dependent bias', desc: 'Early framing locks in outcomes, even when wrong.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={15} style={{ color: 'var(--accent)' }} />
                      <p className="font-semibold text-sm" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                        {item.label}
                      </p>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
            <Link to="/patterns" className="btn-ghost">
              See the patterns
              <ArrowRight size={14} />
            </Link>
          </div>

          <div
            className="p-6 rounded-xl border flex flex-col justify-between"
            style={{ backgroundColor: 'var(--accent-light)', borderColor: 'rgba(43,76,126,0.15)' }}
          >
            <div>
              <p className="eyebrow mb-3">Share your story</p>
              <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                Add your experience to the record.
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                Your story can help others prepare, push back, and understand what they're dealing with. Names, locations, and claim numbers are removed before anything is published.
              </p>
              <p className="text-xs mb-5" style={{ color: 'var(--text-3)', fontFamily: 'IBM Plex Mono, monospace' }}>
                ~10–15 min · anonymous
              </p>
            </div>
            <Link to="/submit" className="btn-primary self-start">
              Submit your story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
