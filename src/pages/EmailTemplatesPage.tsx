import { useState } from 'react';
import { Copy, Check, Mail, User, Building, Scale, Landmark } from 'lucide-react';
import { emailTemplates } from '@/data/content';
import type { LucideIcon } from 'lucide-react';

const templateIcons: Record<string, LucideIcon> = {
  'To the Minister of Labour': Landmark,
  'To your MLA': User,
  'Email to the Entire Legislature': Building,
  'Email to the Speaker': Scale,
  'Email to the Premier': Landmark,
};

const EmailTemplatesPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow mb-4 block">Email Templates</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">
          Use the words that create accountability.
        </h1>
        <p className="body-text text-[#F3EFE6]/70 max-w-[640px]">
          These templates are starting points. Customize them with your specific facts,
          dates, and details. Always keep copies of everything you send.
        </p>
      </div>

      {/* Templates */}
      <div className="space-y-6">
        {emailTemplates.map((template, idx) => {
          const Icon = templateIcons[template.title] || Mail;
          const id = `template-${idx}`;
          const isCopied = copiedId === id;

          return (
            <div key={id} className="card overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A03A]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#D4A03A]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-1">
                      {template.title}
                    </h3>
                    <span className="font-mono text-[10px] text-[#D4A03A] uppercase tracking-wider">
                      {template.to}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(template.content, id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex-shrink-0 ${
                    isCopied
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-[#F3EFE6]/10 text-[#F3EFE6] hover:bg-[#F3EFE6]/20'
                  }`}
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="bg-[#0B3C43] rounded-xl p-4 border border-[#F3EFE6]/10 overflow-x-auto">
                <pre className="body-text text-[#F3EFE6]/80 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                  {template.content}
                </pre>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div className="mt-12 border border-[#D4A03A]/30 rounded-[28px] p-6 lg:p-8 bg-[#D4A03A]/5">
        <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-4 flex items-center gap-3">
          <Mail size={20} className="text-[#D4A03A]" />
          Email Best Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Always use email, not just phone calls',
            'Keep your tone professional, even when frustrated',
            'Reference specific dates and decision numbers',
            'Attach supporting documents when relevant',
            'Save a copy of every email you send',
            "Follow up if you don't get a response in 2 weeks",
            'Cc your MLA on important correspondence',
            'Use read receipts for critical communications',
          ].map((tip, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A03A] mt-2 flex-shrink-0" />
              <span className="body-text text-[#F3EFE6]/70 text-sm">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplatesPage;
