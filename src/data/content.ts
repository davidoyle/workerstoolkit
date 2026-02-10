// Centralized content data — ported from davidoyle/WEB src/data/content.js
// This is the single source of truth for all textual content.
// AI agents: do NOT invent legal citations or alter legal meaning.

export interface Situation {
  id: string;
  title: string;
  description: string;
  gentleDescription: string;
  indicators: string[];
  priorities: string[];
  nextMoves: { text: string; section: string }[];
  relatedWCATCaseIds: string[];
}

export interface First30Step {
  title: string;
  description: string;
  donts?: string[];
  actions?: string[];
  template?: string;
}

export interface DocumentationBucket {
  title: string;
  items: string[];
}

export interface PressurePoint {
  id: string;
  title: string;
  label: string;
  icon: string;
  summary: string;
  examples: string[];
  rights: string[];
  phrases: string[];
  whyItMatters: string;
}

export interface EmailTemplate {
  title: string;
  to: string;
  content: string;
}

export interface WhySilentPoint {
  title: string;
  description: string;
  icon?: string;
}

export const screwedSituations: Situation[] = [
  {
    id: "fresh-claim",
    title: "I just got hurt / just opened a claim",
    description: "You're early in. Maybe you're still getting paid, maybe not. Things are confusing but not openly hostile yet.",
    gentleDescription: "You are early in. You might still be getting paid. Things feel confusing but not openly hostile yet.",
    indicators: [
      "You were injured at work recently",
      "You've reported it (or you're about to)",
      "You're seeing a doctor/physio but don't really understand what WorkSafeBC is doing with any of it",
      "You have a bad feeling but no smoking gun yet"
    ],
    priorities: [
      "Start a paper trail from day one",
      "Capture every report, appointment, and phone call",
      "Learn what patterns to watch for so you can catch the bullshit early"
    ],
    nextMoves: [
      { text: "Evidence & Documentation Center", section: "documentation" },
      { text: "Tactical Strategy/Pressure Points (Quick Scan)", section: "pressure" }
    ],
    relatedWCATCaseIds: ["wcat-2003-00254", "wcat-2004-05173"]
  },
  {
    id: "bad-decision",
    title: "I got a bullshit decision letter or they cut my benefits",
    description: "This is where most people land here. You've just been told something like: 'Your condition has resolved' while your knee/back/brain is very clearly not 'resolved.'",
    gentleDescription: "You received a decision that doesn't match your reality. Maybe it says your condition has resolved while your knee/back/brain is not.",
    indicators: [
      "A decision letter that doesn't match your reality",
      "Medical evidence that seems ignored or twisted",
      "A sudden drop in income and a rising sense of panic"
    ],
    priorities: [
      "Do not call just to vent and leave no record",
      "Translate your anger into targeted, written questions",
      "Decide whether to hit back through Review, WCAT, your MLA, or all of the above"
    ],
    nextMoves: [
      { text: "Tactical Strategy/ Pressure Points", section: "pressure" },
      { text: "Email & Letter Templates", section: "templates" },
      { text: "Legal Precedent Armory (Starter WCAT Cases)", section: "wcat" }
    ],
    relatedWCATCaseIds: ["wcat-2006-03608", "wcat-2007-02958"]
  },
  {
    id: "ignored",
    title: "WorkSafeBC / my employer / my MLA is ignoring me or gaslighting me",
    description: "You've been trying to do it 'the polite way,' and now you're getting copy-paste form letters, 'Our records show you haven't...' when you clearly have, and vague replies that dodge every specific question.",
    gentleDescription: "You have tried the polite route and now get form letters, 'Our records show you haven't...' when you clearly have, and vague replies that dodge your questions.",
    indicators: [
      "You feel like you're shouting into a void",
      "Nobody answers the exact thing you asked",
      "You're starting to question your own reality"
    ],
    priorities: [
      "Stop begging. Start documenting non-response",
      "Shift from 'please help me' to 'for the record, here's what you're doing'",
      "Move the fight into arenas where records matter: appeals, legislative oversight, complaints"
    ],
    nextMoves: [
      { text: "Tactical Strategy/Pressure Points \u2013 Oversight Section", section: "pressure" },
      { text: "Email & Letter Templates \u2013 Oversight & Escalation", section: "templates" },
      { text: "Evidence & Documentation Center", section: "documentation" }
    ],
    relatedWCATCaseIds: ["wcat-2009-00149", "wcat-2004-06708-2004-03907"]
  },
  {
    id: "appeal-stage",
    title: "I'm already in Review / WCAT / appeal-land",
    description: "You're past the 'WTF just happened' stage. You've filed (or are about to file) a Review, WCAT appeal, human rights complaint, or you're building your written submission.",
    gentleDescription: "You're past the shock stage. You've filed (or are about to file) a Review, WCAT appeal, human rights complaint, or you're drafting your written submission.",
    indicators: [
      "You've got a stack of letters and reports",
      "You know WorkSafeBC is wrong, but you're not sure how to prove it in tribunal language",
      "You're tired as hell and need something you can copy, adapt, and fire"
    ],
    priorities: [
      "Build a clean narrative and timeline out of the chaos",
      "Tie your facts to actual legal principles and WCAT precedent",
      "Make your written submissions sound like someone who knows exactly where the system failed"
    ],
    nextMoves: [
      { text: "Legal Precedent Armory \u2013 WCAT Toolkit", section: "wcat" },
      { text: "Evidence & Documentation Center", section: "documentation" },
      { text: "Tactical Strategy/Pressure Points", section: "pressure" }
    ],
    relatedWCATCaseIds: ["wcat-a1900037", "wcat-2006-01779"]
  }
];

export const first30MinutesSteps: First30Step[] = [
  {
    title: "Breathe, Don't Call",
    description: "Right now, they have: A written decision, A timestamp, An internal note that says 'letter sent'. You have: Shock, Rage, Zero record of what you're about to do next.",
    donts: [
      "Call your case manager to 'talk it out'",
      "Rant on the phone with no notes",
      "Say 'okay, I understand' just to get off the call"
    ]
  },
  {
    title: "Take a Photo / Screenshot of the Decision",
    description: "Before anything else:",
    actions: [
      "Take a photo of the letter (all pages)",
      "Or a screenshot/PDF of the portal decision",
      "Save it in a folder. Name it something like: 2025-11-26_WorkSafe_Decision_Stop-Wage-Loss.pdf"
    ]
  },
  {
    title: "Start Your Notes: What Changed?",
    description: "In plain language, write:",
    actions: [
      "What the decision says changed (benefits stopped, treatment denied, condition 'resolved')",
      "How it hits you (lost income, treatment cut, work forced when unsafe)",
      "Which evidence they ignored or twisted"
    ]
  },
  {
    title: "Do Not Give Them a Blank Check for Phone Calls",
    description: "When they call or leave voicemails, reply with a short email:",
    template: "\"I received your voicemail about [topic]. Please send the details in writing so I can respond accurately and keep my medical providers aligned with your requests.\""
  },
  {
    title: "Send One Short Email",
    description: "One tight email is better than five rage calls. Try:",
    template: "\"I received the [decision letter/portal notification] dated [date]. I would like to know:\n\n1) What specific evidence was relied on to decide my condition has 'resolved'?\n2) How did you weigh the medical reports from [my doctor(s)] versus the opinion from your internal advisor?\n3) If this decision stands, what is my next step to challenge it, and what is the deadline?\""
  },
  {
    title: "Start a Call Log (Even If You Hate Admin)",
    description: "This turns 'he said/she said' into a record:",
    actions: [
      "Date and time",
      "Who you spoke with",
      "What you asked",
      "What they said or promised"
    ]
  }
];

export const documentationBuckets: DocumentationBucket[] = [
  {
    title: "Medical Evidence",
    items: [
      "Doctor's notes (GP, specialists, psychiatrists, psychologists)",
      "Physiotherapy/chiro/OT reports",
      "Imaging requests and results (MRI, X-ray, CT, ultrasound)",
      "Functional capacity or work limitation forms",
      "Any 'fit for duty'/'not fit for duty' notes"
    ]
  },
  {
    title: "WorkSafeBC/Agency Documents",
    items: [
      "Claim acceptance/denial letters",
      "Decisions about wage-loss, treatment, return to work, vocational rehab",
      "Any 'we are closing your file' or 'your condition has resolved' letters",
      "Case manager emails",
      "Online portal messages (screenshot them)",
      "Internal forms they send you to fill out"
    ]
  },
  {
    title: "Employer & Workplace Evidence",
    items: [
      "Incident reports/injury reports",
      "Emails or texts about modified duties, schedule changes after injury",
      "Notes of conversations with your supervisor/HR",
      "Write-ups, warnings, 'coaching conversations', discipline letters",
      "Any mention that you're 'not a good fit anymore'"
    ]
  },
  {
    title: "Money & Survival Evidence",
    items: [
      "Pay stubs from before and after the injury",
      "Records of EI, CPP-D, disability benefits, social assistance",
      "Rent/mortgage statements",
      "Overdraft/credit card statements showing when things went sideways",
      "Any notices: eviction threats, collections letters, shut-off notices"
    ]
  }
];

export const pressurePoints: PressurePoint[] = [
  {
    id: 'delays',
    title: 'Delays That Create Harm',
    label: 'Delayed decisions',
    icon: '\u23F3',
    summary: 'When "processing" becomes a tactic to deny care.',
    examples: [
      'Stalled decisions for months',
      '"Awaiting medical opinion" with no timeline',
      'MRI or specialist referrals not actioned',
      "You can't work\u2026 but they are still \"reviewing\""
    ],
    rights: [
      'Decisions in a reasonable timeframe',
      'Timely medical treatment',
      'Reasons when there is delay'
    ],
    phrases: [
      '"Please provide the specific date a decision will be made."',
      '"What exact information is missing that is causing this delay?"',
      '"If no update is provided by [date], I will consider this an unreasonable delay and escalate."'
    ],
    whyItMatters: 'Delays are predictable harm. Every day stalled = evidence of systemic negligence.'
  },
  {
    id: 'evidence-ignored',
    title: 'Evidence Ignored',
    label: 'Evidence ignored',
    icon: '\u2696\uFE0F',
    summary: "Anytime WorkSafeBC leans on a board doctor you've never met, declares your injury 'resolved' while your providers say otherwise, or refuses to explain why one piece of evidence beat another.",
    examples: [
      'Treating provider reports left out of the decision',
      'Only a file review is cited as "most persuasive"',
      'No explanation for why one medical opinion wins over another'
    ],
    rights: [
      'Have relevant evidence considered',
      'Know what evidence they relied on',
      'Know why they preferred one opinion over another'
    ],
    phrases: [
      '"What evidence did you rely on to decide that my condition is resolved?"',
      '"How did you resolve the difference between your medical advisor\'s opinion and my treating doctor\'s opinion?"',
      '"Can you please list the medical reports you considered, and explain the weight you gave to each?"'
    ],
    whyItMatters: 'If they ignore evidence, you lose treatment, wage loss, and credibility.'
  },
  {
    id: 'medical-mischaracterization',
    title: 'Medical Mischaracterization (Factual Errors)',
    label: 'Medical inaccuracies',
    icon: '\uD83D\uDCCB',
    summary: 'When the paperwork tells a different story than your body.',
    examples: [
      '"Full recovery" despite injury still active',
      'Statements that contradict MRI / physio findings',
      'Symptoms minimized or omitted',
      'Copy-pasted conclusions with no exam'
    ],
    rights: [
      'Accurate medical descriptions',
      'Transparent reasoning for medical claims',
      'Corrections on the record'
    ],
    phrases: [
      '"There is a factual inaccuracy in your summary: ___. Please correct the record."',
      '"What medical findings support the conclusion that ___ has resolved?"',
      '"What basis was used to downplay symptoms in ___?"'
    ],
    whyItMatters: 'If they rewrite your reality \u2192 they deny the future.'
  },
  {
    id: 'narrow-scope',
    title: 'Narrow Claim Scope (Cherry-Picking What Counts)',
    label: 'Narrow claim scope',
    icon: '\uD83C\uDFAF',
    summary: 'When they accept only one part of the injury so they can deny the rest.',
    examples: [
      'Knee accepted \u2014 hip and back ignored',
      'PTSD not accepted because physical injury "not severe enough"',
      'Only one diagnosis accepted despite multiple providers'
    ],
    rights: [
      'Full assessment of all caused conditions',
      'Inclusion of complications and secondary effects',
      'Reasons when anything is excluded'
    ],
    phrases: [
      '"Why were [body parts/conditions] excluded from the accepted injury?"',
      '"Will you be updating the claim scope to include ___? If not, please provide medical/legal rationale."'
    ],
    whyItMatters: 'Scope = treatment = benefits = future stability.'
  },
  {
    id: 'return-to-work',
    title: 'Return-to-Work Failure',
    label: 'Return-to-work failure',
    icon: '\uD83D\uDC77',
    summary: "You're injured and want/need to go back to work, but your employer is ignoring your restrictions, not offering modified duties, showing hostility, or WorkSafeBC is doing nothing while your RTW falls apart.",
    examples: [
      'No modified duties despite written restrictions',
      'Hostility or pressure to quit after reporting an injury',
      'Radio silence on who is coordinating RTW'
    ],
    rights: [
      'A coordinated plan that respects medical restrictions',
      'Employer cooperation duties enforced',
      'Clear steps documented and shared with you'
    ],
    phrases: [
      '"What specific steps have been taken to work with my employer on a return-to-work plan?"',
      '"Has my employer been reminded of their duty to cooperate in returning me to work?"',
      '"Can I see the documented return-to-work plan you\'ve agreed on with my employer?"'
    ],
    whyItMatters: 'RTW chaos drains income, health, and credibility if left unchecked.'
  },
  {
    id: 'wrong-records',
    title: 'Wrong Records',
    label: 'Wrong records',
    icon: '\uD83D\uDCC1',
    summary: "You hear lines like: 'Our records show you haven't contacted us' or 'There is no record of that email/call,' while you have screenshots, emails, and call logs.",
    examples: [
      'Calls or emails erased from the file',
      'Complaints not logged despite receipts',
      'Medical updates "missing" after you sent them'
    ],
    rights: [
      'Accurate file records',
      'Corrections when errors are shown',
      'An explanation for discrepancies'
    ],
    phrases: [
      '"Your records appear to be incorrect. On [date], [office/person] contacted me/I contacted them. Attached is [screenshot/voicemail/email] showing this. Please: 1. Confirm that your records will be corrected; and 2. Explain how this discrepancy occurred."'
    ],
    whyItMatters: 'Bad records erase your timeline and undercut every appeal that follows.'
  },
  {
    id: 'retaliation',
    title: 'Employer Retaliation',
    label: 'Employer retaliation',
    icon: '\uD83D\uDEE1\uFE0F',
    summary: 'When reporting your injury triggers punishment instead of safety.',
    examples: [
      'Hours cut or shifts changed after you report',
      'Safety complaints followed by threats or isolation',
      'Fired or "laid off" right after filing a claim'
    ],
    rights: [
      'Protection from prohibited action',
      'Investigation of retaliation complaints',
      'A complaint number and updates when filed'
    ],
    phrases: [
      '"I believe I am experiencing retaliation related to my injury/claim. Has this been logged as a prohibited action complaint? If so, what is the complaint number?"',
      '"If it has not been logged, please confirm how I can file a prohibited action complaint and whether your office will do so based on the information I\'ve already provided."'
    ],
    whyItMatters: 'Unchecked retaliation scares workers silent and kills claims.'
  },
  {
    id: 'oversight-refusal',
    title: 'Oversight Refusal',
    label: 'Oversight refusal',
    icon: '\uD83C\uDFDB\uFE0F',
    summary: "When MLAs or Minister offices hide behind 'we can\u2019t interfere with WorkSafeBC' instead of using their oversight role \u2014 and when promised actions quietly disappear.",
    examples: [
      '"We can\'t intervene" replies with no follow-up',
      'Escalations promised but never actioned',
      'Patterned issues framed as "individual complaints" only'
    ],
    rights: [
      'Oversight offices that log and review systemic issues',
      'Clear answers on what was escalated',
      'Transparency when promised actions change'
    ],
    phrases: [
      '"I am not asking you to personally adjudicate my claim. I am reporting behaviour by WorkSafeBC that appears systemic."',
      '"This is not only a constituency service issue; it is an oversight issue. I am asking whether you will exercise your oversight role over a provincial agency."',
      '"On [date], your office wrote that [quote the promise]. Could you please confirm whether this action was completed, and if not, explain when and why the decision was changed?"'
    ],
    whyItMatters: 'Oversight pressure exposes patterns \u2014 and broken promises prove accountability gaps.'
  }
];

export const emailTemplates: EmailTemplate[] = [
  {
    title: "To the Minister of Labour",
    to: "To: [Minister's email] Cc: [Your MLA + MLA office email] (optional)",
    content: `Dear Minister [Last Name],
My name is [Your Full Name], a [your age]-year-old [your job title] living in [your city / community]. I am writing regarding the handling of my WorkSafeBC claim ([Claim Number]) and to respectfully request your office's oversight.

[IF you have already contacted your MLA \u2013 keep this paragraph]
[MLA [MLA Name], MLA for [Riding], has been assisting me since [month/year] and their office has already contacted WorkSafeBC on my behalf. Despite this, key issues remain unresolved and I appear to have reached an impasse within the existing process.]

[IF you have NOT contacted your MLA \u2013 you can use this paragraph instead, or delete it entirely]
[I understand that MLAs and the Minister cannot personally adjudicate individual claims, but I am concerned that the way my claim is being handled may indicate a breakdown in the normal oversight and accountability processes.]

I have attached a short briefing note that summarizes:
- The timeline of my injury and claim
- The decisions made so far
- New medical or factual evidence that has not been fully addressed
- Specific questions that remain unanswered by WorkSafeBC

In particular, my main concerns are:
- [Example: Termination of wage-loss benefits despite ongoing medical restrictions]
- [Example: Medical evidence from my treating providers has not been addressed in decisions]
- [Example: Delays or refusals to approve reasonable diagnostic tests (such as an MRI)]
- [Example: Lack of clear written reasons answering key questions I have raised]

I am not asking you to decide my claim. Rather, I am asking for your help to ensure that:
- New and relevant evidence is properly considered
- My questions receive clear, written answers
- The processes set out in the Workers Compensation Act and WorkSafeBC policy are properly followed in my case

If it would assist your office, I can provide copies of:
- Key medical reports (for example, specialist reports, GP forms, diagnostic requisitions)
- Correspondence with WorkSafeBC and/or the Review Division
- Any prior decisions or reasons I have received

I would also appreciate the opportunity to brief a member of your staff by phone or video conference at your convenience.

My specific requests are:
1. [Example: A written confirmation from WorkSafeBC of the current status of my claim and any planned reassessment or review.]
2. [Example: A written response to the unanswered questions listed in my briefing note, including how new medical evidence has been considered.]
3. [Optional: Example: If appropriate, a management-level review to determine whether the handling of my claim has been consistent with legislation, policy, and basic fairness.]

I know your time is extremely limited, and I am grateful for any attention you or your staff are able to give this. If you would like any additional information or documentation, I can provide it within [24\u201348] hours.

Thank you for your time and for your service to injured workers in British Columbia.

Sincerely,
[Your Full Name]
[Your phone number]
[Your email address]
[Optional: Your home city / riding]`
  },
  {
    title: "To your MLA",
    to: "Subject: WorkSafeBC claim [Claim Number] \u2013 request for assistance and oversight",
    content: `Dear [MLA Name],
My name is [Your Full Name]. I live in [your neighbourhood / city] in the riding of [Riding Name]. I am writing to ask for your help and oversight regarding the handling of my WorkSafeBC claim ([Claim Number]).

On [date of injury], I was injured while working as a [job title, e.g., "warehouse worker," "care aide," "concrete cutter"]. Since then, I have been dealing with WorkSafeBC about [very short summary: e.g., wage-loss benefits, medical treatment, return to work].

At this point, I am struggling with the following issues:
- [Example: My wage-loss benefits were stopped even though my doctor still has me on restrictions.]
- [Example: Medical reports from my doctor/physiotherapist do not appear to have been properly considered or explained in the decision.]
- [Example: My employer has not cooperated with return-to-work or modified duties, and I am not sure what is being done about it.]
- [Example: I have asked clear questions in writing but received no real answers, only repeated form letters.]

I understand that you cannot personally decide my claim, and I am not asking you to override WorkSafeBC. I am asking for your help to:
- Make sure my concerns and evidence are being taken seriously, and
- Ensure that WorkSafeBC is following its own rules and obligations in my case.

If your office is able to assist, I would be grateful if you could:
1. Review a short summary of my situation and the key decisions so far; and
2. Ask WorkSafeBC, through the appropriate channels, to provide clear, written answers to the main questions I have raised.

I can provide:
- Copies of recent decision letters from WorkSafeBC
- Key medical reports (for example, my doctor's current restrictions)
- A short timeline of what has happened so far

If someone from your office could speak with me by phone or email, I would appreciate the chance to explain my situation in a bit more detail.

Thank you for taking the time to read this and for the work you do on behalf of people in our community.

Sincerely,
[Your Full Name]
[Your phone number]
[Your email address]
[Optional: Your home address or at least city/postal code so they can confirm you're in the riding]`
  },
  {
    title: "Email to the Entire Legislature",
    to: "Subject: Formal report to all Members \u2013 systemic concerns regarding [Agency Name]",
    content: `Dear Honourable Members,
I am writing to you as a citizen providing a formal report on what I believe to be an operational failure of [Agency Name]. My case (File/Claim #[File or Claim Number]) is offered as a case study in how legislation, policy, and principles of administrative justice can be undermined in practice.

The attached file contains [brief description: e.g., "a complete email thread between myself, my elected representative's office, and [Agency Name]" / "a summary of decisions and correspondence to date"]. It serves as real-time, documented evidence of the systemic issues outlined below.

1. [Heading for Issue Area #1 \u2013 e.g., "Evidence Handling and Decision-Making"]
\u2022 [Bullet 1 \u2013 short, factual description of what happened in this theme]
\u2022 [Bullet 2 \u2013 another key fact or pattern]
\u2022 [Bullet 3 \u2013 how this behaviour conflicts with law/policy/fairness, in your view]

2. [Heading for Issue Area #2 \u2013 e.g., "Procedural Fairness and Process"]
\u2022 [Bullet 1 \u2013 arbitrary/contradictory decisions, lack of investigation, etc.]
\u2022 [Bullet 2 \u2013 failures to follow their own procedures or timelines]
\u2022 [Bullet 3 \u2013 examples of non-answers or ignored questions]

3. [Heading for Issue Area #3 \u2013 e.g., "Oversight and Transparency"]
\u2022 [Bullet 1 \u2013 inaccurate or incomplete information given to an elected office, if applicable]
\u2022 [Bullet 2 \u2013 how advocacy through an MLA/MP/etc. was neutralized or redirected into a "void"]
\u2022 [Bullet 3 \u2013 problems with access to records, FOI, internal notes, or audit logs, if relevant]

The Implications for All [Residents/Workers/Constituents] & for This Legislature
If [Agency Name] can:
\u2022 [Short line summarizing Issue Area #1],
\u2022 [Short line summarizing Issue Area #2],
\u2022 [Short line summarizing Issue Area #3],
\u2022 [Optional extra line],
then no [worker/constituent] is secure, and the mechanisms of democratic accountability are weakened.

This is not a dispute over [single outcome or diagnosis].
It is a demonstration that the system's checks and balances are failing in practice.

The attached material is not just my story; it is a preview of what any Member may encounter when attempting to oversee this agency on behalf of their constituents.

I am available to provide any further documentation that may assist. My complete file is available to any Member who wishes to verify this report.

Respectfully,
[Your Full Name]
[City / Community]
File/Claim #[File or Claim Number]
[Phone Number]
[Email Address]`
  },
  {
    title: "Email to the Speaker",
    to: "Subject: For the Speaker's attention \u2013 concerns regarding oversight and [Agency Name]",
    content: `Dear Honourable Speaker [Last Name],
I am writing to you in your capacity as Speaker of the [Name of Legislature], to report issues I have encountered in how [Agency Name] interacts with Members' offices and, by extension, with the Legislature's oversight function.

My case (File/Claim #[File or Claim Number]) is offered as a case study in systemic patterns, not as a request for adjudication of my individual matter.

1. [Heading #1 \u2013 e.g., "Information Provided to Members"]
\u2022 [Brief factual example of incomplete or incorrect information given to an MLA/MP office]
\u2022 [Explanation that the Member relied on this information to decide how to proceed]
\u2022 [Short line on how this undermines their ability to scrutinize the agency]

2. [Heading #2 \u2013 e.g., "Neutralization of Oversight Efforts"]
\u2022 [Example of specific, substantive questions raised through a Member's office]
\u2022 [Description of generic, non-responsive, or "out of scope" replies from the agency]
\u2022 [Short line on how this channels oversight into narrow, agency-controlled pathways]

3. [Heading #3 \u2013 e.g., "Implications for the Legislature"]
\u2022 [Short statement about how these practices affect all Members' ability to assist constituents]
\u2022 [Short statement about risk to the Legislature's scrutiny and accountability role]

Taken together, these patterns suggest that [Agency Name] can, in practice:
\u2022 Provide incomplete or inaccurate information to Members' offices;
\u2022 Limit or avoid meaningful responses to oversight questions; and
\u2022 Shape the scope of Member involvement through internal rules that it controls.

This raises concerns not only for my own situation, but for the institution's ability to hold public bodies to account.

I respectfully request that your office:
\u2022 Consider whether the issues described here may warrant attention through any appropriate parliamentary mechanism; and
\u2022 Consider ways to ensure that Members are able to obtain accurate, complete information from [Agency Name] when carrying out their representative and oversight duties.

I have attached a short summary and relevant correspondence. I am willing to provide my complete file and any additional documentation that may assist.

Thank you for your consideration and for your role in safeguarding the integrity of the Legislature.

Respectfully,
[Your Full Name]
[City / Community]
File/Claim #[File or Claim Number]
[Phone Number]
[Email Address]`
  },
  {
    title: "Email to the Premier",
    to: "Subject: Request for attention \u2013 systemic concerns regarding [Agency Name] and oversight",
    content: `Dear Premier [Last Name],
My name is [Your Full Name], and I live in [City / Community]. I am writing to bring to your attention systemic concerns about how [Agency Name] is operating and how it responds to oversight from elected representatives.

I am not asking you to decide my individual file. I am asking you, as head of government, to ensure that public bodies under your government's responsibility are acting lawfully, fairly, and in line with your stated commitments to [e.g., fairness, accountability, worker protection, etc.].

Using my case (File/Claim #[File or Claim Number]) as an example, I have observed three main areas of concern:

1. [Heading #1 \u2013 e.g., "Evidence and Decision-Making"]
\u2022 [Brief description of how decisions appear inconsistent with treating/primary evidence]
\u2022 [Example of internal opinions being preferred without clear reasoning]
\u2022 [Note that requests for explanation produced generic or incomplete responses]

2. [Heading #2 \u2013 e.g., "Procedural Fairness and Duties"]
\u2022 [Example of contradictory decisions, unclear processes, missed timelines, etc.]
\u2022 [Description of how duties owed by other parties do not seem to be enforced]
\u2022 [Short line on limited opportunity to respond to new information or errors]

3. [Heading #3 \u2013 e.g., "Oversight and Communication with Elected Offices"]
\u2022 [Example of incomplete or inaccurate information being given to a representative's office]
\u2022 [Example of substantive questions being labelled "out of scope" or answered in a non-responsive way]
\u2022 [Short line about how this neutralizes the representative's ability to assist and to scrutinize]

My requests to your office are:
1. That you ensure the responsible Minister and ministry are made aware of these documented concerns and review them;
2. That you seek assurances that [Agency Name] will improve how it handles evidence, explains decisions, and enforces duties; and review how it communicates with Members' offices and responds to oversight questions;
3. That you consider whether any broader review, directive, or other response is needed to align [Agency Name]'s practices with your government's commitments.

I have attached a short summary and key correspondence. I am prepared to provide my complete file and any further documentation your staff may require.

Thank you for your time and for your service to [Jurisdiction].

Respectfully,
[Your Full Name]
[City / Community]
File/Claim #[File or Claim Number]
[Phone Number]
[Email Address]`
  }
];

export const documentationPowerPoints = [
  {
    title: "Documentation is Your Time Machine",
    description: "Your injury and claim will stretch over months or years. Memories blur; staff change. Written records let you go back and prove what happened when."
  },
  {
    title: "It Turns Feelings into Facts",
    description: "\"They don't believe me\" turns into: \"On March 12, I sent Dr. Singh's note restricting lifting to 10 lbs. On April 2, the case manager approved heavy-duty work without addressing that note.\""
  },
  {
    title: "It Makes Appeals Winnable",
    description: "Review Division and WCAT aren't about who sounds more upset. They're about evidence, timelines, and policy. Documents are your ammo."
  }
];

export const whySilentPoints: WhySilentPoint[] = [
  {
    title: "The System is Designed to Exhaust You",
    description: "Letters are full of: Half-explanations, Policy references with no context, 'If you disagree, you may request...' with 3 different pathways in tiny print. When you're confused enough, silence feels easier than: Admitting you don't understand, Taking a wrong step and being told 'you should have done X instead'",
    icon: "\u2699\uFE0F"
  },
  {
    title: "You Get Trained to Think You're the Problem",
    description: "When professionals with titles treat you like you're unreasonable, you start to self-censor. You start to think: maybe I AM making too big a deal, maybe this IS how it's supposed to go. It's not.",
    icon: "\uD83E\uDDE0"
  },
  {
    title: "They Count on You Not Asking",
    description: "If you don't ask for: What evidence they relied on, Why they preferred one medical opinion over another, What the actual plan is for your return to work, They get to make decisions in the dark.",
    icon: "\uD83D\uDD75\uFE0F"
  },
  {
    title: "Your Voice is the One Thing They Can't Control",
    description: "WorkSafeBC controls:\n- the timeline\n- the paperwork\n- the \"expert\" opinions\n\nBut they cannot control:\n- your story\n- your evidence\n- your right to be heard\n\nThat is their vulnerability."
  },
  {
    title: "Every Silence is Counted as Compliance",
    description: "When you don't push back, the system records:\n- \"accepted\"\n- no objection\n- no harm detected\n\nThat becomes:\n- statistics presented to government\n- justification for harmful policies\n- \"proof\" nothing is wrong\n\nYour silence becomes their evidence."
  },
  {
    title: "One Voice Alone Gets Ignored \u2014 Many Voices Force Change",
    description: "They can isolate one worker. They cannot ignore a pattern.\n\nWhen dozens report:\n- the same delays\n- the same denials\n- the same \"behavioural\" labels\n\nIt becomes undeniable. And legally actionable."
  },
  {
    title: "You're Not Asking for a Favour \u2014 You're Exposing a Breach",
    description: "When you speak, you are not:\n- complaining\n- begging\n- whining\n\nYou are reporting:\n- state-caused harm\n- medical neglect\n- Charter violations\n- policy abuse\n\nThat is evidence \u2014 and it matters."
  },
  {
    title: "They Want You Tired. They Fear You Organized.",
    description: "WorkSafeBC cannot defeat every worker. So they try to exhaust each of us separately.\n\nOur answer:\nStand together and they lose their strategy."
  },
  {
    title: "The Real Reason to Speak Up",
    description: "Your story is part of the case that ends this.\n\nNot a rant.\nNot a plea.\nA record of systemic injustice.\n\nAnd once enough stories are recorded:\n- tribunals change\n- laws change\n- the entire system shifts\n\nBecause it has to."
  },
  {
    title: "The System Isn't Ready for You to Speak",
    description: "That's why speaking matters.\n\nYour voice is not a risk.\nYour voice is leverage.\n\nSay what they don't want on record \u2014 and watch what happens."
  }
];

export const engagementPoints = [
  {
    title: "When You Engage With Strategy",
    description: "It's not about being loud; it's about being precise. Every email is a potential exhibit later. Every unanswered question becomes: 'they ignored a relevant factor.'"
  },
  {
    title: "When You Don't Engage",
    description: "Silence feels safer in the moment. But it leaves a blank record. When you challenge a decision, there's nothing to point to except their version of events."
  },
  {
    title: "What Engagement Looks Like",
    description: "Written questions. Documented calls. Timelines. Choosing when to escalate to Review/WCAT/MLA. You're building a case, not begging."
  }
];

export const speakingImpactFlow = [
  { title: "Evidence", description: "Your written questions and documents become proof, not a rant." },
  { title: "Pattern", description: "Dozens of similar records expose the same delays, denials, and labels." },
  { title: "Oversight", description: "Patterns trigger attention from MLAs, tribunals, and media because they can't be dismissed as one-off." },
  { title: "Policy Change", description: "When the pattern is undeniable, procedures and laws get forced to shift." }
];

export const reassuranceChecklist = [
  "You choose what to share and when",
  "Your evidence stays yours\u2014no surprise releases",
  "You can stay anonymous in public-facing spaces",
  "You can pause, delete, or edit your record at any time"
];

// Route mapping for situation nextMoves
export const sectionRouteMap: Record<string, string> = {
  documentation: '/tools',
  pressure: '/pressure-points',
  templates: '/email-templates',
  wcat: '/precedents',
};
