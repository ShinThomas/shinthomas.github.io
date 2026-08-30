import type { LucideIcon } from 'lucide-react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export type ProjectItem = {
  title: string;
  dateRange: string;
  shortDescription: string;
  description: string;
  details: string[];
  tools: string[];
};

export type CourseReview = {
  code: string;
  semester: string;
  name: string;
  professor: string;
  concentration: string;
  category: 'Data Science' | 'Statistics' | 'Math' | 'Writing' | 'Other';
  difficulty: number;
  learningValue: number;
  enjoyment: number;
  coveredMaterial: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  name: 'Thomas Shin',
  title: 'Data Science + Statistics',
  description:
    'I like using data, statistics, and machine learning to explore useful problems across research, technology, healthcare, and sports.',
  email: 'thshin@bu.edu',
  github: 'https://github.com/ShinThomas',
  linkedin: 'https://www.linkedin.com/in/shinthomas/',
  instagram: 'https://www.instagram.com/the_thomas_shin/',
};

export const navigation = [
  { label: 'Home', href: '#/' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Course Reviews', href: '#/course-reviews' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Instagram', href: profile.instagram, icon: Instagram },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const projects: ProjectItem[] = [
  {
    title: 'LUCID',
    dateRange: '2026',
    shortDescription:
      'Precision oncology project investigating whether tumor gene-expression profiles can improve recurrence-risk stratification in early-stage lung adenocarcinoma.',
    description:
      'An end-to-end precision oncology project combining clinical and transcriptomic data to study recurrence risk and tumor biology in early-stage lung adenocarcinoma.',
    details: [
      'Built an end-to-end analysis pipeline using clinical and transcriptomic data from 204 early-stage lung adenocarcinoma patients.',
      'Developed leakage-safe survival modeling workflows comparing clinical and RNA-based recurrence-risk prediction, with RNA models achieving a mean held-out C-index of 0.727 versus 0.677 for the clinical baseline.',
      'Identified 311 clinically adjusted recurrence-associated genes and characterized a strong cell-cycle and proliferation program associated with aggressive tumor biology.',
      'Developed an interpretable 28-gene proliferation signature and evaluated it in an independent cohort of 124 LUAD patients, including stage-adjusted external validation.',
    ],
    tools: [
      'Python',
      'pandas',
      'NumPy',
      'scikit-learn',
      'lifelines',
      'Survival Analysis',
      'Cox Regression',
      'PCA',
      'Cross-Validation',
      'Transcriptomics',
      'Biomarker Discovery',
      'Pathway Enrichment',
      'External Validation',
    ],
  },
  {
    title: 'Tempo',
    dateRange: '2026 – Present',
    shortDescription:
      'AI-assisted workforce scheduling system that converts employee availability and staffing requirements into optimized weekly schedules.',
    description:
      'A full-stack scheduling system that combines natural-language availability parsing with deterministic constraint optimization and schedule validation.',
    details: [
      'Built a full-stack workforce scheduling system that transforms manager inputs and employee availability into validated weekly schedules.',
      'Designed a hybrid AI and optimization architecture where an LLM extracts structured availability while an OR-Tools CP-SAT solver deterministically enforces coverage, availability, hour limits, and scheduling constraints.',
      'Developed multi-objective scheduling logic for fairness, target hours, continuous shifts, opening and closing distribution, short-shift avoidance, and employee preferences.',
      'Added schedule validation and deterministic infeasibility diagnostics to explain when staffing requirements cannot be satisfied.',
      'Built a React and FastAPI workflow supporting both live AI parsing and manual worker entry, with reviewed inputs before schedule generation.',
    ],
    tools: [
      'Python',
      'OR-Tools',
      'CP-SAT',
      'Constraint Optimization',
      'FastAPI',
      'React',
      'TypeScript',
      'OpenAI API',
      'Structured Outputs',
      'Pydantic',
      'Scheduling Algorithms',
      'Multi-Objective Optimization',
      'Validation',
      'Testing',
    ],
  },
  {
    title: 'Lverage',
    dateRange: 'May 2026 - Present',
    shortDescription:
      'Comparative genomics pipeline for predicting transcription factor DNA-binding motifs.',
    description:
      'Comparative genomics data pipeline for predicting transcription factor DNA-binding motifs across orthologous species. Includes a GUI to make the workflow easier to use.',
    details: [
      'Worked on a comparative genomics workflow centered on transcription factor DNA-binding motifs.',
      'Structured the pipeline around reusable data-processing pieces rather than one-off scripts.',
      'Built a GUI layer to make the workflow easier to run and inspect.',
    ],
    tools: ['Data pipelines', 'OOP', 'Bioinformatics', 'GUI development'],
  },
  {
    title: 'Physical Therapy Intelligence',
    dateRange: 'May 2025 - Dec 2025',
    shortDescription:
      'Computer vision and retrieval system for physical therapy movement analysis.',
    description:
      'Built a computer vision and RAG system for analyzing physical therapy movement and exercise signals. Designed supporting data infrastructure for real-time inference and clinician-facing insights.',
    details: [
      'Built computer vision pieces for analyzing physical therapy movement and exercise signals.',
      'Used retrieval-augmented generation concepts to support contextual insight generation.',
      'Designed supporting data infrastructure for real-time inference workflows.',
    ],
    tools: ['OpenCV', 'RAG', 'PostgreSQL', 'Real-time inference'],
  },
  {
    title: 'Boston Cyclists Union — Biking Safety',
    dateRange: 'Jan 2026 - May 2026',
    shortDescription:
      'ETL and geospatial analysis combining ridership, bike count, and crash records.',
    description:
      'Built ETL pipelines combining Bluebikes ridership, municipal bike counts, and crash records into a centralized analytics database. Analyzed temporal and geospatial patterns to support bike safety mapping and infrastructure insights.',
    details: [
      'Combined Bluebikes ridership, municipal bike counts, and crash records into one analytics workflow.',
      'Prepared data for temporal and geospatial analysis around biking safety patterns.',
      'Used the resulting dataset to support mapping and infrastructure-oriented insights.',
    ],
    tools: ['ETL', 'Geospatial analysis', 'Exploratory data analysis', 'SQL'],
  },
  {
    title: 'Formula 1 Tire Strategy Optimizer',
    dateRange: 'Oct 2025 - Nov 2025',
    shortDescription:
      'Race strategy tool comparing pit stop approaches for Grand Prix circuits.',
    description:
      'Created a tool that recommends optimized pit stop strategies for Grand Prix circuits using historical race data. The system compares aggressive, balanced, and conservative race strategies.',
    details: [
      'Used historical race data to recommend pit stop strategies by circuit.',
      'Compared aggressive, balanced, and conservative strategy profiles.',
      'Presented model outputs in a way that connects data with race-day tradeoffs.',
    ],
    tools: ['FastF1', 'Simulation', 'Optimization', 'Data visualization'],
  },
];

export const skills = [
  'Python',
  'SQL',
  'Rust',
  'React',
  'FastAPI',
  'PyTorch',
  'OpenCV',
  'PostgreSQL',
  'Docker',
  'AWS',
  'scikit-learn',
  'Pandas',
  'NumPy',
];

export const courseReviews: CourseReview[] = [
  {
    code: 'MA582',
    semester: 'Spring 2026',
    name: 'Mathematical Statistics',
    professor: 'Dan Weiner',
    concentration: 'Statistics',
    category: 'Statistics',
    difficulty: 5,
    learningValue: 5,
    enjoyment: 4,
    coveredMaterial: ['point estimation', 'maximum likelihood', 'hypothesis testing', 'likelihood ratio tests'],
  },
  {
    code: 'DS539',
    semester: 'Spring 2026',
    name: 'Spark! Data Science X-Lab Practicum',
    professor: 'Bahar Bazargani',
    concentration: 'DS',
    category: 'Data Science',
    difficulty: 2,
    learningValue: 3,
    enjoyment: 3,
    coveredMaterial: ['real-world data science projects', 'client communication', 'team workflows', 'ethics'],
  },
  {
    code: 'WR320',
    semester: 'Spring 2026',
    name: 'Community Writing',
    professor: 'Jessica Bozek',
    concentration: 'Writing',
    category: 'Writing',
    difficulty: 1,
    learningValue: 2,
    enjoyment: 4,
    coveredMaterial: ['community writing', 'creative nonfiction', 'positionality', 'social action'],
  },
  {
    code: 'DS340',
    semester: 'Spring 2026',
    name: 'Introduction to Machine Learning and AI',
    professor: 'Kevin Gold',
    concentration: 'DS',
    category: 'Data Science',
    difficulty: 3,
    learningValue: 3,
    enjoyment: 2,
    coveredMaterial: ['machine learning', 'neural networks', 'reinforcement learning', 'transformers'],
  },
  {
    code: 'DS320',
    semester: 'Fall 2025',
    name: 'Algorithms for Data Science',
    professor: 'Aldo Pacchiano',
    concentration: 'DS, CS',
    category: 'Data Science',
    difficulty: 5,
    learningValue: 3,
    enjoyment: 1,
    coveredMaterial: ['algorithms', 'dynamic programming', 'greedy methods', 'randomized algorithms'],
  },
  {
    code: 'DS380',
    semester: 'Fall 2025',
    name: 'Data, Society and Ethics',
    professor: 'Seth Villegas',
    concentration: 'DS, Ethics',
    category: 'Data Science',
    difficulty: 2,
    learningValue: 2,
    enjoyment: 2,
    coveredMaterial: ['AI ethics', 'public policy', 'case studies', 'responsible data science'],
  },
  {
    code: 'RN103',
    semester: 'Fall 2025',
    name: 'Religions of Asia',
    professor: 'April Hughes',
    concentration: 'Religion',
    category: 'Other',
    difficulty: 1,
    learningValue: 3,
    enjoyment: 2,
    coveredMaterial: ['Hinduism', 'Buddhism', 'Daoism', 'Confucianism'],
  },
  {
    code: 'MA581',
    semester: 'Fall 2025',
    name: 'Probability',
    professor: 'Ankan Ganguly',
    concentration: 'Statistics',
    category: 'Statistics',
    difficulty: 3,
    learningValue: 2,
    enjoyment: 1,
    coveredMaterial: ['probability', 'random variables', 'joint distributions', 'central limit theorem'],
  },
  {
    code: 'DS310',
    semester: 'Spring 2025',
    name: 'Data Mechanics',
    professor: 'Scott Ladenheim',
    concentration: 'DS',
    category: 'Data Science',
    difficulty: 3,
    learningValue: 3,
    enjoyment: 2,
    coveredMaterial: ['data pipelines', 'SQL', 'MapReduce', 'data visualization'],
  },
  {
    code: 'DS122',
    semester: 'Spring 2025',
    name: 'Foundations of Data Science III',
    professor: 'Pawel Przytycki',
    concentration: 'DS, Math',
    category: 'Data Science',
    difficulty: 3,
    learningValue: 2,
    enjoyment: 2,
    coveredMaterial: ['probability', 'Bayes theorem', 'maximum likelihood', 'gradient descent'],
  },
  {
    code: 'CL101',
    semester: 'Spring 2025',
    name: 'World of Greece',
    professor: 'Christopher Ell',
    concentration: 'History',
    category: 'Other',
    difficulty: 2,
    learningValue: 1,
    enjoyment: 1,
    coveredMaterial: ['Greek literature', 'philosophy', 'classical Athens', 'ancient art'],
  },
  {
    code: 'MA214',
    semester: 'Spring 2025',
    name: 'Applied Statistics',
    professor: 'Thomas Enkosky',
    concentration: 'Statistics',
    category: 'Statistics',
    difficulty: 2,
    learningValue: 2,
    enjoyment: 2,
    coveredMaterial: ['statistical inference', 'regression', 'ANOVA', 'contingency tables'],
  },
  {
    code: 'DS210',
    semester: 'Fall 2024',
    name: 'Programming for Data Science',
    professor: 'Alishah Chator',
    concentration: 'CS',
    category: 'Data Science',
    difficulty: 4,
    learningValue: 3,
    enjoyment: 1,
    coveredMaterial: ['Rust', 'data structures', 'algorithms', 'command line'],
  },
  {
    code: 'DS121',
    semester: 'Fall 2024',
    name: 'Foundations of Data Science II',
    professor: 'Mayank Varia',
    concentration: 'DS, Math',
    category: 'Data Science',
    difficulty: 3,
    learningValue: 3,
    enjoyment: 2,
    coveredMaterial: ['linear algebra', 'matrix factorizations', 'orthogonality', 'exploratory data analysis'],
  },
  {
    code: 'MA225',
    semester: 'Fall 2024',
    name: 'Multivariate Calculus',
    professor: 'Ankan Ganguly',
    concentration: 'Math',
    category: 'Math',
    difficulty: 3,
    learningValue: 3,
    enjoyment: 3,
    coveredMaterial: ['vector calculus', 'partial derivatives', 'double/triple integrals', 'line integrals'],
  },
  {
    code: 'MA213',
    semester: 'Fall 2024',
    name: 'Basic Probability & Statistics',
    professor: 'Emily Stephen',
    concentration: 'Statistics',
    category: 'Statistics',
    difficulty: 3,
    learningValue: 2,
    enjoyment: 2,
    coveredMaterial: ['probability', 'confidence intervals', 'p-values', 'central limit theorem'],
  },
  {
    code: 'DS120',
    semester: 'Spring 2024',
    name: 'Foundations of Data Science I',
    professor: 'Tanima Chatterjee',
    concentration: 'DS, Math',
    category: 'Data Science',
    difficulty: 2,
    learningValue: 3,
    enjoyment: 3,
    coveredMaterial: ['calculus', 'probability', 'linear algebra', 'computational math'],
  },
  {
    code: 'IR271',
    semester: 'Spring 2024',
    name: 'Introduction to International Relations',
    professor: 'Alexander de la Paz',
    concentration: 'Political Science',
    category: 'Other',
    difficulty: 2,
    learningValue: 3,
    enjoyment: 3,
    coveredMaterial: ['international relations', 'conflict', 'globalization', 'political theory'],
  },
  {
    code: 'WR152',
    semester: 'Spring 2024',
    name: 'Family Snaps and Stories',
    professor: 'Michelle Martinez',
    concentration: 'Writing',
    category: 'Writing',
    difficulty: 2,
    learningValue: 2,
    enjoyment: 3,
    coveredMaterial: ['critical reading and writing', 'research', 'digital media', 'photo essays'],
  },
  {
    code: 'MA125',
    semester: 'Spring 2024',
    name: 'Calculus II',
    professor: 'Ranjan Panth',
    concentration: 'Math',
    category: 'Math',
    difficulty: 3,
    learningValue: 3,
    enjoyment: 2,
    coveredMaterial: ['integration', 'sequences', 'series', 'Taylor series'],
  },
  {
    code: 'DS110',
    semester: 'Fall 2023',
    name: 'Introduction to Data Science with Python',
    professor: 'Kevin Gold',
    concentration: 'DS, CS',
    category: 'Data Science',
    difficulty: 2,
    learningValue: 3,
    enjoyment: 3,
    coveredMaterial: ['Python', 'data structures', 'pandas', 'data visualization'],
  },
  {
    code: 'MA123',
    semester: 'Fall 2023',
    name: 'Calculus I',
    professor: 'Tasso Kaper',
    concentration: 'Math',
    category: 'Math',
    difficulty: 2,
    learningValue: 2,
    enjoyment: 3,
    coveredMaterial: ['limits', 'derivatives', 'optimization', 'definite integrals'],
  },
  {
    code: 'WR120',
    semester: 'Fall 2023',
    name: 'American Lives, American Leagues: Sports and Society in Contemporary U.S. Culture',
    professor: 'Max White',
    concentration: 'Writing',
    category: 'Writing',
    difficulty: 1,
    learningValue: 2,
    enjoyment: 4,
    coveredMaterial: ['sports and society', 'critical reading and writing', 'research essays', 'podcasting'],
  },
  {
    code: 'BI105',
    semester: 'Fall 2023',
    name: 'Introductory Biology for Health Sciences',
    professor: 'Michaelyn Hartmann',
    concentration: 'Biology',
    category: 'Other',
    difficulty: 3,
    learningValue: 3,
    enjoyment: 3,
    coveredMaterial: ['cell biology', 'genetics', 'immune systems', 'developmental biology'],
  },
];
