import { Download } from 'lucide-react';
import { resources, quickStartResourceIds } from '../data/resources';

const HowToUsePage = () => {
  const quickStart = resources.filter((r) => quickStartResourceIds.includes(r.id));

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      <div className="mb-10">
        <span className="eyebrow mb-4 block">How to Use</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">Start with evidence, then pressure.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {quickStart.map((tool) => (
          <div key={tool.id} className="card">
            <h3 className="font-heading font-bold text-base text-[#F3EFE6] mb-2">{tool.title}</h3>
            <p className="body-text text-[#F3EFE6]/60 text-sm mb-4">{tool.description}</p>
            <a href={tool.filePath} download className="inline-flex items-center gap-2 text-[#D4A03A] text-sm font-medium hover:underline"><Download size={16} />Download PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUsePage;
