import { Link } from 'react-router-dom';
import { ArrowRight, Volume2 } from 'lucide-react';
import { whySilentPoints, speakingImpactFlow, reassuranceChecklist } from '@/data/content';

const WhySilentPage = () => {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow mb-4 block">Why We Stay Silent</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">
          Silence is a strategy — theirs, not yours.
        </h1>
        <p className="body-text text-[#F3EFE6]/70 max-w-[640px]">
          Understanding why we stay quiet is the first step to speaking up with
          precision and power.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
        {whySilentPoints.map((point, idx) => (
          <div key={idx} className="card">
            {point.icon && <span className="text-2xl mb-3 block">{point.icon}</span>}
            <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-3">
              {point.title}
            </h3>
            <p className="body-text text-[#F3EFE6]/70 text-sm whitespace-pre-line">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      {/* Speaking Impact Flow */}
      <div className="mb-16">
        <h2 className="font-heading font-bold text-xl text-[#F3EFE6] mb-6 flex items-center gap-3">
          <Volume2 size={22} className="text-[#D4A03A]" />
          What Happens When You Speak
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {speakingImpactFlow.map((step, idx) => (
            <div key={idx} className="card text-center relative">
              <span className="w-10 h-10 rounded-full bg-[#D4A03A]/20 flex items-center justify-center font-mono text-sm font-bold text-[#D4A03A] mx-auto mb-3">
                {idx + 1}
              </span>
              <h4 className="font-heading font-bold text-base text-[#F3EFE6] mb-2">
                {step.title}
              </h4>
              <p className="body-text text-[#F3EFE6]/60 text-sm">
                {step.description}
              </p>
              {idx < speakingImpactFlow.length - 1 && (
                <ArrowRight size={18} className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#D4A03A]/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reassurance */}
      <div className="border border-[#D4A03A]/30 rounded-[28px] p-6 lg:p-8 bg-[#D4A03A]/5 mb-12">
        <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-4">
          Your safety matters. Here's what we guarantee.
        </h3>
        <ul className="space-y-3">
          {reassuranceChecklist.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A03A] mt-2 flex-shrink-0" />
              <span className="body-text text-[#F3EFE6]/80 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center border-t border-[#F3EFE6]/10 pt-12">
        <h3 className="font-heading font-bold text-xl text-[#F3EFE6] mb-4">
          Ready to add your voice?
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/submit" className="btn-primary">
            Submit Your Story
            <ArrowRight size={18} />
          </Link>
          <Link to="/stories" className="btn-secondary">
            Read Other Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhySilentPage;
