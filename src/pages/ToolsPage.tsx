import { useState } from 'react';
import {
  Calendar, Phone, ClipboardCheck, AlertTriangle, Download,
  FileText, CheckCircle, Clock, Users, TrendingUp, ChevronRight
} from 'lucide-react';

const ToolsPage = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const templates = [
    {
      title: 'Claim Timeline Template',
      description: 'One page to track dates, decisions, and what changed. Essential for appeals.',
      icon: Calendar,
      format: 'PDF + Word',
      downloadCount: '2,847',
    },
    {
      title: 'Call Log Template',
      description: 'Who you spoke to, when, and what was promised. Creates accountability.',
      icon: Phone,
      format: 'PDF + Excel',
      downloadCount: '3,124',
    },
    {
      title: 'Evidence Checklist',
      description: 'Comprehensive list of documents to gather: medical, employer, financial.',
      icon: ClipboardCheck,
      format: 'PDF',
      downloadCount: '2,561',
    },
    {
      title: 'Violation Tracker',
      description: 'Match WorkSafeBC actions to specific Act sections for appeals.',
      icon: AlertTriangle,
      format: 'PDF + Word',
      downloadCount: '1,892',
    },
  ];

  const checklists = [
    {
      title: 'First 30 Days After Injury',
      items: [
        'Report injury to employer in writing',
        'See your doctor and get a medical report',
        'File WorkSafeBC claim immediately',
        'Start a call log',
        'Take photos of injury scene if possible',
        'Get witness statements if applicable',
        'Request claim file number',
        'Save all correspondence',
      ],
    },
    {
      title: 'Before Any Appeal',
      items: [
        'Request complete claim file (s.151)',
        'Review all decisions for errors',
        'Identify specific Act sections violated',
        'Gather supporting medical evidence',
        'Document timeline of events',
        'Check deadlines (Review: 90 days, WCAT: 30 days)',
        'Consider getting legal advice',
        'Prepare written submission',
      ],
    },
    {
      title: 'Building Your Record',
      items: [
        'Organize documents chronologically',
        'Create index of all evidence',
        'Redact personal info before sharing',
        'Make copies of everything',
        'Keep original documents safe',
        'Document symptoms daily',
        'Track all expenses related to injury',
        'Save receipts for everything',
      ],
    },
  ];

  const tabs = [
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'checklists', label: 'Checklists', icon: CheckCircle },
    { id: 'guides', label: 'Guides', icon: TrendingUp },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Evidence & Documentation</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            Build a record they can't ignore.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            If it isn't documented, it didn't happen. Start small, stay consistent. These tools help you create an appeal-ready file.
          </p>
        </div>

        {/* Tips */}
        <div
          className="rounded-xl border p-5 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <p className="font-semibold text-sm mb-4" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
            Documentation tips
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              'Date everything. Even approximate dates help establish timelines.',
              'Keep originals. WorkSafeBC sometimes asks for original documents.',
              'Use email, not phone. Written communication creates a record.',
              'Follow up calls with email. Summarize what was discussed.',
              'Save screenshots. Portal messages can disappear.',
              'Organize by date. Chronological order helps everyone understand.',
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.55' }}>
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 mb-8 border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2"
                style={{
                  borderBottomColor: activeTab === tab.id ? 'var(--accent)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-3)',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '-1px',
                }}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Templates tab */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.title}
                  className="p-5 rounded-xl border"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--accent-light)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="font-mono text-[10px] uppercase tracking-wide"
                          style={{ color: 'var(--accent)' }}
                        >
                          {template.format}
                        </span>
                        <span
                          className="font-mono text-[10px]"
                          style={{ color: 'var(--text-3)' }}
                        >
                          {template.downloadCount} downloads
                        </span>
                      </div>
                      <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                        {template.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                        {template.description}
                      </p>
                      <button
                        className="flex items-center gap-2 text-sm font-semibold"
                        style={{ color: 'var(--accent)', fontFamily: 'Inter, sans-serif' }}
                      >
                        <Download size={14} />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Checklists tab */}
        {activeTab === 'checklists' && (
          <div className="space-y-5">
            {checklists.map((checklist) => (
              <div
                key={checklist.title}
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-base" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                    {checklist.title}
                  </h3>
                  <button
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: 'var(--accent)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <Download size={13} />
                    Download PDF
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {checklist.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg"
                      style={{ backgroundColor: 'var(--bg)' }}
                    >
                      <div
                        className="w-4 h-4 rounded border flex-shrink-0 mt-0.5"
                        style={{ borderColor: 'var(--border-strong)' }}
                      />
                      <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guides tab */}
        {activeTab === 'guides' && (
          <div className="space-y-3">
            {[
              {
                title: 'How to Request Your Claim File (s.151)',
                description: 'Step-by-step guide to getting all documents WorkSafeBC holds about your claim.',
                icon: FileText,
                readTime: '5 min read',
              },
              {
                title: 'Understanding Review Division',
                description: 'What Review Division does, timelines, and how to prepare a strong submission.',
                icon: Clock,
                readTime: '8 min read',
              },
              {
                title: 'WCAT Appeal Basics',
                description: 'Introduction to the Workers Compensation Appeal Tribunal process.',
                icon: Users,
                readTime: '10 min read',
              },
              {
                title: 'When to Involve Your MLA',
                description: 'How to escalate systemic issues through political channels.',
                icon: TrendingUp,
                readTime: '6 min read',
              },
            ].map((guide) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.title}
                  className="group flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className="font-mono text-[10px]"
                          style={{ color: 'var(--text-3)' }}
                        >
                          {guide.readTime}
                        </span>
                        <h3 className="font-semibold text-base mt-0.5" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                          {guide.title}
                        </h3>
                      </div>
                      <ChevronRight size={16} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                    </div>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                      {guide.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;
