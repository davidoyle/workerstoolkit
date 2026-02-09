import { useState } from 'react';
import { FileText, CheckCircle, TrendingUp, Download } from 'lucide-react';
import { resources } from '../data/resources';

const ToolsPage = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const filtered = resources.filter((r) => r.category === (activeTab === 'checklists' ? 'checklist' : activeTab === 'guides' ? 'guide' : 'template'));

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      <div className="mb-12">
        <span className="eyebrow mb-4 block">Documentation Center</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">Build a record they can't ignore.</h1>
      </div>

      <div className="flex gap-2 mb-8 border-b border-[#F3EFE6]/10">
        {[{ id: 'templates', label: 'Templates', icon: FileText }, { id: 'checklists', label: 'Checklists', icon: CheckCircle }, { id: 'guides', label: 'Guides', icon: TrendingUp }].map((tab) => {
          const Icon = tab.icon;
          return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-5 py-3 text-sm border-b-2 ${activeTab === tab.id ? 'text-[#D4A03A] border-[#D4A03A]' : 'text-[#F3EFE6]/60 border-transparent'}`}><Icon size={16} />{tab.label}</button>;
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="card group">
            <h3 className="font-heading font-bold text-lg text-[#F3EFE6] mb-2">{item.title}</h3>
            <p className="body-text text-[#F3EFE6]/60 text-sm mb-4">{item.description}</p>
            <a href={item.filePath} download className="inline-flex items-center gap-2 text-[#D4A03A] text-sm font-medium hover:underline"><Download size={16} />Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
