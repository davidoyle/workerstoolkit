import { useState } from 'react';
import { Search, BookOpen, AlertCircle } from 'lucide-react';

const GlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const terms = [
    {
      term: 'Section 5 denial',
      definition: 'A denial based on the Board\'s determination that the injury did not "arise out of employment" or was not "sustained in the course of employment."',
      impact: 'This is the most common type of denial. It means WorkSafeBC doesn\'t believe your injury is work-related.',
      section: 's.5',
    },
    {
      term: 'Section 16 denial',
      definition: 'A denial based on the Board\'s determination that the worker\'s disability is not caused by the work-related injury.',
      impact: 'WorkSafeBC accepts the injury happened but claims something else is causing your current symptoms.',
      section: 's.16',
    },
    {
      term: 'Significant contributing factor',
      definition: 'The standard for determining if work caused or aggravated an injury. The work does not need to be the sole or primary cause—just a significant one.',
      impact: 'This is a lower threshold than many workers realize. Pre-existing conditions can still be compensable if work significantly contributed.',
      section: 's.5(1)',
    },
    {
      term: 'Deemed wage loss',
      definition: 'When WorkSafeBC calculates your wage loss benefits based on what they believe you could earn, not what you actually earned or are earning.',
      impact: 'This often results in lower benefits than workers expect. They may use "suitable employment" you\'ve never actually obtained.',
      section: 's.29-33',
    },
    {
      term: 'Non-cooperation finding',
      definition: 'A determination that a worker has failed to cooperate with medical treatment, vocational rehabilitation, or return-to-work efforts.',
      impact: 'Can result in suspension of benefits. Often used against workers who question decisions or seek second opinions.',
      section: 's.38',
    },
    {
      term: 'Suitable employment',
      definition: 'Work that the Board determines a worker is capable of performing, considering their restrictions and transferable skills.',
      impact: 'WorkSafeBC may determine you can do jobs you\'ve never done, resulting in reduced benefits.',
      section: 's.45',
    },
    {
      term: 'Section 151 request',
      definition: 'A formal request under the Act for all documents and information in the Board\'s possession related to your claim.',
      impact: 'Essential for appeals. You have a right to see everything they have about your case.',
      section: 's.151',
    },
    {
      term: 'Review Division',
      definition: 'The first level of appeal within WorkSafeBC. A senior officer reviews the decision for errors of law or fact.',
      impact: 'Must be requested within 90 days of the decision. Success rate varies but is higher with proper submissions.',
      section: 's.244-249',
    },
    {
      term: 'WCAT',
      definition: 'Workers Compensation Appeal Tribunal. The independent tribunal that hears appeals from Review Division decisions.',
      impact: 'Final level of appeal. Must be filed within 30 days of Review Division decision.',
      section: 's.285-291',
    },
    {
      term: 'Cost-containment bias',
      definition: 'Systemic pressure to control costs that influences decision-making, often at the expense of worker benefits.',
      impact: 'Identified in multiple independent reviews as a factor in unfair denials and delays.',
      section: 'Systemic issue',
    },
    {
      term: 'Evidentiary bias',
      definition: 'Preference for internal medical advisors over treating physicians, and for employer evidence over worker testimony.',
      impact: 'Your long-term doctor\'s opinion may be dismissed in favor of a 20-minute file review by a Board advisor.',
      section: 'Systemic issue',
    },
    {
      term: 'Path-dependent bias',
      definition: 'Tendency to stick with initial decisions and framings even when new evidence emerges.',
      impact: 'Once your claim is labeled a certain way, it becomes harder to change that framing even with new evidence.',
      section: 'Systemic issue',
    },
    {
      term: 'Section 5.1(1)(a)',
      definition: 'Covers mental disorders that are a reaction to one or more traumatic events in the workplace.',
      impact: 'PTSD and acute stress reactions from workplace incidents.',
      section: 's.5.1(1)(a)',
    },
    {
      term: 'Section 5.1(1)(b)',
      definition: 'Covers mental disorders that are predominantly caused by a significant work-related stressor.',
      impact: 'Bullying, harassment, excessive workload that causes mental health conditions.',
      section: 's.5.1(1)(b)',
    },
    {
      term: 'Section 5.1(1)(c)',
      definition: 'Excludes mental disorders caused by "legitimate employment decisions" like termination, discipline, or transfers.',
      impact: 'Often used to deny claims. The line between "legitimate" and abusive decisions is frequently contested.',
      section: 's.5.1(1)(c)',
    },
    {
      term: 'Cumulative injury',
      definition: 'An injury that develops over time from repetitive work activities rather than a single traumatic event.',
      impact: 'Covered under s.134(1). Can be harder to prove but is definitely compensable.',
      section: 's.134(1)',
    },
    {
      term: 'Recurrence',
      definition: 'A return of symptoms from a previously accepted work injury.',
      impact: 'Should be automatically accepted if the original injury was compensable. Often disputed anyway.',
      section: 's.135',
    },
    {
      term: 'Aggravation',
      definition: 'When work activities worsen a pre-existing condition.',
      impact: 'Compensable under s.5(1) if work is a significant contributing factor to the aggravation.',
      section: 's.5(1)',
    },
    {
      term: 'Independent medical examination (IME)',
      definition: 'A medical assessment arranged by WorkSafeBC with a doctor of their choosing.',
      impact: 'Often used to challenge treating physician opinions. IME doctors may see hundreds of Board cases annually.',
      section: 's.99',
    },
    {
      term: 'Functional capacity evaluation (FCE)',
      definition: 'A physical assessment to determine what work activities a worker can safely perform.',
      impact: 'Results often used to determine return-to-work options and benefit levels.',
      section: 's.99',
    },
  ];

  const filteredTerms = terms.filter(
    (t) =>
      t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-3">Glossary</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            Know what they're saying.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            Understanding the language is half the battle. These are the key terms you'll encounter and what they actually mean for your claim.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }} />
          <input
            type="text"
            placeholder="Search terms or sections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: 'Inter, sans-serif',
              outline: 'none',
            }}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor = 'var(--accent)';
              (e.target as HTMLElement).style.boxShadow = '0 0 0 3px var(--accent-light)';
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor = 'var(--border)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          />
        </div>

        <p className="text-sm mb-6" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
          {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'}
        </p>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredTerms.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border p-5"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between mb-3 gap-3">
                <h3 className="font-bold text-base" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                  {item.term}
                </h3>
                <span
                  className="font-mono text-[10px] px-2 py-1 rounded flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent)',
                  }}
                >
                  {item.section}
                </span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                {item.definition}
              </p>
              <div
                className="flex items-start gap-2 rounded-lg p-3"
                style={{ backgroundColor: 'var(--attention-light)', border: '1px solid rgba(184,64,64,0.12)' }}
              >
                <AlertCircle size={13} style={{ color: 'var(--attention)', flexShrink: 0, marginTop: 2 }} />
                <p className="text-xs" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--attention)' }}>Real impact: </strong>{item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
              No terms match your search. Try different keywords.
            </p>
          </div>
        )}

        {/* Reference */}
        <div
          className="mt-14 rounded-xl border p-6"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--accent-light)' }}
            >
              <BookOpen size={18} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                Full Act reference
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                For the complete Workers Compensation Act, visit BC Laws. Understanding the actual legislation is powerful — it shows you what WorkSafeBC is required to do.
              </p>
              <a
                href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96282_01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--accent)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
              >
                View Workers Compensation Act
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
