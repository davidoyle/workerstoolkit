import { Link } from 'react-router-dom';
import {
  AlertTriangle, Camera, FileText, PhoneOff, Mail, ClipboardList, ArrowRight, Clock
} from 'lucide-react';
import { first30MinutesSteps } from '@/data/content';

const stepIcons = [AlertTriangle, Camera, FileText, PhoneOff, Mail, ClipboardList];

const First30MinutesPage = () => {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow mb-4 block">First 30 Minutes</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">
          You just got bad news. Here's what to do right now.
        </h1>
        <p className="body-text text-[#F3EFE6]/70 max-w-[640px]">
          Don't call. Don't panic. Don't agree to anything. Follow these six steps
          in the next 30 minutes and you'll be in a stronger position than 90% of
          workers who get blindsided.
        </p>
      </div>

      {/* Urgency bar */}
      <div className="flex items-center gap-3 mb-10 p-4 rounded-xl bg-[#D4A03A]/10 border border-[#D4A03A]/30">
        <Clock size={20} className="text-[#D4A03A] flex-shrink-0" />
        <p className="body-text text-[#F3EFE6] text-sm">
          <strong>Time-sensitive.</strong> These steps work best in the first 30 minutes
          after a decision letter, phone call, or portal notification.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6 mb-16">
        {first30MinutesSteps.map((step, idx) => {
          const Icon = stepIcons[idx] || FileText;

          return (
            <div key={idx} className="card">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-[#D4A03A]/20 flex items-center justify-center font-mono text-sm font-bold text-[#D4A03A]">
                    {idx + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-[#D4A03A]" />
                    <h3 className="font-heading font-bold text-lg text-[#F3EFE6]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="body-text text-[#F3EFE6]/70 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Don'ts */}
                  {step.donts && (
                    <div className="bg-red-500/10 rounded-xl p-4 mb-4 border border-red-500/20">
                      <p className="font-mono text-[10px] text-red-400 uppercase tracking-wider mb-2">
                        Do NOT
                      </p>
                      <ul className="space-y-2">
                        {step.donts.map((dont, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <AlertTriangle size={12} className="text-red-400 mt-1 flex-shrink-0" />
                            <span className="body-text text-[#F3EFE6]/70 text-sm">{dont}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  {step.actions && (
                    <ul className="space-y-2">
                      {step.actions.map((action, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A03A] mt-2 flex-shrink-0" />
                          <span className="body-text text-[#F3EFE6]/70 text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Template */}
                  {step.template && (
                    <div className="bg-[#0B3C43] rounded-xl p-4 border border-[#F3EFE6]/10 mt-4">
                      <pre className="body-text text-[#F3EFE6]/80 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                        {step.template}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* What's Next */}
      <div className="border border-[#D4A03A]/30 rounded-[28px] p-6 lg:p-8 bg-[#D4A03A]/5">
        <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-4">
          Done? Good. Here's what comes next.
        </h3>
        <p className="body-text text-[#F3EFE6]/70 text-sm mb-6">
          You've bought yourself time and started a record. Now figure out what kind
          of fight this is.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/start-here" className="btn-primary">
            Identify Your Situation
            <ArrowRight size={18} />
          </Link>
          <Link to="/tools" className="btn-secondary">
            Documentation Center
          </Link>
          <Link to="/pressure-points" className="btn-secondary">
            Pressure Points
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First30MinutesPage;
