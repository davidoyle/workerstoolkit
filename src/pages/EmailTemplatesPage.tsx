import { useState } from 'react';
import { Copy, Check, Mail, FileText, User, Building, Scale } from 'lucide-react';

const EmailTemplatesPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const templates = [
    {
      id: 'request-file',
      title: 'Request Your Claim File (s.151)',
      recipient: 'WorkSafeBC',
      purpose: 'Get all documents they have about your claim',
      icon: FileText,
      content: `Subject: Request for Complete Claim File - Section 151

Dear WorkSafeBC,

I am writing to request a complete copy of my claim file pursuant to section 151 of the Workers Compensation Act.

Claim Number: [YOUR CLAIM NUMBER]
Worker Name: [YOUR NAME]
Date of Injury: [DATE]

Please provide:
1. All medical reports and opinions in your possession
2. All correspondence and notes from case managers
3. All internal communications regarding my claim
4. All decisions and decision rationales
5. Any surveillance or investigation materials
6. Any other documents related to my claim

I understand there may be fees for copying. Please advise of any costs before proceeding.

Please send the complete file to:
[YOUR ADDRESS]

Thank you for your prompt attention to this request.

Sincerely,
[YOUR NAME]
[YOUR PHONE NUMBER]
[DATE]`,
    },
    {
      id: 'request-reasons',
      title: 'Request Detailed Reasons for Decision',
      recipient: 'WorkSafeBC',
      purpose: 'Get the specific rationale behind a denial',
      icon: Scale,
      content: `Subject: Request for Detailed Reasons - Decision dated [DATE]

Dear WorkSafeBC,

I am writing to request detailed reasons for the decision dated [DATE] regarding my claim.

Claim Number: [YOUR CLAIM NUMBER]
Decision Date: [DATE]
Decision Type: [e.g., Section 5 denial, Section 16 denial]

Specifically, I request:
1. The specific evidence relied upon in making this decision
2. The reasoning process that led to the conclusion
3. Which medical opinions were accepted and which were rejected, with reasons
4. How the decision-maker interpreted the relevant sections of the Act
5. Any policy or precedent documents consulted

I note that under the Workers Compensation Act, I am entitled to understand the basis for decisions affecting my claim.

Please provide this information in writing within a reasonable timeframe.

Sincerely,
[YOUR NAME]
[YOUR CLAIM NUMBER]
[DATE]`,
    },
    {
      id: 'correct-record',
      title: 'Request to Correct the Record',
      recipient: 'WorkSafeBC',
      purpose: 'Fix factual errors in your claim file',
      icon: FileText,
      content: `Subject: Request to Correct Factual Errors in Claim File

Dear WorkSafeBC,

I am writing to request corrections to factual errors in my claim file.

Claim Number: [YOUR CLAIM NUMBER]

The following information is incorrect:

ERROR 1:
- Current file states: [WHAT IT SAYS]
- Correct information: [WHAT IT SHOULD SAY]
- Evidence: [ATTACH SUPPORTING DOCUMENT]

ERROR 2:
- Current file states: [WHAT IT SAYS]
- Correct information: [WHAT IT SHOULD SAY]
- Evidence: [ATTACH SUPPORTING DOCUMENT]

These errors are material to my claim and may affect decisions about my benefits. I request that my file be corrected and that any decision-makers reviewing my claim be made aware of these corrections.

Please confirm receipt of this request and advise when the corrections have been made.

Sincerely,
[YOUR NAME]
[YOUR CLAIM NUMBER]
[DATE]`,
    },
    {
      id: 'mla-escalation',
      title: 'Escalate to Your MLA',
      recipient: 'Member of Legislative Assembly',
      purpose: 'Get political attention for systemic issues',
      icon: User,
      content: `Subject: Request for Assistance - WorkSafeBC Claim Issues

Dear [MLA NAME],

I am writing to request your assistance with serious concerns about my treatment by WorkSafeBC.

I am a constituent in your riding of [RIDING NAME]. I was injured at work on [DATE] and have been dealing with WorkSafeBC since [DATE].

The issues I am experiencing include:
- [e.g., Unreasonable delays in processing my claim]
- [e.g., Denial of benefits despite medical evidence]
- [e.g., Failure to respond to my requests for information]
- [e.g., Other specific issues]

These issues appear to be part of a broader pattern documented in independent reviews and ombudsperson reports regarding WorkSafeBC's treatment of injured workers.

I am requesting:
1. Your office's assistance in getting WorkSafeBC to address my specific concerns
2. Your support for systemic reforms to improve accountability and fairness

I have attached relevant documents including:
- [List attachments]

I would appreciate the opportunity to discuss this matter with you or your staff.

Thank you for your time and attention to this important issue.

Sincerely,
[YOUR NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL]
[DATE]`,
    },
    {
      id: 'review-division',
      title: 'Review Division Appeal',
      recipient: 'WorkSafeBC Review Division',
      purpose: 'Appeal a decision to the first level of review',
      icon: Scale,
      content: `Subject: Request for Review - Decision dated [DATE]

To: WorkSafeBC Review Division

I am requesting a review of the decision dated [DATE] regarding my claim.

Claim Number: [YOUR CLAIM NUMBER]
Worker Name: [YOUR NAME]
Date of Injury: [DATE]
Decision Being Appealed: [BRIEF DESCRIPTION]

GROUNDS FOR REVIEW:

1. ERROR OF LAW:
[Explain how the decision-maker misapplied or misunderstood the law. Cite specific sections of the Workers Compensation Act if applicable.]

2. ERROR OF FACT:
[Explain what facts were wrong or misinterpreted. Provide evidence.]

3. FAILURE TO CONSIDER EVIDENCE:
[Explain what evidence was ignored or not properly considered.]

4. UNREASONABLE FINDING:
[Explain why the decision was not reasonably supported by the evidence.]

RELIEF REQUESTED:
I request that the decision be overturned and [specific relief requested].

I have attached the following supporting documents:
- [List attachments]

Please confirm receipt of this request.

Sincerely,
[YOUR NAME]
[YOUR PHONE NUMBER]
[YOUR EMAIL]
[DATE]

Note: This request is made within 90 days of the decision date.`,
    },
    {
      id: 'ombudsperson',
      title: 'Ombudsperson Complaint',
      recipient: 'BC Ombudsperson',
      purpose: 'File a complaint about unfair administrative conduct',
      icon: Building,
      content: `Subject: Complaint Regarding WorkSafeBC

To: BC Ombudsperson

I am filing a complaint about unfair and unreasonable conduct by WorkSafeBC in handling my claim.

Claim Number: [YOUR CLAIM NUMBER]
Worker Name: [YOUR NAME]
Date of Injury: [DATE]

NATURE OF COMPLAINT:

I believe WorkSafeBC has acted unfairly and unreasonably in the following ways:

1. [Specific complaint - e.g., Unreasonable delay in processing]
2. [Specific complaint - e.g., Failure to provide reasons for decisions]
3. [Specific complaint - e.g., Ignoring relevant evidence]

DETAILED DESCRIPTION:
[Provide a chronological account of what happened, with dates and specific incidents.]

EFFORTS TO RESOLVE:
I have attempted to resolve these issues by:
- [List what you've done - e.g., Contacted case manager, requested review, etc.]

These efforts have been unsuccessful because [explain why].

OUTCOME SOUGHT:
I am seeking [specific outcome - e.g., Fair reconsideration of my claim, apology, systemic changes, etc.]

I have attached copies of relevant correspondence and documents.

Thank you for considering my complaint.

Sincerely,
[YOUR NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL]
[DATE]`,
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      <div className="px-6 lg:px-[8vw] pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Email templates</p>
          <h1 className="headline-lg mb-4" style={{ color: 'var(--text)' }}>
            Use the words that create accountability.
          </h1>
          <p className="body-text" style={{ color: 'var(--text-2)' }}>
            These are starting points. Customize them with your specific facts, dates, and details. Always keep copies of everything you send.
          </p>
        </div>

        {/* Best practices */}
        <div
          className="rounded-xl border p-5 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Mail size={16} style={{ color: 'var(--accent)' }} />
            <p className="font-semibold text-sm" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
              Email best practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              'Always use email, not just phone calls',
              'Reference specific dates and decision numbers',
              'Keep your tone professional, even when frustrated',
              'Attach supporting documents when relevant',
              'Save a copy of every email you send',
              'Follow up if you don\'t get a response in 2 weeks',
              'Cc your MLA on important correspondence',
              'Use read receipts for critical communications',
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="text-sm" style={{ color: 'var(--text-2)', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div className="space-y-5">
          {templates.map((template) => {
            const Icon = template.icon;
            const isCopied = copiedId === template.id;

            return (
              <div
                key={template.id}
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-start justify-between gap-4 p-5 pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--accent-light)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                        {template.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
                          To: {template.recipient}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'Inter, sans-serif' }}>
                          {template.purpose}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(template.content, template.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all flex-shrink-0"
                    style={{
                      backgroundColor: isCopied ? 'var(--success-light)' : 'var(--surface-alt)',
                      color: isCopied ? 'var(--success)' : 'var(--text)',
                      border: `1px solid ${isCopied ? 'rgba(46,125,82,0.2)' : 'var(--border)'}`,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <div
                  className="mx-5 mb-5 rounded-lg overflow-x-auto"
                  style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <pre className="p-4 text-xs leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-2)', fontFamily: 'IBM Plex Mono, monospace' }}>
                    {template.content}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplatesPage;
