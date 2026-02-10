import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { screwedSituations, sectionRouteMap } from '@/data/content';

const StartHerePage = () => {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);

  const selected = screwedSituations.find((s) => s.id === selectedSituation);

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow mb-4 block">Start Here</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">
          What's happening to you right now?
        </h1>
        <p className="body-text text-[#F3EFE6]/70 max-w-[640px]">
          Pick the situation that fits. We'll point you to the tools, templates, and
          precedents that matter most for where you are.
        </p>
      </div>

      {/* Before You Do Anything */}
      <div className="border border-[#D4A03A]/30 rounded-[28px] p-6 lg:p-8 bg-[#D4A03A]/5 mb-10">
        <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-4 flex items-center gap-3">
          <AlertTriangle size={20} className="text-[#D4A03A]" />
          Before You Do Anything Else
        </h3>
        <ul className="space-y-3 mb-4">
          {[
            "Don't call just to 'talk it through' with no notes.",
            "Don't agree to anything on the phone you don't understand.",
            "Don't send a rage email you can't walk back.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-[#D4A03A] mt-0.5 flex-shrink-0" />
              <span className="body-text text-[#F3EFE6]/70 text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="body-text text-[#F3EFE6]/80 text-sm">
          Do this first: Save a copy of whatever they sent. Write the date, what they
          decided, and how it hits you. Then take 10 minutes to figure out what kind
          of issue it is.
        </p>
      </div>

      {/* Situation Cards */}
      <div className="space-y-4 mb-12">
        {screwedSituations.map((situation) => {
          const isOpen = selectedSituation === situation.id;

          return (
            <div
              key={situation.id}
              className={`border border-[#F3EFE6]/15 rounded-[24px] overflow-hidden transition-all ${
                isOpen ? 'bg-[#F3EFE6]/5' : 'bg-transparent hover:bg-[#F3EFE6]/5'
              }`}
            >
              <button
                onClick={() => setSelectedSituation(isOpen ? null : situation.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-2">
                      {situation.title}
                    </h3>
                    <p className="body-text text-[#F3EFE6]/60 text-sm">
                      {situation.description}
                    </p>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={24} className="text-[#F3EFE6]/50 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-[#F3EFE6]/50 flex-shrink-0" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 border-t border-[#F3EFE6]/10 pt-4">
                  {/* Indicators */}
                  <h4 className="font-heading font-bold text-sm text-[#F3EFE6] uppercase tracking-wider mb-3">
                    Signs this is you
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {situation.indicators.map((ind, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-[#D4A03A] mt-1 flex-shrink-0" />
                        <span className="body-text text-[#F3EFE6]/70 text-sm">{ind}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Priorities */}
                  <h4 className="font-heading font-bold text-sm text-[#F3EFE6] uppercase tracking-wider mb-3">
                    Your priorities right now
                  </h4>
                  <div className="bg-[#D4A03A]/10 rounded-xl p-4 mb-6">
                    <ul className="space-y-2">
                      {situation.priorities.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#D4A03A]/30 flex items-center justify-center flex-shrink-0 font-mono text-[10px] text-[#D4A03A]">
                            {idx + 1}
                          </span>
                          <span className="body-text text-[#F3EFE6] text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Next Moves */}
                  <h4 className="font-heading font-bold text-sm text-[#F3EFE6] uppercase tracking-wider mb-3">
                    Your next moves
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {situation.nextMoves.map((move, idx) => (
                      <Link
                        key={idx}
                        to={sectionRouteMap[move.section] || '/tools'}
                        className="btn-primary inline-flex text-sm"
                      >
                        {move.text}
                        <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center border-t border-[#F3EFE6]/10 pt-12">
        <h3 className="font-heading font-bold text-xl text-[#F3EFE6] mb-4">
          Not sure where you fit?
        </h3>
        <p className="body-text text-[#F3EFE6]/60 mb-6 max-w-lg mx-auto">
          Start with the First 30 Minutes guide. It works no matter what just happened.
        </p>
        <Link to="/first-30-minutes" className="btn-primary inline-flex">
          First 30 Minutes
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default StartHerePage;
