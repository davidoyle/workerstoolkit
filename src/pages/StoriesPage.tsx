import { useState } from 'react';
import { Clock, Brain, Shield, Briefcase, Trophy, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stories, storyFilters } from '../data/stories';

const iconMap: Record<string, typeof Clock | null> = {
  Delays: Clock,
  'Mental health': Brain,
  Retaliation: Shield,
  'Return to work': Briefcase,
  'WCAT win': Trophy,
  All: null,
};

const StoriesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = stories.filter((story) => {
    const matchesFilter = activeFilter === 'All' || story.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = story.title.toLowerCase().includes(q) || story.preview.toLowerCase().includes(q) || story.fullStory.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#F3EFE6] min-h-screen">
      <div className="mb-8">
        <span className="eyebrow mb-4 block text-[#0B3C43]">Story Archive</span>
        <h1 className="headline-lg text-[#0B3C43] mb-4">Read what workers are facing.</h1>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B3C43]/40" />
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-[#0B3C43]/15" placeholder="Search stories..." />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Filter size={16} className="text-[#0B3C43]/50 mr-2" />
          {storyFilters.map((label) => {
            const Icon = iconMap[label];
            return (
              <button key={label} onClick={() => setActiveFilter(label)} className={`px-4 py-2 rounded-full text-sm ${activeFilter === label ? 'bg-[#0B3C43] text-[#F3EFE6]' : 'bg-white text-[#0B3C43]/70 border border-[#0B3C43]/15'}`}>
                {Icon && <Icon size={14} className="inline mr-2" />}
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {filteredStories.map((story) => (
          <article key={story.title} className="card-light">
            <div className="flex justify-between gap-3 mb-2">
              <span className="font-mono text-xs text-[#0B3C43]/60">{story.category}</span>
              <span className="font-mono text-xs text-[#0B3C43]/40">{story.date}</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-[#0B3C43] mb-2">{story.title}</h3>
            <p className="body-text text-[#0B3C43]/75 text-sm mb-3">{story.preview}</p>
            <p className="body-text text-[#0B3C43]/65 text-sm mb-3">{story.fullStory}</p>
            <p className="body-text text-[#0B3C43] text-sm"><strong>Outcome:</strong> {story.outcome}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-[#0B3C43]/10 pt-12 text-center">
        <p className="body-text text-[#0B3C43]/70 mb-6">Have a story to share?</p>
        <Link to="/submit" className="btn-dark inline-flex">Submit your story</Link>
      </div>
    </div>
  );
};

export default StoriesPage;
