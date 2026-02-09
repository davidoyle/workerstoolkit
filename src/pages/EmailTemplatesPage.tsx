import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { emailTemplates } from '../data/emailTemplates';

const EmailTemplatesPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      <div className="mb-10">
        <span className="eyebrow mb-4 block">Email Templates</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">Use the words that create accountability.</h1>
      </div>

      <div className="space-y-6">
        {emailTemplates.map((template) => {
          const isCopied = copiedId === template.id;
          return (
            <div key={template.id} className="card overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-1">{template.title}</h3>
                  <p className="font-mono text-[10px] text-[#D4A03A] uppercase tracking-wider">To: {template.recipient} · {template.purpose}</p>
                </div>
                <button onClick={() => copyToClipboard(template.content, template.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${isCopied ? 'bg-green-500/20 text-green-400' : 'bg-[#F3EFE6]/10 text-[#F3EFE6]'}`}>
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-[#0B3C43] rounded-xl p-4 border border-[#F3EFE6]/10">
                <pre className="body-text text-[#F3EFE6]/80 text-sm whitespace-pre-wrap font-mono">{template.content}</pre>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 border border-[#D4A03A]/30 rounded-[28px] p-6 bg-[#D4A03A]/5">
        <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-4 flex items-center gap-3"><Mail size={20} className="text-[#D4A03A]" /> Email Best Practices</h3>
        <p className="body-text text-[#F3EFE6]/70 text-sm">Keep messages factual, dated, and attach supporting documents.</p>
      </div>
    </div>
  );
};

export default EmailTemplatesPage;
