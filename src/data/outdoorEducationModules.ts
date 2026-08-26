import type { TrainingModule } from '../types/training';

export const outdoorEducationModules: TrainingModule[] = [
  {
    id: 'outdoor-ed-environmental-interpretation',
    title: 'Outdoor Ed: Environmental Interpretation',
    description: 'Revisit OED2EI: turn natural and cultural information into meaningful, audience-centred learning experiences.',
    learningObjectives: [
      'Distinguish environmental interpretation from simply delivering facts.',
      'Build a clear interpretive theme for a particular place and audience.',
      'Connect natural and cultural knowledge without treating either as background decoration.',
      'Critically evaluate your own interpretive practice.'
    ],
    sections: [
      {
        id: 'oe-ei-1',
        title: 'From facts to meaning',
        bodyMarkdown: `Environmental interpretation is not a data dump. Start with the **place**, choose a **central meaning**, consider the **audience**, then design an experience that helps learners notice or discover that meaning.\n\nA useful test is: **After this, what do I want the group to see differently?** If you cannot answer that, you probably have information rather than interpretation.\n\nThis revises La Trobe **OED2EI Environmental Interpretation (2018)**, which focused on interpretation in education and nature tourism, natural and cultural settings, interpretive skill, and critical evaluation of practice.\n\nSource: https://www.latrobe.edu.au/students/your-course/subjects/2018/oed2ei-environ-interpretation`
      },
      {
        id: 'oe-ei-2',
        title: 'Use the place, not just your voice',
        bodyMarkdown: `Good interpretation makes the environment itself do some of the teaching. Ask learners to notice evidence, compare features, predict, question, sketch, listen or trace a process before supplying the explanation.\n\nNatural and cultural interpretation often overlap. A river, forest or track is simultaneously ecological, historical and cultural. Be precise about whose knowledge you are presenting and avoid casually speaking for knowledge traditions that require appropriate authority.`
      }
    ],
    flashcards: [
      { id: 'oe-ei-f1', front: 'Information vs interpretation?', back: 'Information provides facts; interpretation organises selected facts into meaning and connection for a specific audience and place.' },
      { id: 'oe-ei-f2', front: 'What four things should be clear before an interpretive activity?', back: 'Place/resource, audience, central theme, and experience/method.' },
      { id: 'oe-ei-f3', front: 'Why evaluate interpretation?', back: 'To find out whether learners connected with the intended meaning, not merely whether you delivered content.' },
      { id: 'oe-ei-f4', front: 'What is a strong opening move in place-based interpretation?', back: 'Direct attention to something observable and invite noticing, prediction or connection before explaining it.' }
    ],
    quiz: [
      {
        id: 'oe-ei-q1',
        type: 'mcq',
        question: 'Which example is environmental interpretation rather than simple information delivery?',
        options: ['Reading ten species names aloud', 'Using visible evidence at the site to help learners discover a central idea about how the place works', 'Giving everyone a glossary', 'Avoiding questions so the facts remain accurate'],
        answerIndex: 1,
        explanation: 'Interpretation connects evidence in the place with meaning for the learner.'
      },
      {
        id: 'oe-ei-q2',
        type: 'true_false',
        question: 'An interpretive activity can be factually accurate but still be weak interpretation.',
        answer: true,
        explanation: 'Accuracy matters, but interpretation also needs relevance, meaning, audience awareness and purposeful design.'
      }
    ]
  },
  {
    id: 'outdoor-ed-leadership-safety',
    title: 'Outdoor Ed: Leadership, Groups & Safety',
    description: 'Revisit OED2OLA/OED2OLB themes: leadership, facilitation, group process, judgement and ethical safety decisions.',
    learningObjectives: [
      'Distinguish instruction, facilitation and leadership.',
      'Adapt leadership behaviour to people, task, environment and purpose.',
      'Balance challenge and learning value with physical and psychological safety.',
      'Recognise how motivation, self-efficacy and attribution influence participation.'
    ],
    sections: [
      {
        id: 'oe-ls-1',
        title: 'Read people, task, environment and purpose',
        bodyMarkdown: `Outdoor leadership is not simply “being confident”. Effective leaders continually read **people, task, environment and learning purpose**, then adjust how directive or facilitative they are.\n\nLa Trobe **OED2OLA Leading Groups in Outdoor Environments** linked outdoor leadership with communication, facilitation, instruction, experiential learning, group development, ethical judgement, motivation and self-efficacy.\n\nSource: https://www.latrobe.edu.au/students/your-course/subjects/2018/oed2ola-leading-groups-in-outdoor-environments`
      },
      {
        id: 'oe-ls-2',
        title: 'Dynamic judgement beats loyalty to the plan',
        bodyMarkdown: `A plan is a starting hypothesis. Weather, fatigue, water levels, behaviour, equipment and group confidence can change. Reassess: **What is the learning value now? What can go wrong? How capable is this group now? What margin remains?**\n\nModifying or abandoning an activity can be good leadership when the exposure no longer serves the educational purpose.`
      }
    ],
    flashcards: [
      { id: 'oe-ls-f1', front: 'What four things should an outdoor leader continually read?', back: 'People, task, environment and learning purpose.' },
      { id: 'oe-ls-f2', front: 'Instruction vs facilitation?', back: 'Instruction directly teaches/directs; facilitation structures conditions and questions so the group can make decisions or meaning.' },
      { id: 'oe-ls-f3', front: 'What is self-efficacy?', back: 'A person’s belief in their capability to perform a task or meet a challenge.' },
      { id: 'oe-ls-f4', front: 'When should a leader reconsider the plan?', back: 'Whenever conditions, group capability, risk, equipment or the learning purpose materially change.' }
    ],
    quiz: [
      {
        id: 'oe-ls-q1',
        type: 'mcq',
        question: 'Weather is worsening and the group is tiring. The planned activity is no longer necessary to meet the learning goal. What is the strongest leadership response?',
        options: ['Continue because the itinerary was approved', 'Reassess conditions, group capability and learning value, then modify or stop if the margin is no longer worthwhile', 'Let the group vote without giving safety information', 'Continue so participants learn resilience'],
        answerIndex: 1,
        explanation: 'Outdoor leadership requires dynamic judgement rather than blind adherence to an itinerary.'
      },
      {
        id: 'oe-ls-q2',
        type: 'true_false',
        question: 'Removing every challenge from an outdoor programme is the same thing as managing risk well.',
        answer: false,
        explanation: 'Outdoor learning can include challenge and uncertainty; the task is to manage exposure proportionately to purpose, capability and conditions.'
      }
    ]
  },
  {
    id: 'outdoor-ed-ecologies-place',
    title: 'Outdoor Ed: Ecologies, Place & Programme Design',
    description: 'Revisit OED3TPD and OED3EO: ecological approaches to learning, place, culture, curriculum and coherent programme design.',
    learningObjectives: [
      'Explain learning as relationships among learner, group, educator, place and culture.',
      'Design backwards from educational purpose rather than starting with an activity list.',
      'Question cultural assumptions about “the outdoors” and “the bush”.',
      'Evaluate programmes using evidence of intended and unintended outcomes.'
    ],
    sections: [
      {
        id: 'oe-ep-1',
        title: 'Learning ecologies',
        bodyMarkdown: `An ecological approach asks how learning emerges through relationships among **people, place, culture, activity, materials and programme structures**. Change one relationship and the learning experience changes.\n\nLa Trobe **OED3TPD Ecologies of Outdoor Learning (2019)** applied ecological approaches to curriculum, programme design, implementation and evaluation.\n\nSource: https://www.latrobe.edu.au/students/your-course/subjects/2019/oed3tpd-ecologies-of-outdoor-learning`
      },
      {
        id: 'oe-ep-2',
        title: 'A programme is more than an itinerary',
        bodyMarkdown: `Start with the learning purpose, then choose the place, experiences, sequence and facilitation. Ask **why these experiences, in this order, with these learners, here?**\n\nYour **OED3EO Education in the Outdoors** subject also examined the social and cultural context of outdoor education, including ideas about “the outdoors”, “the bush”, curriculum and global citizenship.\n\nSource: https://www.latrobe.edu.au/students/your-course/subjects/2019/oed3eo-education-in-the-outdoors`
      }
    ],
    flashcards: [
      { id: 'oe-ep-f1', front: 'What does an ecological view of learning focus on?', back: 'Relationships among learners, group, educator, place, culture, activity, materials and wider systems.' },
      { id: 'oe-ep-f2', front: 'What makes an outdoor programme coherent?', back: 'Alignment between purpose, learners, place, activities, sequence, facilitation and evaluation.' },
      { id: 'oe-ep-f3', front: 'Why question the idea of “the bush”?', back: 'Because outdoor language can contain assumptions about nature, history, belonging, competence and whose knowledge matters.' },
      { id: 'oe-ep-f4', front: 'What should evaluation ask besides “did they enjoy it”?', back: 'What learning occurred, what evidence supports it, what unintended outcomes occurred, and what should change.' }
    ],
    quiz: [
      {
        id: 'oe-ep-q1',
        type: 'mcq',
        question: 'Which programme is the most educationally coherent?',
        options: ['One with the most activities', 'One with a full timetable from dawn to dark', 'One where place, activities, sequence and facilitation are deliberately aligned to stated learning purposes', 'One participants describe as fun'],
        answerIndex: 2,
        explanation: 'Programme coherence is about alignment and educational purpose, not quantity of activity.'
      },
      {
        id: 'oe-ep-q2',
        type: 'true_false',
        question: 'A memorable experience is sufficient evidence that the intended learning outcome occurred.',
        answer: false,
        explanation: 'Memorability and enjoyment matter, but evaluation needs evidence tied to the intended outcomes.'
      }
    ]
  },
  {
    id: 'outdoor-ed-bush-river-teaching',
    title: 'Outdoor Ed: Teaching in Bush & River Environments',
    description: 'Revisit OED3TBE, OED2REF and OED3TRE: integrate technical skill, environmental knowledge, pedagogy, group management and safety.',
    learningObjectives: [
      'Use the local environment itself as primary learning material.',
      'Integrate technical competence with pedagogy and interpretation.',
      'Connect local environmental knowledge with safe field decisions.',
      'Critically self-appraise field teaching rather than treating successful completion as proof of good practice.'
    ],
    sections: [
      {
        id: 'oe-br-1',
        title: 'Teach with the place',
        bodyMarkdown: `La Trobe **OED3TBE Teaching in Bush Environments** emphasised local environmental knowledge, teaching methods, bush skills, group management, safety and using the area itself as primary learning material.\n\nBefore teaching, learn the place: ecology, landform, weather patterns, cultural context, access, hazards and the stories that can responsibly be told there.\n\nSource: https://www.latrobe.edu.au/students/your-course/subjects/2019/oed3tbe-teaching-in-bush-env`
      },
      {
        id: 'oe-br-2',
        title: 'River competence is more than paddling',
        bodyMarkdown: `Your flat-water sequence combined technical paddling and rescue with hydrology, ecology, natural/cultural history, reflection, interpretation and leadership. **OED3TRE** then focused on teaching: pedagogy, environmental interpretation and group management in river environments.\n\nSources:\n- https://www.latrobe.edu.au/students/your-course/subjects/2019/oed2ref-river-environments-flat-water\n- https://www.latrobe.edu.au/students/your-course/subjects/2019/oed3tre-teaching-in-river-enviro-flat`
      }
    ],
    flashcards: [
      { id: 'oe-br-f1', front: 'What does it mean to use the environment as primary learning material?', back: 'Learners investigate and make meaning from the actual features, processes, histories and conditions of the place rather than treating it as scenery.' },
      { id: 'oe-br-f2', front: 'What domains come together in river teaching?', back: 'Technical paddling/rescue, environmental knowledge, pedagogy, interpretation, group management and safety judgement.' },
      { id: 'oe-br-f3', front: 'Why does local knowledge matter to both teaching and safety?', back: 'Terrain, water, weather, access and environmental patterns reveal both learning opportunities and hazards.' },
      { id: 'oe-br-f4', front: 'What is cautious self-appraisal?', back: 'Critically reviewing your own competence and teaching without assuming a completed trip proves every decision was good.' }
    ],
    quiz: [
      {
        id: 'oe-br-q1',
        type: 'mcq',
        question: 'A paddling group is technically coping, but the river has become merely a backdrop. What is the best teaching response?',
        options: ['Give a long lecture while boats drift', 'Use a safe pause or low-demand section to focus attention on an observable river feature and connect it to environmental meaning', 'Ignore it because paddling is the only objective', 'Increase paddling difficulty'],
        answerIndex: 1,
        explanation: 'Field teaching integrates technical travel, environmental interpretation and safe group management.'
      },
      {
        id: 'oe-br-q2',
        type: 'true_false',
        question: 'Strong technical competence automatically produces strong outdoor teaching.',
        answer: false,
        explanation: 'Technical, pedagogical, environmental and leadership competence must work together.'
      }
    ]
  }
];
