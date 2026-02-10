import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { pressurePoints } from '@/data/content';

const PressurePointsPage = () => {
  const [expandedPoint, setExpandedPoint] = useState<string | null>(null);
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);

  const copyPhrase = (phrase: string) => {
    navigator.clipboard.writeText(phrase.replace(/^"|"$/g, ''));
    setCopiedPhrase(phrase);
    setTimeout(() => setCopiedPhrase(null), 2000);
  };

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow mb-4 block">Tactical Strategy</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">
          Pressure Points
        </h1>
        <p className="body-text text-[#F3EFE6]/70 max-w-[640px]">
          These are the places the system is vulnerable. Each one includes your
          rights, exact phrases to use, and why it matters for your case.
        </p>
      </div>

      {/* Pressure Point Cards */}
      <div className="space-y-4 mb-16">
        {pressurePoints.map((point) => {
          const isExpanded = expandedPoint === point.id;

          return (
            <div
              key={point.id}
              className={`border border-[#F3EFE6]/15 rounded-[24px] overflow-hidden transition-all ${
                isExpanded ? 'bg-[#F3EFE6]/5' : 'bg-transparent hover:bg-[#F3EFE6]/5'
              }`}
            >
              <button
                onClick={() => setExpandedPoint(isExpanded ? null : point.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-2xl">{point.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-1">
                        {point.title}
                      </h3>
                      <p className="body-text text-[#F3EFE6]/60 text-sm">
                        {point.summary}
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={24} className="text-[#F3EFE6]/50 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-[#F3EFE6]/50 flex-shrink-0" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-[#F3EFE6]/10 pt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left: Examples + Rights */}
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#F3EFE6] uppercase tracking-wider mb-3">
                        What this looks like
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {point.examples.map((ex, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            <span className="body-text text-[#F3EFE6]/70 text-sm">{ex}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-heading font-bold text-sm text-[#F3EFE6] uppercase tracking-wider mb-3">
                        Your rights
                      </h4>
                      <ul className="space-y-2">
                        {point.rights.map((right, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A03A] mt-2 flex-shrink-0" />
                            <span className="body-text text-[#F3EFE6]/70 text-sm">{right}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Phrases to use */}
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#F3EFE6] uppercase tracking-wider mb-3">
                        Phrases to use
                      </h4>
                      <div className="space-y-3">
                        {point.phrases.map((phrase, idx) => (
                          <div
                            key={idx}
                            className="bg-[#0B3C43] rounded-xl p-4 border border-[#F3EFE6]/10 flex items-start gap-3"
                          >
                            <p className="body-text text-[#F3EFE6]/80 text-sm flex-1 font-mono leading-relaxed">
                              {phrase}
                            </p>
                            <button
                              onClick={() => copyPhrase(phrase)}
                              className="text-[#D4A03A] hover:text-[#F3EFE6] transition-colors flex-shrink-0"
                              title="Copy phrase"
                            >
                              {copiedPhrase === phrase ? (
                                <Check size={16} />
                              ) : (
                                <Copy size={16} />
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="mt-6 bg-[#D4A03A]/10 rounded-xl p-4">
                    <p className="body-text text-[#F3EFE6] text-sm">
                      <strong>Why it matters:</strong> {point.whyItMatters}
                    </p>
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
          Ready to put this into action?
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/email-templates" className="btn-primary">
            Email Templates
            <ArrowRight size={18} />
          </Link>
          <Link to="/tools" className="btn-secondary">
            Documentation Center
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PressurePointsPage;
