import { useState } from 'react';
import { Search, Filter, ExternalLink, Brain, Activity, Briefcase, Clock, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { precedentCategories, precedents } from '../data/precedents';

const iconMap: Record<string, typeof Brain | null> = {
  All: null,
  'Mental health': Brain,
  'Cumulative trauma': Activity,
  'Return to work': Briefcase,
  Delays: Clock,
  Evidence: AlertCircle,
};

const PrecedentsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPrecedent, setExpandedPrecedent] = useState<string | null>(null);

  const filteredPrecedents = precedents.filter((precedent) => {
    const matchesFilter = activeFilter === 'All' || precedent.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = [precedent.title, precedent.summary, precedent.fullSummary, precedent.keyHolding, precedent.id, ...precedent.tags].join(' ').toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      <div className="mb-8">
        <span className="eyebrow mb-4 block">WCAT Precedents</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">Study the wins.</h1>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F3EFE6]/40" />
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#F3EFE6]/5 border border-[#F3EFE6]/15 text-[#F3EFE6]" placeholder="Search precedents..." />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Filter size={16} className="text-[#F3EFE6]/50 mr-2" />
          {precedentCategories.map((label) => {
            const Icon = iconMap[label];
            return <button key={label} onClick={() => setActiveFilter(label)} className={`px-4 py-2 rounded-full text-sm ${activeFilter === label ? 'bg-[#D4A03A] text-[#0B3C43]' : 'bg-[#F3EFE6]/5 text-[#F3EFE6]/70 border border-[#F3EFE6]/15'}`}>{Icon && <Icon size={14} className="inline mr-2" />}{label}</button>;
          })}
        </div>
      </div>

      <div className="space-y-4">
        {filteredPrecedents.map((precedent) => {
          const isExpanded = expandedPrecedent === precedent.id;
          return (
            <div key={precedent.id} className="border border-[#F3EFE6]/15 rounded-[24px] overflow-hidden">
              <button onClick={() => setExpandedPrecedent(isExpanded ? null : precedent.id)} className="w-full p-6 text-left">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-[#D4A03A] uppercase">{precedent.id}</span>
                      <span className="font-mono text-xs text-[#F3EFE6]/40">{precedent.year}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-2">{precedent.title}</h3>
                    <p className="body-text text-[#F3EFE6]/60 text-sm">{precedent.summary}</p>
                  </div>
                  {isExpanded ? <ChevronUp size={24} className="text-[#F3EFE6]/50" /> : <ChevronDown size={24} className="text-[#F3EFE6]/50" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-[#F3EFE6]/10 pt-4">
                  <p className="body-text text-[#F3EFE6]/70 text-sm mb-3">{precedent.fullSummary}</p>
                  <p className="body-text text-[#F3EFE6] text-sm mb-3"><strong>Holding:</strong> {precedent.keyHolding}</p>
                  <p className="body-text text-[#D4A03A] text-sm mb-3">{precedent.outcome}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{precedent.tags.map((tag) => <span key={tag} className="px-3 py-1 rounded-full bg-[#F3EFE6]/10 text-[#F3EFE6]/70 text-xs font-mono">{tag}</span>)}</div>
                  <a href={`https://www.wcat.bc.ca/search/case?query=${precedent.id}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#D4A03A] text-sm hover:underline">View case <ExternalLink size={14} /></a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrecedentsPage;
