import type { TrainingModule } from '../types/training';

export const modules: TrainingModule[] = [
  {
    id: 'foundations',
    title: 'Welcome to DCS: Systems, Structure, and Culture',
    description: 'Foundations orientation — systems used across the school, library role and expectations, culture and daily patterns.',
    learningObjectives: [
      'Identify the major school-wide systems used at DCS and their purposes.',
      'Describe the core responsibilities of a Library Assistant and ICT Support team member.',
      'Recognize the Christian ethos that shapes DCS workplace culture and supervision expectations.',
      'Explain how the DCS Library Resource Centre operates daily and integrates into school life.'
    ],
    sections: [
      {
        id: 'part-a-systems',
        title: 'Part A: School-Wide Systems Overview',
        bodyMarkdown: `
### Key platforms used across the school

- **LMS — OurDCS (Schoolbox v25.0.9)**: access classroom pages, library links, notices, news and learning resources.
- **SIS — Sentral**: student information system used for enrolments, reporting, messaging and attendance.
- **Authentication**: most systems use the school's **Microsoft (Office 365)** sign-in (SSO) — staff and students sign in with school accounts.
- **Filtering**: internet filtering is enforced on school devices. Students are required to agree to an ICT Acceptable Use Policy.

When you onboard, you will usually access classroom or library links via OurDCS and sign in using your network account.
`
      },
      {
        id: 'part-b-tools',
        title: 'Part B: Library Technology & Tools',
        bodyMarkdown: `
### Typical tools you will meet in the library

- **SmartLibrary (Functional Solutions)** — likely the Library Management System (LMS) used for item circulation.
- **TV4Education** — streaming video platform likely available through the LMS.
- **Equipment** — barcode scanners, circulation desk PC, interactive whiteboard (SmartBoard), network printer, laminator and photocopier.
- **eBooks** — Wheelers ePlatform is a commonly used service (to be confirmed); public OPAC access typically comes via OurDCS if provided.

Treat references to unconfirmed systems as "likely" and confirm specifics with the Teacher Librarian on your first induction day.
`
      },
      {
        id: 'part-c-role',
        title: "Part C: Your Role - What You'll Be Doing",
        bodyMarkdown: `
Library & ICT assistant common tasks include:

- **Circulation** — process loans and returns via SmartLibrary; scan items and student IDs.
- **Overdues** — manage notices (email/print) sent weekly or per term.
- **Stocktake** — support rolling stocktake using barcode scanning.
- **Supervision** — oversee Senior Study, lunchtime duties and maintain respectful behaviour.
- **Tech support** — help with basic student issues: logins, printers, SmartBoard, and simple troubleshooting.
- **Displays & events** — set up seasonal and curriculum-linked displays, support Book Week and author visit logistics.
`
      },
      {
        id: 'part-d-culture',
        title: 'Part D: School Culture',
        bodyMarkdown: `
DCS is a Christ-centred school and the Library is both a learning and ministry space.

We serve the school community with **grace**, **clarity**, and professional boundaries. Volunteers and student monitors support library life — you will induct, supervise and affirm these helpers.

Expectations include supporting the school's mission and demonstrating respectful behaviour, confidentiality, and situational judgement.
`
      },
      {
        id: 'part-e-map',
        title: 'Part E: Systems Map (Simplified)',
        bodyMarkdown: `
A simplified systems map you can use as a quick-memory aid:

Student/Staff Login → OurDCS (Schoolbox)
                          → SmartLibrary Catalogue
                          → TV4Education
                          → eBooks platform (likely Wheelers)

SmartLibrary ← student data from Sentral

Print/Copying ← school-wide network devices
`
      }
    ],
    flashcards: [
      { id: 'fc1', front: 'What platform is OurDCS built on?', back: 'Schoolbox' },
      { id: 'fc2', front: 'What is the likely Library Management System used at DCS?', back: 'SmartLibrary (Functional Solutions)' },
      { id: 'fc3', front: 'True/False: The DCS Library likely uses RFID gates.', back: 'False — likely barcode only' },
      { id: 'fc4', front: 'What streaming video platform is most likely integrated with the LMS?', back: 'TV4Education' },
      { id: 'fc5', front: 'What platform manages school reports and enrolments?', back: 'Sentral' },
      { id: 'fc6', front: 'Who do Library Assistants report to?', back: 'Teacher Librarian' },
      { id: 'fc7', front: 'What is a rolling stocktake?', back: 'Inventory gradually, section by section' },
      { id: 'fc8', front: 'What is the name of the student research and teaching portal?', back: 'OurDCS' },
      { id: 'fc9', front: 'What Christian value is highlighted in the Library PD?', back: 'Colossians 3:23 — work as unto the Lord' },
      { id: 'fc10', front: 'Name one typical library event run during Term 3.', back: 'Book Week' },
      { id: 'fc11', front: 'What is Senior Study?', back: 'A supervised study period for senior students that the library helps oversee' },
      { id: 'fc12', front: 'Why do we hold boundaries with clarity in library ministry?', back: 'To protect students and staff while serving compassionately and professionally' }
    ],
    quiz: [
      {
        id: 'q1',
        type: 'mcq',
        question: 'What platform is OurDCS built on?',
        options: ['Canvas', 'Schoolbox', 'Moodle'],
        answerIndex: 1,
        explanation: 'OurDCS is Schoolbox in this context.'
      },
      {
        id: 'q2',
        type: 'mcq',
        question: 'What is the likely Library Management System used at DCS?',
        options: ['Koha', 'SmartLibrary', 'Alma'],
        answerIndex: 1,
        explanation: 'SmartLibrary (Functional Solutions) is most likely.'
      },
      { id: 'q3', type: 'true_false', question: 'The DCS Library likely uses RFID gates.', answer: false, explanation: 'It is most likely barcode only.' },
      {
        id: 'q4',
        type: 'mcq',
        question: 'What streaming video platform is most likely integrated with the LMS?',
        options: ['YouTube', 'TV4Education', 'Vimeo'],
        answerIndex: 1,
        explanation: 'TV4Education is commonly used in school LMS integrations.'
      },
      {
        id: 'q5',
        type: 'mcq',
        question: 'What platform manages school reports and enrolments?',
        options: ['Sentral', 'OurDCS', 'ClassDojo'],
        answerIndex: 0,
        explanation: 'Sentral manages enrolment, attendance and reporting.'
      },
      {
        id: 'q6',
        type: 'mcq',
        question: 'Who do Library Assistants report to?',
        options: ['Principal', 'Teacher Librarian', 'Head of ICT'],
        answerIndex: 1,
        explanation: 'The Teacher Librarian is the usual reporting line.'
      },
      {
        id: 'q7',
        type: 'mcq',
        question: 'What is a rolling stocktake?',
        options: ['A full inventory done once a year', 'Inventory gradually, section by section', 'A digital-only inventory of e-books'],
        answerIndex: 1,
        explanation: 'Rolling stocktake happens gradually over time.'
      },
      {
        id: 'q8',
        type: 'mcq',
        question: 'What is the name of the student research and teaching portal?',
        options: ['OurDCS', 'Sentral', 'SmartLibrary'],
        answerIndex: 0,
        explanation: 'OurDCS is the LMS/portal for classroom resources and news.'
      },
      {
        id: 'q9',
        type: 'mcq',
        question: 'What Christian value is highlighted in the Library PD?',
        options: ['Forgiveness', 'Colossians 3:23 — working as unto the Lord', 'Community Service'],
        answerIndex: 1,
        explanation: 'Colossians 3:23 is used as a cultural reference.'
      },
      {
        id: 'q10',
        type: 'mcq',
        question: 'Name one typical library event run during Term 3.',
        options: ['Open Night', 'Book Week', 'Sports Carnival'],
        answerIndex: 1,
        explanation: 'Book Week is a common library event.'
      }
    ]
  }
  ,
  {
    id: 'ict-helpdesk-101',
    title: 'ICT Helpdesk 101',
    description: 'First-line support at DCS: triage, common student issues, safe troubleshooting, and when/how to escalate.',
    learningObjectives: [
      'Triage ICT issues quickly using a consistent set of questions and priorities.',
      'Resolve common classroom/student issues safely (login, printing, connectivity, basic device/app problems).',
      'Apply safe troubleshooting habits that protect student learning, privacy, and school systems.',
      'Escalate effectively with clear notes, evidence, and the right urgency.',
      'Uphold DCS expectations: Acceptable Use, filtered internet environment, and respectful support culture.'
    ],
    sections: [
      {
        id: 'm3-01',
        title: 'How ICT support works at DCS (big picture)',
        bodyMarkdown: `### Your role (first-line support)
You’re often the **first person** students/staff come to. Your job is to:
- Bring calm, clarify what’s happening, and try the simplest safe fixes first.
- Restore learning quickly where possible.
- Escalate well when it’s beyond first-line support.

### Common lanes
- **Quick fixes:** login basics, printer selection, Wi-Fi toggles, simple restarts.
- **Classroom support:** display/projector input, SmartBoard basics, “it’s frozen”.
- **Escalations:** account provisioning, network outages, security/safeguarding issues.

> Tooling varies by site. If something below says “confirm at DCS”, treat it as *to verify*.`
      },
      {
        id: 'm3-02',
        title: 'Triage in 60 seconds (what to ask first)',
        bodyMarkdown: `### The 60-second questions
1. **Who** is affected? (one student / one class / whole year / staff)
2. **Where** are you? (room / building / library / device location)
3. **What** exactly is happening? (error text, symptoms)
4. **When** did it start? (just now / today / last week)
5. **Impact:** can learning continue right now?
6. **Urgency flags:** safety, safeguarding, exam/assessment, widespread outage.

### Priority order (simple)
**Safety / safeguarding** → **widespread outages** → **assessment impact** → **single-device issues**

### What not to do
- Don’t guess and change settings you don’t understand.
- Don’t ask for or store student passwords.
- Don’t bypass filtering/security controls.`
      },
      {
        id: 'm3-03',
        title: "Login & account basics (SSO likely Microsoft 365 — confirm at DCS)",
        bodyMarkdown: `### First-line login checks
- Confirm the **correct username format** (e.g., firstname.lastname or student ID — *confirm at DCS*).
- Check **Caps Lock**, keyboard layout, and obvious typos.
- Ask: “Did it work yesterday?” “Did you change password recently?”
- If SSO/M365: consider **password expiry**, **account lock**, or **MFA prompts** (*confirm policy at DCS*).

### Boundaries
- Never ask a student for their password.
- Avoid looking at private files/content unless required to fix the issue.
- If login issues persist beyond simple checks, **escalate** (account admin required).`}
      ,
      {
        id: 'm3-04',
        title: 'Connectivity: Wi-Fi / internet not working',
        bodyMarkdown: `### Quick checks (low-risk)
- Is it **one device** or **many**?
- Toggle Wi-Fi off/on, check airplane mode.
- Reconnect to the correct SSID (*confirm SSID name at DCS*).
- Restart device if appropriate.
- Try a known-good website or DCS portal page (avoid random sites).

### Signs it’s bigger than you
- Multiple rooms or devices affected.
- Staff devices affected too.
- Filtering/authentication errors across multiple users.

➡️ Escalate as a possible **network/outage** with location + scope details.`}
      ,
      {
        id: 'm3-05',
        title: 'Printing: the most common pain point',
        bodyMarkdown: `### First-line printing flow
1. Confirm the **correct printer** is selected.
2. Check if the job is stuck in the **print queue**.
3. Check basics: paper, jams, toner, offline status.
4. If using PIN/release printing or quotas: confirm the process (*confirm at DCS*).

### What to record if escalating
- Printer name/location
- Error message
- Approx time it started
- Who is affected (one user vs many)`}
      ,
      {
        id: 'm3-06',
        title: 'Classroom tech basics (PCs, screens, projectors)',
        bodyMarkdown: `### “Nothing is showing on the screen”
- Check power (screen/projector on).
- Check input source (HDMI/DisplayPort/etc).
- Check cable seated properly.
- If using a dock/adaptor, try reseating once.

### “It’s frozen”
- Ask student to **save work** if possible.
- Close/reopen the app.
- If required, restart device (warn about unsaved work).

### Keep it simple
If it takes more than ~2–5 minutes and blocks a class, escalate with details.`}
      ,
      {
        id: 'm3-07',
        title: 'SmartBoard / Interactive Whiteboard basics',
        bodyMarkdown: `### Common causes
- Wrong input source selected
- USB not connected (touch/inking won’t work)
- Board/projector powered off
- Needs recalibration or app restart (*confirm device specifics at DCS*)

### First-line steps
- Check power + input.
- Reseat USB/HDMI once.
- Restart the whiteboard software/app.

> Don’t install drivers or change admin settings unless that’s part of your authorised process.`}
      ,
      {
        id: 'm3-08',
        title: 'Safe troubleshooting habits (protect learning + privacy)',
        bodyMarkdown: `### Golden habits
- Always explain what you’re doing in plain language.
- Prefer reversible steps: toggles, reconnect, restart.
- Avoid deep settings changes unless trained and authorised.
- Minimise exposure to student personal content.

### Student posture
- Be calm, respectful, and clear.
- Encourage responsibility: “Let’s check the basics together.”`}
      ,
      {
        id: 'm3-09',
        title: 'Escalation & documentation (how to write a helpful ticket)',
        bodyMarkdown: `### Escalate well = faster fixes
Include:
- **Who** (student/staff name if appropriate)
- **Where** (room/building)
- **Device** (type + asset tag if available)
- **What** happened (exact error text)
- **When** it started
- **Steps tried** (brief list)
- **Scope** (one user vs many)

### Example note
- “Room B12 — 5 devices can’t load OurDCS; started ~10:10am; Wi-Fi reconnect + restart tried; staff laptop in same room also affected.”`}
      ,
      {
        id: 'm3-10',
        title: 'Policy moments (Acceptable Use, filtering, safeguarding)',
        bodyMarkdown: `### Filtering & acceptable use (high-level)
- DCS devices are filtered and governed by an **Acceptable Use Policy**.
- If a student is trying to access blocked content, don’t “work around it”.
- If you see something concerning, follow safeguarding/escalation expectations.

### Safeguarding posture
- Stay calm, don’t interrogate.
- Escalate to the appropriate leader per DCS process (*confirm at DCS*).`}
    ],
    flashcards: [
      { id: 'm3-fc-01', front: 'What are the 60-second triage questions?', back: 'Who, where, what, when, impact, urgency flags.' },
      { id: 'm3-fc-02', front: 'Priority order when busy?', back: 'Safety/safeguarding → widespread outages → assessment impact → single-device.' },
      { id: 'm3-fc-03', front: 'What should you NEVER ask a student for?', back: 'Their password.' },
      { id: 'm3-fc-04', front: 'Best first fixes for Wi-Fi issues?', back: 'Toggle Wi-Fi, airplane mode check, reconnect SSID, restart (if needed).' },
      { id: 'm3-fc-05', front: 'Signs it’s a network outage?', back: 'Many users/devices/rooms affected; staff impacted too.' },
      { id: 'm3-fc-06', front: 'First step when printing fails?', back: 'Confirm correct printer + check queue.' },
      { id: 'm3-fc-07', front: 'What details help escalate a printer issue?', back: 'Printer name/location, error, time, who affected.' },
      { id: 'm3-fc-08', front: 'Nothing on projector: top 3 checks?', back: 'Power, input source, cable seated.' },
      { id: 'm3-fc-09', front: 'Frozen device: safest sequence?', back: 'Save work → close app → restart if needed.' },
      { id: 'm3-fc-10', front: 'SmartBoard touch not working: common cause?', back: 'USB not connected / wrong input.' },
      { id: 'm3-fc-11', front: 'What troubleshooting steps are “reversible”?', back: 'Reconnect/toggles/restart (low-risk).' },
      { id: 'm3-fc-12', front: 'When should you escalate quickly?', back: 'Safety, safeguarding, assessment, or widespread impact.' },
      { id: 'm3-fc-13', front: 'What’s the 2–5 minute rule?', back: 'If it’s not fixed fast and blocks learning, escalate.' },
      { id: 'm3-fc-14', front: 'What should a good ticket include?', back: 'Who/where/device/what/when/steps tried/scope.' },
      { id: 'm3-fc-15', front: 'What do you do if content is blocked by filtering?', back: 'Don’t bypass; follow policy/escalate if needed.' },
      { id: 'm3-fc-16', front: 'What’s the aim of first-line ICT support?', back: 'Restore learning quickly or escalate clearly.' }
    ],
    quiz: [
      {
        id: 'm3-q-01',
        type: 'mcq',
        question: 'Which is the best first triage question set?',
        options: [
          'Who, favourite app, lunch plans, what device brand',
          'Who, where, what, when, impact, urgency flags',
          'What, why, how, philosophical implications',
          'Where, when, and then change settings'
        ],
        answerIndex: 1,
        explanation: 'A consistent triage set speeds up resolution and escalation.'
      },
      { id: 'm3-q-02', type: 'true_false', question: 'It’s okay to ask for a student’s password if it speeds things up.', answer: false, explanation: 'Never ask for passwords—protect privacy and security.' },
      {
        id: 'm3-q-03',
        type: 'mcq',
        question: 'Multiple rooms can’t access the portal and staff are affected too. What is this most likely?',
        options: ['Single-device issue', 'Possible network/outage', 'Student error only', 'A printer problem'],
        answerIndex: 1,
        explanation: 'Broader scope suggests an outage; escalate with location and scope.'
      },
      {
        id: 'm3-q-04',
        type: 'mcq',
        question: 'What should you do first when printing fails?',
        options: ['Reinstall drivers', 'Check printer selection and print queue', 'Disable filters', 'Delete user account'],
        answerIndex: 1,
        explanation: 'Start with the simplest, lowest-risk checks first.'
      },
      {
        id: 'm3-q-05',
        type: 'mcq',
        question: 'Nothing on the projector—best first step?',
        options: ['Open BIOS', 'Check power and input source', 'Factory reset the device', 'Install new software'],
        answerIndex: 1,
        explanation: 'Power/input/cables fix most “no display” scenarios.'
      },
      { id: 'm3-q-06', type: 'true_false', question: 'If an issue blocks learning and isn’t fixed in a few minutes, escalation is appropriate.', answer: true, explanation: 'Escalate to reduce downtime and avoid risky tinkering.' },
      { id: 'm3-q-07', type: 'mcq', question: 'SmartBoard touch isn’t working. What’s a common cause?', options: ['USB not connected', 'Too many bookmarks', 'Student forgot lunch', 'Printer out of paper'], answerIndex: 0, explanation: 'Touch/inking usually requires the USB connection.' },
      { id: 'm3-q-08', type: 'true_false', question: 'It’s fine to bypass filtering if the site is educational and the class needs it now.', answer: false, explanation: 'Do not bypass security controls; follow policy and escalation paths.' },
      {
        id: 'm3-q-09',
        type: 'mcq',
        question: 'Which ticket note is most helpful?',
        options: [
          "It’s broken again.",
          'Room B12: 5 devices can’t load portal since ~10:10am; reconnect + restart tried; staff also impacted.',
          'A student said the internet is dumb.',
          'Printer bad vibes.'
        ],
        answerIndex: 1,
        explanation: 'Clear scope, time, steps tried, and location accelerates fixing.'
      },
      { id: 'm3-q-10', type: 'true_false', question: 'Part of safe troubleshooting is explaining what you’re doing and minimising privacy exposure.', answer: true, explanation: 'Good support is transparent, respectful, and low-risk.' },
      { id: 'm3-q-11', type: 'mcq', question: 'A student device is frozen during class. Best sequence?', options: ['Restart immediately without warning', 'Ask them to save, close/reopen app, then restart if needed', 'Change admin settings', 'Ignore it'], answerIndex: 1, explanation: 'Protect learning and student work first.' },
      { id: 'm3-q-12', type: 'mcq', question: 'Which scenario should be treated as highest urgency?', options: ['One student can’t find a file', 'Printer is out of paper', 'Safeguarding/concerning content observed on a school device', 'A bookmark is missing'], answerIndex: 2, explanation: 'Safeguarding/safety always outranks convenience issues.' }
    ]
  }
  ,
  {
    id: 'library-daily-routines',
    title: 'DCS Library Daily Routines',
    description: 'Your day-to-day flow in the Library Resource Centre: opening, circulation, shelving, supervision, and wrap-up.',
    learningObjectives: [
      'Describe the typical daily rhythm of the DCS Library Resource Centre from open to close.',
      'Perform circulation desk tasks confidently: loans, returns, holds, and basic troubleshooting.',
      'Apply a consistent shelving workflow that keeps the library orderly and easy to use.',
      'Support students during Senior Study and other sessions with clear expectations and calm boundaries.',
      'Complete end-of-day wrap-up tasks and handover notes reliably.'
    ],
    sections: [
      {
        id: 'm2-01',
        title: 'The daily rhythm (big picture)',
        bodyMarkdown: `
### Simple timeline

- Morning: Open & prepare (greet staff, checkout ready, inspections)
- Mid-day: Class bookings, circulation, small-group support
- Recess / Lunch: Busy returns and loans; supervise Senior Study if scheduled
- Senior Study blocks: Quiet, supervised study with minimal interruptions
- End-of-day: Clean up, reshelve, handover notes

What "good" looks like

- The library feels calm, predictable, welcoming and organised.
- Students can find what they need and staff quickly locate requested items.

What to do when surprised

- Prioritise safety and supervision first.
- De-escalate or move students to a supervised area if needed.
- If unsure, ask the Teacher Librarian (or escalate per local procedure).
`
      },
      {
        id: 'm2-02',
        title: 'Opening routine (first 10–20 minutes)',
        bodyMarkdown: `
Checklist-style opening steps

1. Power on circulation desk PC, printer and barcode scanners (Confirm at DCS).
2. Log into OurDCS and SmartLibrary (if used) — ensure accounts are working.
3. Quick space check: returns trolley, desks, bins, spills, trip hazards.
4. Prepare any known bookings or class resources.
5. Short team check-in; a quick prayer or intentional posture — “work as unto the Lord” (1–2 sentences).

These actions make the rest of the day predictable and safer for all.
`
      },
      {
        id: 'm2-03',
        title: 'Circulation desk: loans, returns, and holds',
        bodyMarkdown: `
Loans

- Scan student ID + item barcode.
- Confirm due date and explain care instructions.

Returns

- Check item condition (badly damaged → repairs pile; note in system).
- Decide whether to reshelve immediately or place on trolley for later processing.

Holds / reservations

- If a holds feature exists: follow the local workflow (Confirm at DCS).

Troubleshooting (common problems)

- Barcode won't scan: re-angle, clean scanner, try manual entry, escalate if persistent.
- Student record not found: Sentral sync timing may cause short delays — escalate if needed.
- Item already on loan: check hold/recall status and advise student.
- Printer jam / label printing fails: clear jam / switch to spare printer and notify ICT.

Escalation

- Contact the Teacher Librarian for catalog or circulation system failures.
- For serious technical issues contact the ICT escalation path.
`
      },
      {
        id: 'm2-04',
        title: 'Shelving & tidying workflow',
        bodyMarkdown: `
Shelving basics

- Sort returned items into broad categories (fiction/non-fiction/periodicals/resources).
- Follow shelf-reading basics (order, spine labels visible, tidy edges).

Rules of thumb

- "One trolley at a time" — keep focus to avoid messy partial shelving.
- When to flag items: damaged or poor condition → set aside and do not discard without approval.

Displays

- Keep displays neat and linked to curriculum or seasonal themes.

If in doubt: ask Teacher Librarian whether a title should be weeded or repaired.
`
      },
      {
        id: 'm2-05',
        title: 'Supervision: Senior Study + lunchtime behaviour',
        bodyMarkdown: `
Clear expectations

- Respectful voice levels; follow device use rules (Confirm at DCS).
- No running, rough play or behaviours that interrupt learning.

De-escalation

- Give calm, short instructions and move closer when needed.
- Use students' names and offer simple choices (e.g. "work here" or "talk quietly").

Escalation triggers

- Unsafe behaviour or threats to safety.
- Repeated refusal to comply after reasonable instruction.
- Serious incidents (bullying, physical altercation) require immediate escalation.

Christian culture framing

- Serve with grace and hold boundaries with clarity; preserve dignity for every student.
`
      },
      {
        id: 'm2-06',
        title: 'End-of-day wrap-up & handover',
        bodyMarkdown: `
End-of-day checklist

1. Clear desks, put chairs under tables, empty bins and tidy public spaces.
2. Return the items trolley to the correct place; ensure reshelving is organised (one trolley at a time).
3. Lock away equipment and sensitive materials where applicable (Confirm at DCS).
4. Note issues (broken items, student incidents, tech problems) and record where necessary.
5. Leave a short handover message or verbally notify the Teacher Librarian / next staff.
6. Prepare necessary materials for tomorrow's bookings and events.

Consistency at the end of day sets the tone for tomorrow.
`
      }
    ],
    flashcards: [
      { id: 'm2-fc-01', front: 'What are the 3 priorities when things get busy?', back: 'Safety, supervision, service.' },
      { id: 'm2-fc-02', front: 'What do you do first when opening?', back: 'Login + space check + prep returns/print/scanners (Confirm at DCS).' },
      { id: 'm2-fc-03', front: 'What’s the circulation flow for a loan?', back: 'Student ID → item barcode → confirm due date → remind care.' },
      { id: 'm2-fc-04', front: 'Return: what 2 quick checks?', back: 'Condition + where it goes next (shelf / repairs).' },
      { id: 'm2-fc-05', front: 'If a barcode won’t scan?', back: 'Try re-angle/clean, manual entry if allowed, then escalate.' },
      { id: 'm2-fc-06', front: 'What does “one trolley at a time” prevent?', back: 'Mess + half-finished reshelving.' },
      { id: 'm2-fc-07', front: 'When should you escalate behaviour?', back: 'Unsafe, repeated refusal, serious incident.' },
      { id: 'm2-fc-08', front: 'What does “boundaries with clarity” sound like?', back: 'Short, calm instruction + next step.' },
      { id: 'm2-fc-09', front: 'Quick opening check — name one step', back: 'Power on PC / scanner / printer.' },
      { id: 'm2-fc-10', front: 'If student record not found', back: 'Check Sentral sync; escalate if persistent.' },
      { id: 'm2-fc-11', front: 'What to do with damaged items', back: 'Place in repairs pile and notify Teacher Librarian.' },
      { id: 'm2-fc-12', front: 'How to handle a printer jam', back: 'Clear jam, switch printer or notify ICT.' },
      { id: 'm2-fc-13', front: 'Shelving: what is shelf-reading?', back: 'Checking order and condition of items on shelf.' },
      { id: 'm2-fc-14', front: 'What is a quick daily tidy task?', back: 'Straighten displays and refold any mis-shelved items.' },
      { id: 'm2-fc-15', front: 'Name a supervision tool', back: 'Use a proximity or brief instruction and consistent routines.' },
      { id: 'm2-fc-16', front: 'What is the final handover step?', back: 'Leave a short note about issues and bookings for next staff.' }
    ],
    quiz: [
      {
        id: 'm2-q1',
        type: 'mcq',
        question: 'Which of the following is the correct priority order during a busy period?',
        options: ['Service, paperwork, safety', 'Safety, supervision, service', 'Speed, service, silence'],
        answerIndex: 1,
        explanation: 'Safety comes first, then supervision, then service.'
      },
      {
        id: 'm2-q2',
        type: 'mcq',
        question: 'What is the very first practical action when opening the library?',
        options: ['Run a full stocktake', 'Power on PC and check scanners/printers', 'Start shelving immediately'],
        answerIndex: 1,
        explanation: 'Openings start with turning on equipment and checking readiness.'
      },
      {
        id: 'm2-q3',
        type: 'mcq',
        question: 'What is the correct flow for processing a loan?',
        options: ['Scan item → student ID → due date', 'Student ID → item barcode → confirm due date', 'Confirm due date → scan item → notify ICT'],
        answerIndex: 1,
        explanation: 'Check student ID first, then item barcode, then confirm due date.'
      },
      {
        id: 'm2-q4',
        type: 'mcq',
        question: 'When an item is returned and damaged, you should:',
        options: ['Reshelve immediately regardless', 'Put into repairs pile and inform Teacher Librarian', 'Discard the item'],
        answerIndex: 1,
        explanation: 'Damaged items should be flagged and handled via the repairs process.'
      },
      {
        id: 'm2-q5',
        type: 'mcq',
        question: 'What does the “one trolley at a time” rule encourage?',
        options: ['Faster shelving', 'Neater, complete shelving and fewer mistakes', 'More trolleys in circulation'],
        answerIndex: 1,
        explanation: 'It prevents partial shelving and messy finishes.'
      },
      {
        id: 'm2-q6',
        type: 'mcq',
        question: 'You notice a student repeatedly refuses to quieten after three instructions — what next?',
        options: ['Ignore them', 'Escalate per school policy and involve the Teacher Librarian', 'Yell at them to be quiet'],
        answerIndex: 1,
        explanation: 'Repeated refusal should be escalated and handled per school policy.'
      },
      {
        id: 'm2-q7',
        type: 'mcq',
        question: 'A barcode will not scan. What is the recommended first step?',
        options: ['Manually edit the student record', 'Re-angle/clean the barcode and try again', 'Immediately escalate to ICT'],
        answerIndex: 1,
        explanation: 'Try simple fixes first – re-angle or clean before escalation.'
      },
      {
        id: 'm2-q8',
        type: 'mcq',
        question: 'End-of-day handover should include:',
        options: ['Short note about issues and tomorrow’s bookings', 'Nothing — it is optional', 'Only a detailed stock count'],
        answerIndex: 0,
        explanation: 'A short note ensures continuity for the next staff on duty.'
      },
      { id: 'm2-q9', type: 'true_false', question: 'The opening routine should include a quick space check for hazards.', answer: true, explanation: 'Quick space checks reduce safety risks.' },
      { id: 'm2-q10', type: 'true_false', question: '“One trolley at a time” allows multiple people to shelve sections simultaneously on different trolleys.', answer: false, explanation: 'The rule is to focus and avoid half-finished shelving.' },
      { id: 'm2-q11', type: 'true_false', question: 'For a damaged book you should immediately discard it.', answer: false, explanation: 'Damaged items should be flagged and assessed before disposal.' },
      { id: 'm2-q12', type: 'true_false', question: 'De-escalation in supervision includes calm short instructions and offering choices.', answer: true, explanation: 'Simple instructions and choices help de-escalate behaviour.' }
    ]
  }
];

export default modules;
