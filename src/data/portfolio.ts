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
  review?: string;
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
    title: 'Lverage Project Data Pipeline',
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
    title: 'Boston Cyclists Union - Biking Safety',
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
    title: 'Detecting Sarcasm',
    dateRange: 'Feb 2026 - Apr 2026',
    shortDescription:
      'Comparison of classical machine learning and transformer-based models for sarcasm detection.',
    description:
      'Compared classical machine learning and transformer-based models for sarcasm detection in news headlines. Explored how different text representations affect performance on subtle language cues.',
    details: [
      'Compared traditional text representations with transformer-based approaches.',
      'Focused on news headlines, where sarcasm depends on subtle language cues.',
      'Evaluated how model choice and representation changed performance.',
    ],
    tools: ['TF-IDF', 'BERT', 'Machine learning', 'NLP'],
  },
  {
    title: 'Ecommerce Conversion Analytics',
    dateRange: 'Mar 2026 - Apr 2026',
    shortDescription:
      'Product analytics and machine learning pipeline for conversion behavior.',
    description:
      'Built a product analytics and machine learning pipeline on millions of user events. Analyzed conversion funnels and developed a model to identify high-intent users.',
    details: [
      'Worked with millions of user events to study product conversion behavior.',
      'Analyzed funnel patterns and signals associated with high-intent users.',
      'Developed a modeling workflow around feature engineering and conversion metrics.',
    ],
    tools: ['Product analytics', 'Logistic regression', 'Feature engineering', 'A/B metrics'],
  },
  {
    title: 'NHL Power Play Success Prediction',
    dateRange: 'Dec 2025',
    shortDescription:
      'Sports analytics model predicting whether NHL power plays result in goals.',
    description:
      'Predicted whether NHL power play opportunities would result in goals using game context and team performance data. The project combined sports analytics with practical model evaluation.',
    details: [
      'Modeled power play outcomes using game context and team performance data.',
      'Framed the task as a classification problem with practical evaluation concerns.',
      'Used hockey data as a way to connect sports intuition with model behavior.',
    ],
    tools: ['Sports analytics', 'Classification', 'Feature engineering', 'Model evaluation'],
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
  {
    title: 'MLB Predicting WAR',
    dateRange: 'Sep 2025',
    shortDescription:
      'Baseball modeling project exploring which metrics help predict Wins Above Replacement.',
    description:
      'Explored which baseball metrics are most useful for predicting Wins Above Replacement. The project combined data cleaning, feature selection, and machine learning with baseball analysis.',
    details: [
      'Cleaned baseball performance data for a WAR prediction workflow.',
      'Explored feature selection as part of understanding which metrics mattered most.',
      'Used model interpretation to connect results back to baseball analysis.',
    ],
    tools: ['Feature selection', 'Regression', 'Data cleaning', 'Model interpretation'],
  },
  {
    title: 'Linear Regression Model',
    dateRange: 'Jun 2025',
    shortDescription:
      'Linear regression implemented from scratch with gradient descent.',
    description:
      'Implemented linear regression from scratch in Python using gradient descent. Used a simple study-time dataset to train the model and visualize the best-fit line.',
    details: [
      'Implemented linear regression directly rather than relying on a high-level model API.',
      'Used gradient descent to fit a simple study-time dataset.',
      'Visualized the fitted line to make the optimization behavior easier to understand.',
    ],
    tools: ['Python', 'Gradient descent', 'NumPy', 'Data visualization'],
  },
  {
    title: 'Data Science Job Salaries Analysis',
    dateRange: 'Nov 2024 - Dec 2024',
    shortDescription:
      'Graph-based analysis of job titles, locations, and salaries in data science.',
    description:
      'Analyzed relationships between job titles, company locations, and salaries in the data science job market. Used graph-based analysis and salary comparisons to study role and location patterns.',
    details: [
      'Studied relationships between job titles, company locations, and salaries.',
      'Used graph-based methods to compare roles and location patterns.',
      'Explored similarity and centrality measures as part of the analysis.',
    ],
    tools: ['Rust', 'Graph algorithms', 'Jaccard similarity', 'Centrality analysis'],
  },
  {
    title: 'Predicting English Premier League Winner',
    dateRange: 'Nov 2023 - Dec 2023',
    shortDescription:
      'Machine learning project predicting the 2023-2024 Premier League winner.',
    description:
      'Built a machine learning project to predict the 2023-2024 English Premier League winner. Used match statistics, feature engineering, and model evaluation to connect data science with football analysis.',
    details: [
      'Used match statistics to build a prediction workflow for the Premier League.',
      'Applied feature engineering and model evaluation to compare prediction behavior.',
      'Used SHAP concepts to connect model outputs back to football analysis.',
    ],
    tools: ['Python', 'Random forest', 'Feature engineering', 'SHAP'],
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
