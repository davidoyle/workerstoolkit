import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Brain, Shield, Briefcase, Trophy, Search, Filter } from 'lucide-react';

const StoriesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { label: 'All', icon: null },
    { label: 'Delays', icon: Clock },
    { label: 'Mental health', icon: Brain },
    { label: 'Retaliation', icon: Shield },
    { label: 'Return to work', icon: Briefcase },
    { label: 'WCAT win', icon: Trophy },
  ];

  const stories = [
    {
      title: "They said it was 'just stress.'",
      category: 'Mental health',
      preview: 'My doctor diagnosed work-related anxiety. WorkSafeBC said it was a pre-existing condition. It took 8 months and a specialist report to get them to acknowledge the workplace bullying that triggered it.',
      fullStory: 'I worked in a high-pressure environment for three years. When the new manager started, everything changed. Daily criticism, impossible deadlines, being singled out in meetings. My doctor put me on stress leave and wrote a detailed report connecting my anxiety to the workplace environment. WorkSafeBC initially denied my claim, saying I had "pre-existing anxiety." They ignored the specialist psychiatrist who specifically linked my condition to the workplace bullying. After appealing to Review Division and submitting additional evidence, they finally accepted my claim.',
      outcome: 'Claim accepted after appeal. Received wage loss benefits retroactively.',
      date: '2024',
    },
    {
      title: 'My employer changed their story.',
      category: 'Retaliation',
      preview: 'First they said I was job-attached. Then they said I quit. The Board accepted both versions without questioning the contradiction.',
      fullStory: 'After my back injury, my employer initially said they would accommodate my restrictions and that I remained job-attached. Two months later, when WorkSafeBC asked about modified duties, my employer claimed I had "voluntarily resigned." The case manager accepted this new version without asking me for my side or questioning the complete reversal. I had emails proving I never quit — those were ignored.',
      outcome: 'Still fighting. WCAT appeal filed.',
      date: '2024',
    },
    {
      title: 'Three years to get the MRI.',
      category: 'Delays',
      preview: 'I knew something was wrong. They kept saying "soft tissue injury." The MRI showed a torn meniscus and cartilage damage.',
      fullStory: 'From day one, I told them my knee felt unstable. The physio noted clicking and giving way. WorkSafeBC said it was a "soft tissue strain" and would resolve in 6–8 weeks. When it didn\'t, they sent me to their medical advisor who never examined me — just reviewed files and said "no objective findings." My GP finally ordered an MRI privately after three years of me limping around. It showed a complex meniscal tear and significant cartilage loss.',
      outcome: 'MRI confirmed injury. Currently fighting for surgery approval.',
      date: '2023',
    },
    {
      title: 'I was labeled non-cooperative.',
      category: 'Retaliation',
      preview: 'I asked questions about my file. Suddenly there was a note saying I was "difficult" and "aggressive." That label followed me through every subsequent decision.',
      fullStory: 'I noticed inconsistencies in my claim file — dates that didn\'t match, missing medical reports. When I pointed these out and asked for corrections, the case manager flagged my file as "client conduct concern." Every subsequent decision referenced my "attitude" and "non-compliance." The actual medical evidence became secondary to this behavioral label.',
      outcome: 'File note still there. Affecting credibility in appeals.',
      date: '2024',
    },
    {
      title: 'WCAT overturned the denial.',
      category: 'WCAT win',
      preview: 'It took 18 months, but the Tribunal found the Board ignored my treating physician and relied solely on an internal advisor who never examined me.',
      fullStory: 'My family doctor of 15 years wrote detailed reports about my chronic pain and functional limitations. WorkSafeBC preferred the opinion of a medical advisor who reviewed my file for 20 minutes and concluded I was "fully recovered." The Review Division upheld this decision. At WCAT, the Vice Chair specifically noted that the Board failed to meaningfully engage with my treating physician\'s longitudinal assessment and gave no adequate reason for preferring the internal advisor.',
      outcome: 'WCAT overturned denial. Benefits reinstated with retroactive pay.',
      date: '2024',
    },
    {
      title: 'Still waiting for wage loss.',
      category: 'Delays',
      preview: 'Six months since my injury. Bills are piling up. Every call is "still under review." Facing eviction.',
      fullStory: 'I was injured in July. It\'s now January. My claim was accepted for medical benefits but wage loss has been "under review" for six months. I\'ve submitted every document they asked for — pay stubs, tax returns, bank statements. Each time I call, I get a different case manager and a different story. My rent is three months behind. I\'m borrowing money from family just to eat.',
      outcome: 'No resolution. Considering MLA involvement.',
      date: '2025',
    },
    {
      title: 'Return to work became a trap.',
      category: 'Return to work',
      preview: 'They said modified duties were available. When I showed up, my supervisor had never heard of them.',
      fullStory: 'WorkSafeBC approved a gradual return-to-work plan with specific restrictions. My employer signed off on it. But when I arrived on my first day back, my supervisor said he had no instructions about modified duties and put me on my regular heavy-lifting tasks. When I reminded him of my restrictions, he said I was "being difficult" and sent me home. WorkSafeBC then cut my benefits for "refusing suitable work."',
      outcome: 'Benefits cut. Fighting the "refusal" finding.',
      date: '2024',
    },
    {
      title: 'Mental health claim denied as "employment decision."',
      category: 'Mental health',
      preview: 'They said my depression was caused by a "legitimate employment decision" — being transferred against my will to a toxic department.',
      fullStory: 'After 10 years in my position, I was suddenly transferred to a department with a known toxic culture. No explanation given. Within months, I developed severe depression and anxiety. My psychiatrist wrote that the transfer and subsequent workplace harassment were the direct causes. WorkSafeBC denied my claim under s.5.1(1)(c), saying the transfer was a "legitimate employment decision" and therefore excluded.',
      outcome: 'Appealed to WCAT. Citing A1900037.',
      date: '2024',
    },
  ];

  const filteredStories = stories.filter((story) => {
    const matchesFilter = activeFilter === 'All' || story.category === activeFilter;
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.fullStory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-3">Worker stories</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            What workers are facing.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            Real experiences from injured workers in BC. Names and identifying details have been removed.
          </p>
        </div>

        {/* Search and filter */}
        <div className="mb-8 space-y-3">
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }} />
            <input
              type="text"
              placeholder="Search stories..."
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

          <div className="flex flex-wrap items-center gap-2">
            <Filter size={14} style={{ color: 'var(--text-3)' }} />
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`filter-chip ${activeFilter === filter.label ? 'active' : ''}`}
                >
                  {Icon && <Icon size={13} className="mr-1.5" />}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-sm mb-6" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
          {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
        </p>

        {/* Stories grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredStories.map((story, index) => {
            const categoryColor = story.category === 'WCAT win'
              ? 'var(--success)'
              : story.outcome.toLowerCase().includes('denied') || story.outcome.toLowerCase().includes('cut')
              ? 'var(--attention)'
              : 'var(--text-3)';

            return (
              <article
                key={index}
                className="rounded-xl border p-5"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--surface-alt)',
                      color: 'var(--text-2)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {story.category}
                  </span>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
                    {story.date}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                  {story.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                  {story.preview}
                </p>

                <div
                  className="pt-4 mb-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                    {story.fullStory}
                  </p>
                </div>

                <div
                  className="flex items-start gap-3 rounded-lg p-3"
                  style={{ backgroundColor: 'var(--bg)' }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: categoryColor }}
                  />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                      Outcome
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                      {story.outcome}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
              No stories match your search. Try different keywords or filters.
            </p>
          </div>
        )}

        {/* Submit CTA */}
        <div
          className="mt-14 pt-10"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-xl">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
              Have a story to share?
            </h3>
            <p className="body-text mb-5" style={{ color: 'var(--text-2)' }}>
              Your experience can help others prepare, push back, and understand what they're dealing with. We remove all identifying information before publishing.
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

export default StoriesPage;
