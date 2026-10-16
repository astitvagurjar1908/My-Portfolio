// All content below is sourced directly from Astitva's resume.
// Update this single file to update the entire site.

export const profile = {
  name: 'Astitva Singh Gurjar',
  title: 'Software Engineer',
  tagline: 'Backend engineer building low-latency systems that hold up under real traffic.',
  email: 'astitvagurjar2000@gmail.com',
  phone: '+91 96176 38439',
  location: 'Noida, India',
  linkedin: 'https://linkedin.com/', // placeholder — resume lists "LinkedIn" without a URL
  github: 'https://github.com/', // placeholder — not provided in resume
  resumeFile: '/Astitva-Singh-Gurjar-Resume.pdf',
  summary:
    "Software Engineer with experience shipping production microservices in Java and Spring Boot that stand up to real load — from a 100K-query-a-day Elasticsearch search layer to PCI-DSS-compliant payment services processing 700+ transactions per second. Comfortable across the stack, but most at home in backend systems: REST API design, caching strategy, and the observability work that keeps services at 99.99% uptime.",
};

export const quickStats = [
  { label: 'Years of experience', value: 4, suffix: '+' },
  { label: 'Peak throughput', value: 700, suffix: '+', unit: 'txn/s' },
  { label: 'REST APIs shipped', value: 100, suffix: '+' },
  { label: 'Uptime maintained', value: 99.99, suffix: '%' },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'To The New',
    role: 'Software Engineer',
    duration: 'Sep 2022 — Present',
    location: 'Noida, India',
    tech: [
      'Java',
      'Spring Boot',
      'Elasticsearch',
      'Redis',
      'Kafka',
      'RabbitMQ',
      'AWS',
      'New Relic',
      'Grafana',
      'JUnit',
      'Mockito',
    ],
    bullets: [
      'Increased search speed by 40% by developing a real-time data synchronization microservice for Elasticsearch, supporting 100K+ queries/day with multi-keyword search and autocomplete dropdowns.',
      'Secured 700+ transactions per second by engineering the BoxUpgrade and Recharge microservices with end-to-end data encryption, ensuring 100% PCI-DSS compliance and sub-200ms response times.',
      'Reduced CMS page load time by 20% by redesigning pages with Spring MVC, HTML/CSS, and JavaScript, improving the front-end experience for 500K+ monthly users.',
      'Reduced database load by 50% and accelerated response times by 35% by integrating Redis Cache into the CSL system, streamlining real-time access to 1M+ records.',
      'Delivered 100+ scalable REST APIs in Java and Spring Boot, maintaining sub-100ms response times under 10K concurrent requests.',
      'Achieved 95% unit test coverage with JUnit and Mockito, cutting production bugs by over 80% and raising deployment confidence across 3+ critical services.',
      'Boosted Elasticsearch performance by 40% through real-time data synchronization, enabling multi-keyword search across 5M+ documents with instant results.',
      'Protected sensitive data across 2 payment services with advanced encryption, maintaining zero security breaches and 100% financial audit compliance.',
      'Scaled infrastructure to handle 2x traffic growth by designing low-latency REST APIs and optimizing microservices to support 15K+ concurrent users.',
      'Enabled 24/7 system observability by integrating real-time monitoring with New Relic and Grafana, cutting incident resolution time by 60% and raising uptime to 99.99%.',
      'Improved microservice resilience across 50+ production deployments, reducing failure rates by 70% through code optimization and service orchestration.',
      'Accelerated API response times by 30% and doubled throughput through performance tuning, directly improving experience for 250K+ daily active users.',
    ],
  },
  {
    company: 'Simform Solutions',
    role: 'Internship Trainee',
    duration: 'Dec 2021 — May 2022',
    location: 'Ahmedabad, India',
    tech: ['React.js', 'Redux', 'JavaScript'],
    bullets: [
      'Enhanced UI responsiveness by 35% by contributing to the development and maintenance of React.js web applications.',
      'Elevated performance and data consistency by 40% by implementing Redux for efficient state management, reducing state-related bugs by 60% across multiple components.',
    ],
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  { category: 'Programming Languages', skills: ['Java', 'JavaScript', 'HTML/CSS'] },
  { category: 'Frameworks & Libraries', skills: ['Spring Boot', 'Spring MVC', 'React.js', 'Hibernate', 'Redux'] },
  { category: 'Databases', skills: ['MySQL', 'MongoDB'] },
  { category: 'Search & Caching', skills: ['Elasticsearch', 'Redis', 'Hazelcast'] },
  { category: 'Message Brokers', skills: ['RabbitMQ', 'Kafka'] },
  { category: 'Cloud & DevOps', skills: ['AWS Lambda', 'S3', 'Jenkins', 'Git'] },
  { category: 'Testing & Quality', skills: ['JUnit', 'Mockito', 'SonarQube', 'New Relic'] },
  { category: 'Methodologies', skills: ['Agile', 'Scrum', 'JIRA'] },
];

export type Project = {
  title: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  contribution: string;
  outcome: string;
  githubUrl?: string;
  demoUrl?: string;
};

// Derived directly from real production work described in the "To The New" role.
// Framed as professional/work projects since the resume does not list separate
// personal side-projects — nothing here is invented beyond rewording.
export const projects: Project[] = [
  {
    title: 'Real-Time Search Sync for Elasticsearch',
    problem:
      'Search results were lagging behind source data, and keyword matching could not keep up with 100K+ daily queries across a growing document set.',
    solution:
      'Built a real-time data synchronization microservice feeding Elasticsearch, with multi-keyword search and autocomplete dropdowns layered on top.',
    features: [
      'Real-time index synchronization',
      'Multi-keyword search',
      'Autocomplete dropdowns',
      'Scaled to 5M+ documents',
    ],
    tech: ['Java', 'Spring Boot', 'Elasticsearch'],
    contribution: 'Designed and implemented the sync microservice end-to-end, including the indexing pipeline and search API.',
    outcome: 'Search speed improved by 40%, supporting 100K+ queries per day with instant multi-keyword results.',
  },
  {
    title: 'BoxUpgrade & Recharge Payment Microservices',
    problem:
      'Payment flows needed to handle high transaction volume while meeting strict compliance and encryption requirements.',
    solution:
      'Engineered dedicated BoxUpgrade and Recharge microservices with end-to-end data encryption and hardened response paths.',
    features: [
      'End-to-end data encryption',
      '100% PCI-DSS compliance',
      'Sub-200ms response times',
      'Zero security breaches across audits',
    ],
    tech: ['Java', 'Spring Boot', 'Encryption/Security'],
    contribution: 'Built the microservices and their security layer, and validated them against PCI-DSS requirements.',
    outcome: 'Sustained 700+ transactions per second at sub-200ms latency with a clean security audit record.',
  },
  {
    title: 'CSL System Caching Layer',
    problem:
      'The CSL system was hitting database bottlenecks under load, slowing down access to a growing record set.',
    solution:
      'Integrated a Redis caching layer in front of the database to serve hot data without round-tripping to the database.',
    features: [
      'Redis-backed caching',
      'Cache invalidation strategy',
      'Real-time access to 1M+ records',
    ],
    tech: ['Redis', 'Java', 'Spring Boot'],
    contribution: 'Owned the Redis integration, including cache key design and invalidation logic.',
    outcome: 'Cut database load by 50% and improved response times by 35%.',
  },
  {
    title: 'Observability Rollout with New Relic & Grafana',
    problem:
      'Production incidents were taking too long to detect and diagnose across a growing set of microservices.',
    solution:
      'Integrated real-time monitoring and dashboards using New Relic and Grafana across critical services.',
    features: [
      '24/7 system observability',
      'Custom dashboards and alerts',
      'Incident-response tooling',
    ],
    tech: ['New Relic', 'Grafana'],
    contribution: 'Rolled out monitoring integration and built the dashboards used for incident response.',
    outcome: 'Cut incident resolution time by 60% and raised system uptime to 99.99%.',
  },
];

export type EducationEntry = {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    institution: 'Oriental Institute of Science & Technology',
    degree: 'Bachelor of Technology, Computer Science and Engineering',
    duration: 'Jul 2018 — Jun 2022',
    location: 'Bhopal, India',
    detail: 'CGPA: 7.12',
  },
];

// Resume lists no certifications — section is intentionally left empty
// rather than inventing any.
export const certifications: { name: string; issuer: string; date?: string }[] = [];
