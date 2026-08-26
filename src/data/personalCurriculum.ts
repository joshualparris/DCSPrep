import type { TrainingModule } from '../types/training';

type Item = [code: string, title: string, result?: string, status?: string];
type Group = {
  stream: string;
  qualification: string;
  year?: number;
  evidence: string;
  defaultStatus: string;
  items: Item[];
};

const groups: Group[] = [
  {
    stream: 'Christian Studies', qualification: 'Certificate IV in Christian Studies (91529NSW)', year: 2013,
    evidence: 'Cornerstone transcript', defaultStatus: 'completed', items: [
      ['AB401A', 'Interpret & Apply the Book of Genesis Today', '90% HD'],
      ['AB402A', 'Interpret & Apply the Old Testament Prophets & Writings Today', '83% D'],
      ['AB403A', 'Interpret & Apply the New Testament Gospels Today', '81% D'],
      ['AB404A', 'Interpret & Apply the New Testament Acts & Letters Today', '70% C'],
      ['CC301A', 'Respond Biblically to Contemporary Challenges', '75% D'],
      ['CC401A', 'Respond to Contemporary Apologetic Issues', '73% C'],
      ['CC402A', 'Respond to Contemporary Social Issues', '84% D'],
      ['CS301A', 'Develop Foundations for Christian Spirituality', 'Pass'],
      ['CS401A', 'Develop Christian Spirituality in Personal Life & Relationships', 'Pass'],
      ['CS402A', 'Develop Christian Spirituality in Our World & Work', 'Pass'],
      ['MS301A', 'Develop Biblical Perspectives for Christian Missional Life', 'Pass'],
      ['MS401A', 'Develop Personal Christian Mission Skills', 'Pass'],
      ['MS402A', 'Develop Vocational Christian Mission Skills', 'Pass'],
      ['MISSION1A', 'Personal Mission Fieldwork', 'Pass'],
      ['MISSION1B', 'Personal Mission Project', 'Pass'],
    ]
  },
  {
    stream: 'Christian Studies', qualification: 'Diploma of Christian Studies (91528NSW)', year: 2015,
    evidence: 'Cornerstone prospectus and retained course material', defaultStatus: 'historical-course-material', items: [
      ['AB501A', 'Interpret & Apply Biblical Principles & Models for Mission Today'],
      ['AB502A', 'Interpret & Apply the Bible to Christian Experience Today'],
      ['CS501A', 'Develop Christian Spirituality in Missional Community'],
      ['CC501A', 'Engage with Popular Culture'],
      ['CC502A', 'Engage with Apologetic Challenges in Christian Mission'],
      ['CC503A', 'Engage with Social Issues in Christian Mission'],
      ['MS501A', 'Disciple Others Individually & in Small Groups'],
      ['MS502A', 'Participate in Christian Mission to Youth'],
      ['MS503A', 'Teach Scripture in Schools'],
      ['ABL', 'Adventure-Based Learning'],
      ['GROUP-FACILITATION', 'Group Facilitation'],
    ]
  },
  {
    stream: 'Outdoor Education', qualification: 'Bachelor of Outdoor Education (Extended)', evidence: 'La Trobe academic record',
    defaultStatus: 'completed', items: [
      ['ABS0WOM', 'Wominjeka La Trobe: Indigenous Cultural Literacy for Higher Education', 'P'],
      ['OED1AFE', 'Field Experience A', '52 D'],
      ['OED1AOL', 'Outdoor Living & Travel Skills', '71 B'],
      ['OED1RAL', 'Reading Australian Landscapes', '58 D'],
      ['OED1WKN', 'Ways of Knowing Nature', '58 D'],
      ['OED1BFE', 'Introduction to Winter Environments', '71 B'],
      ['OED1NS', 'Naturalist Studies', '65 C'],
      ['OED1OEE', 'Outdoor Environments', '62 C'],
      ['OED1WE', 'World Views and the Environment', '68 C'],
      ['OED2FEC', 'Field Experience C', '75 B'],
      ['OED2RCS', 'Regional Catchment Studies: Resources & Management', '51 D'],
      ['OED3OPF', 'Outdoor Environmental Practical Extension F (Double)', '56 D'],
      ['OED2OLB', 'Safety in Outdoor Environments', '52 D after repeat', 'completed-after-repeat'],
      ['OED2R', 'Rock Environments', '0 N', 'attempted-not-completed'],
      ['EDU1CC', 'Concepts of Communities', '62 C'],
      ['EDU1CCT', 'Childhood in Contemporary Times', '77 B'],
      ['OED2ACL', 'Australian Culture and Land', '60 C'],
      ['EDU3CTE', 'Connections Through Expression', '81 A'],
      ['OED2BE', 'Bush Environments', '63 C'],
      ['OED2EI', 'Environmental Interpretation', '65 C'],
      ['OED3CSE', 'City Studio & Environmental Dialogue', '82 A'],
      ['OED2OLA', 'Leading Groups in Outdoor Environments', '81 A'],
      ['OED2REF', 'River Environments (Flat Water)', '72 B'],
      ['OED3EO', 'Education in the Outdoors', '76 B'],
      ['OED3FED', 'Field Experience D', '78 B'],
      ['OED3TBE', 'Teaching in Bush Environments', '55 D'],
      ['OED3TRE', 'Teaching in River Environments (Flat Water)', '72 B'],
      ['OED3FEE', 'Field Experience E', '80 A'],
      ['OED3TPD', 'Ecologies of Outdoor Learning', '79 B'],
    ]
  },
  {
    stream: 'Teaching & Human Development', qualification: 'Bachelor of Education (Secondary)', evidence: 'La Trobe academic record',
    defaultStatus: 'advanced-standing', items: [
      ['EDU1CAD', 'Child and Adolescent Development'],
      ['EDU1DLC', 'Diverse Learning Communities'],
    ]
  },
  {
    stream: 'IT & Computing', qualification: 'Bachelor of Information Technology', year: 2020, evidence: 'La Trobe academic record',
    defaultStatus: 'completed', items: [
      ['CSE1ITF', 'Information Technology Fundamentals', '67 C'],
      ['CSE1PE', 'Programming Environment', '92 A'],
      ['MAT1MIT', 'Mathematics for IT', '71 B'],
    ]
  },
  {
    stream: 'Information, Library & Workplace Skills', qualification: 'TAFE NSW / VET', year: 2017, evidence: 'Authenticated USI VET transcript',
    defaultStatus: 'completed', items: [
      ['BSBLIB304', 'Develop & Use Information Literacy Skills'],
      ['BSBCUS201', 'Deliver a Service to Customers'],
      ['ICTICT203', 'Operate Application Software Packages'],
      ['BSBWOR203', 'Work Effectively With Others'],
      ['BSBWHS302', 'Apply Knowledge of WHS Legislation in the Workplace', undefined, 'credit-transfer'],
      ['CUAIND202', 'Develop & Apply Knowledge of Information & Cultural Services Organisations', undefined, 'withdrawn'],
    ]
  },
  {
    stream: 'Safety & Emergency Response', qualification: 'VET / Short Courses', evidence: 'Authenticated USI VET transcript',
    defaultStatus: 'completed', items: [
      ['HLTAID001', 'Provide Cardiopulmonary Resuscitation'],
      ['HLTAID003', 'Provide First Aid'],
      ['SISOOPS305A', 'Provide First Aid in a Remote Location'],
      ['SISXEMR001', 'Respond to Emergency Situations'],
      ['SISXEMR002', 'Coordinate Emergency Responses'],
      ['VU22927/VU21658', 'Manage Asthma Risks & Emergencies'],
      ['VU23090/VU21800', 'Provide First Aid Management of Anaphylaxis'],
      ['VU23091', 'Develop Risk-Minimisation Strategies for Anaphylaxis'],
      ['SISXOHS101A', 'Follow Occupational Health & Safety Policies'],
      ['SITHFAB021', 'Responsible Service of Alcohol'],
    ]
  },
  {
    stream: 'HSC Foundations', qualification: 'Higher School Certificate', year: 2012, evidence: 'Consolidated education profile',
    defaultStatus: 'completed', items: [
      ['HSC-ENG-ADV', 'English Advanced'],
      ['HSC-ENG-EXT1', 'English Extension 1'],
      ['HSC-ENG-EXT2', 'English Extension 2'],
      ['HSC-CAFS', 'Community & Family Studies'],
      ['HSC-GEN-MATH', 'General Mathematics'],
      ['HSC-VIS-ART', 'Visual Arts'],
    ]
  },
];

export type CurriculumRecord = {
  id: string; code: string; title: string; stream: string; qualification: string;
  year?: number; result?: string; status: string; evidence: string;
};

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const prettyStatus = (value: string) => value.replaceAll('-', ' ');

export const personalCurriculumRecords: CurriculumRecord[] = groups.flatMap((group) =>
  group.items.map(([code, title, result, status]) => ({
    id: slug(code), code, title, result, status: status ?? group.defaultStatus,
    stream: group.stream, qualification: group.qualification, year: group.year, evidence: group.evidence,
  }))
);

export const personalCurriculumModules: TrainingModule[] = personalCurriculumRecords.map((record) => {
  const id = `personal-${record.id}`;
  const recognised = ['completed', 'completed-after-repeat', 'credit-transfer', 'advanced-standing'].includes(record.status);
  return {
    id,
    title: `${record.code} · ${record.title}`,
    description: `${record.stream} · ${record.qualification} · ${prettyStatus(record.status)}`,
    learningObjectives: [
      `Reconstruct the central ideas and skills from ${record.title} using active recall.`,
      `Connect ${record.title} with present-day knowledge, practice and adjacent subjects.`,
      'Separate remembered detail from uncertainty, then return to the original source material where needed.',
    ],
    sections: [
      {
        id: `${id}-source`, title: 'Source-anchored restart',
        bodyMarkdown: `### ${record.title}\n\n**Original context:** ${record.qualification}${record.year ? ` (${record.year})` : ''}  \n**Recorded status:** ${prettyStatus(record.status)}${record.result ? ` · ${record.result}` : ''}  \n**Evidence basis:** ${record.evidence}\n\nThis module is a **restart point**, not a fabricated replacement for the original course. Begin from memory, then reopen the original notes, readings, assignments or transcript evidence to deepen it.`
      },
      {
        id: `${id}-recall`, title: 'Active recall',
        bodyMarkdown: `Without looking anything up, answer:\n\n1. What were the three most important ideas or skills in **${record.title}**?\n2. What assignment, field experience, text, problem, discussion or practical task do you still remember?\n3. What changed in how you thought or acted because of this subject?\n4. What is now fuzzy enough that the original material should be reopened?`
      },
      {
        id: `${id}-apply`, title: 'Apply it now',
        bodyMarkdown: `Choose one present-day situation where **${record.title}** could still matter. Explain the connection in five sentences, then write one question you would ask the original teacher, lecturer or trainer today.`
      },
    ],
    flashcards: [
      { id: `${id}-f1`, front: `Which study stream contains “${record.title}”?`, back: record.stream },
      { id: `${id}-f2`, front: `What study context did “${record.title}” belong to?`, back: record.qualification },
      { id: `${id}-f3`, front: `What is the archive status of “${record.title}”?`, back: `${prettyStatus(record.status)}${record.result ? ` · ${record.result}` : ''}` },
    ],
    quiz: [
      { id: `${id}-q1`, type: 'mcq', question: `Which study context contains “${record.title}”?`, options: [record.qualification, 'A different qualification', 'No recorded study context'], answerIndex: 0, explanation: `The archive links it to ${record.qualification}.` },
      { id: `${id}-q2`, type: 'true_false', question: `The archive treats “${record.title}” as completed or formally recognised.`, answer: recognised, explanation: `Recorded status: ${prettyStatus(record.status)}${record.result ? ` · ${record.result}` : ''}.` },
    ],
  };
});
