import { useState } from 'react';
import {
  Search, Filter, ExternalLink, Brain, Activity,
  Briefcase, Clock, AlertCircle, ChevronDown, ChevronUp
} from 'lucide-react';

const PrecedentsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPrecedent, setExpandedPrecedent] = useState<string | null>(null);

  const categories = [
    { label: 'All', icon: null },
    { label: 'Mental health', icon: Brain },
    { label: 'Cumulative trauma', icon: Activity },
    { label: 'Return to work', icon: Briefcase },
    { label: 'Delays', icon: Clock },
    { label: 'Evidence', icon: AlertCircle },
  ];

  const precedents = [
    {
      id: 'A1900037',
      title: 'Mental disorder + refusal to accommodate',
      category: 'Mental health',
      summary: 'Employer denial of the condition can be a significant stressor.',
      fullSummary: 'Worker developed depression and anxiety after being refused workplace accommodations. The Tribunal found that the employer\'s refusal to acknowledge and accommodate the worker\'s condition was itself a significant stressor that contributed to the mental disorder.',
      keyHolding: 'Employer conduct that exacerbates a mental condition can be compensable even if the initial condition had pre-existing elements.',
      outcome: 'Appeal allowed. Benefits granted.',
      year: '2019',
      tags: ['s.5.1(1)(a)', 'mental disorder', 'employer conduct'],
    },
    {
      id: 'A2101129',
      title: 'Cumulative trauma from repeated incidents',
      category: 'Cumulative trauma',
      summary: 'Repeated minor incidents can be compensable under s.134(1).',
      fullSummary: 'Worker developed shoulder injury over years of repetitive lifting. No single incident caused the injury, but the cumulative effect of daily work duties was found to be compensable under the cumulative injury provisions.',
      keyHolding: 'Cumulative injuries from repetitive work activities are compensable even without a specific traumatic event.',
      outcome: 'Appeal allowed. Medical benefits and wage loss granted.',
      year: '2021',
      tags: ['s.134(1)', 'cumulative injury', 'repetitive strain'],
    },
    {
      id: '2004-06686',
      title: 'Injury with no clear diagnosis accepted',
      category: 'Evidence',
      summary: 'WCAT accepted the claim based on mechanism + credible evidence.',
      fullSummary: 'Worker reported back pain after lifting at work. Initial medical investigations were inconclusive. The Tribunal accepted the claim based on the credible mechanism of injury and the worker\'s consistent reporting of symptoms, even without a definitive diagnosis.',
      keyHolding: 'A definitive diagnosis is not required if the mechanism of injury is credible and symptoms are consistently reported.',
      outcome: 'Appeal allowed. Benefits granted pending further medical investigation.',
      year: '2004',
      tags: ['diagnosis', 'credibility', 'mechanism of injury'],
    },
    {
      id: '2014-01368',
      title: 'Late application due to mental disorder',
      category: 'Delays',
      summary: 'Mental disorder can justify late filing under s.54.',
      fullSummary: 'Worker failed to file claim within the one-year deadline due to severe depression that impaired their ability to manage affairs. The Tribunal found the mental disorder constituted good cause for the delay.',
      keyHolding: 'Mental health conditions that impair decision-making capacity can constitute good cause for late filing.',
      outcome: 'Appeal allowed. Time limit extended.',
      year: '2014',
      tags: ['s.54', 'time limits', 'mental disorder', 'good cause'],
    },
    {
      id: 'A2200345',
      title: 'Treating physician evidence preferred',
      category: 'Evidence',
      summary: 'Longitudinal treating relationship carries more weight than single IME.',
      fullSummary: 'WorkSafeBC relied on a single independent medical examination to deny ongoing benefits, ignoring the opinion of the worker\'s treating physician who had managed their care for two years. The Tribunal found the treating physician\'s longitudinal assessment more reliable.',
      keyHolding: 'Treating physicians with ongoing relationships generally provide more reliable assessments than one-time examinations.',
      outcome: 'Appeal allowed. Benefits reinstated.',
      year: '2022',
      tags: ['medical evidence', 'treating physician', 'IME'],
    },
    {
      id: 'A1800892',
      title: 'Return to work duties not properly offered',
      category: 'Return to work',
      summary: 'Modified duties must be meaningful and within restrictions.',
      fullSummary: 'Employer offered "modified duties" that were essentially the same as regular duties with a different title. The Tribunal found this did not constitute a genuine offer of suitable employment under s.45.',
      keyHolding: 'Modified duties must represent a genuine accommodation, not just a relabeling of regular work.',
      outcome: 'Appeal allowed. Wage loss benefits continued.',
      year: '2018',
      tags: ['s.45', 'return to work', 'modified duties'],
    },
    {
      id: 'A2001567',
      title: 'Pre-existing condition aggravated by work',
      category: 'Evidence',
      summary: 'Work need only be a significant contributing factor, not sole cause.',
      fullSummary: 'Worker had pre-existing degenerative changes in their knee. Work activities aggravated the condition, causing new symptoms. The Tribunal found the work was a significant contributing factor to the resulting disability.',
      keyHolding: 'Under s.5(1), work need only be a significant contributing factor — it does not need to be the sole or primary cause.',
      outcome: 'Appeal allowed. Benefits granted for aggravation.',
      year: '2020',
      tags: ['s.5(1)', 'pre-existing', 'aggravation', 'significant contributing factor'],
    },
    {
      id: 'A1900789',
      title: 'Chronic pain syndrome recognized',
      category: 'Mental health',
      summary: 'Chronic pain with functional impairment is compensable.',
      fullSummary: 'Worker developed chronic pain syndrome following a workplace injury. Despite objective tests showing "normal" results, the Tribunal accepted the worker\'s credible reporting of ongoing pain and functional limitations.',
      keyHolding: 'Chronic pain with functional impairment can be compensable even without objective findings on standard tests.',
      outcome: 'Appeal allowed. Permanent partial disability benefits granted.',
      year: '2019',
      tags: ['chronic pain', 'functional impairment', 'credibility'],
    },
  ];

  const filteredPrecedents = precedents.filter((p) => {
    const matchesFilter = activeFilter === 'All' || p.category === activeFilter;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">WCAT precedent library</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            Study what won.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            These decisions aren't luck. They show what evidence, framing, and persistence can do. Use them to strengthen your own case.
          </p>
        </div>

        {/* How to use */}
        <div
          className="rounded-xl border p-5 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <p className="font-semibold text-sm mb-4" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
            How to use these precedents
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              'Find precedents in your category (mental health, cumulative trauma, etc.)',
              'Note the specific Act sections cited in each decision',
              'Read the full decision to understand the evidence that carried weight',
              'Use similar language in your submissions and appeals',
              'Cite precedent numbers when writing to Review Division or WCAT',
              'Each case is unique, but patterns matter',
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search and filters */}
        <div className="mb-6 space-y-3">
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }} />
            <input
              type="text"
              placeholder="Search by keyword, section, or case number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm transition-all"
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

          <div className="flex flex-wrap items-center gap-2">
            <Filter size={14} style={{ color: 'var(--text-3)' }} />
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveFilter(cat.label)}
                  className={`filter-chip ${activeFilter === cat.label ? 'active' : ''}`}
                >
                  {Icon && <Icon size={13} className="mr-1.5" />}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-sm mb-5" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
          {filteredPrecedents.length} {filteredPrecedents.length === 1 ? 'precedent' : 'precedents'}
        </p>

        {/* Precedents list */}
        <div className="space-y-3">
          {filteredPrecedents.map((precedent) => {
            const isExpanded = expandedPrecedent === precedent.id;

            return (
              <div
                key={precedent.id}
                className="rounded-xl border overflow-hidden transition-all"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: isExpanded ? 'var(--accent)' : 'var(--border)',
                }}
              >
                <button
                  onClick={() => setExpandedPrecedent(isExpanded ? null : precedent.id)}
                  className="w-full p-5 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                          {precedent.id}
                        </span>
                        <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
                          {precedent.year}
                        </span>
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'var(--surface-alt)',
                            color: 'var(--text-2)',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {precedent.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                        {precedent.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                        {precedent.summary}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {isExpanded
                        ? <ChevronUp size={18} style={{ color: 'var(--text-3)' }} />
                        : <ChevronDown size={18} style={{ color: 'var(--text-3)' }} />
                      }
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                          Full summary
                        </p>
                        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                          {precedent.fullSummary}
                        </p>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                          Key holding
                        </p>
                        <div className="tip-box">
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                            {precedent.keyHolding}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                          Outcome
                        </p>
                        <p className="text-sm font-semibold mb-5" style={{ color: 'var(--success)', fontFamily: 'Inter, sans-serif' }}>
                          {precedent.outcome}
                        </p>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                          Relevant sections
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {precedent.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded text-xs font-mono"
                              style={{
                                backgroundColor: 'var(--surface-alt)',
                                color: 'var(--text-2)',
                                border: '1px solid var(--border)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <a
                        href="https://www.wcat.bc.ca/decisions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: 'var(--accent)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                      >
                        View full decision on WCAT website
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredPrecedents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
              No precedents match your search. Try different keywords or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrecedentsPage;
