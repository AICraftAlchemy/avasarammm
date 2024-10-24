export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Remote';
  experience: number;
  salary: number;
  description: string;
  requirements: string[];
  skills: string[];
  industry: string;
  education: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  shift: 'Day' | 'Night' | 'Flexible';
  contract: 'Permanent' | 'Contract' | 'Internship';
  languages: string[];
  postedDate: string;
  logo: string;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp India',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: 5,
    salary: 2500000,
    description: 'We are seeking an experienced Frontend Developer to join our dynamic team. You will be responsible for building responsive web applications, implementing user interfaces, and collaborating with cross-functional teams.',
    requirements: [
      'Strong experience with React and TypeScript',
      'Experience with state management libraries (Redux, MobX)',
      'Understanding of modern web technologies and best practices',
      'Experience with responsive design and cross-browser compatibility',
      'Strong problem-solving skills and attention to detail'
    ],
    skills: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'REST APIs'],
    industry: 'IT',
    education: "Bachelor's Degree",
    workMode: 'Hybrid',
    shift: 'Flexible',
    contract: 'Permanent',
    languages: ['English', 'Hindi'],
    postedDate: '2024-03-10',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'InnovateX Solutions',
    location: 'Bangalore',
    type: 'Full-time',
    experience: 3,
    salary: 1800000,
    description: 'Join our growing team as a Full Stack Developer. Work on exciting projects using modern technologies and help build scalable applications.',
    requirements: [
      'Experience with MERN stack',
      'Knowledge of database design and optimization',
      'Understanding of cloud services (AWS/Azure)',
      'Experience with version control systems'
    ],
    skills: ['Node.js', 'React', 'MongoDB', 'Express', 'AWS'],
    industry: 'IT',
    education: "Bachelor's Degree",
    workMode: 'Remote',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English'],
    postedDate: '2024-03-12',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Mumbai',
    type: 'Full-time',
    experience: 2,
    salary: 1200000,
    description: 'Create beautiful and intuitive user interfaces for web and mobile applications. Work closely with developers to implement your designs.',
    requirements: [
      'Proficiency in design tools (Figma, Adobe XD)',
      'Understanding of user-centered design principles',
      'Experience with design systems',
      'Portfolio showcasing previous work'
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    industry: 'Design',
    education: "Bachelor's Degree",
    workMode: 'Hybrid',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English', 'Hindi'],
    postedDate: '2024-03-13',
    logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Pune',
    type: 'Full-time',
    experience: 4,
    salary: 2200000,
    description: 'Looking for a DevOps Engineer to help automate our deployment processes and maintain cloud infrastructure.',
    requirements: [
      'Experience with CI/CD pipelines',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Experience with cloud platforms (AWS/Azure)',
      'Understanding of infrastructure as code'
    ],
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
    industry: 'IT',
    education: "Bachelor's Degree",
    workMode: 'Remote',
    shift: 'Flexible',
    contract: 'Permanent',
    languages: ['English'],
    postedDate: '2024-03-14',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Bangalore',
    type: 'Full-time',
    experience: 6,
    salary: 2800000,
    description: 'Lead product development initiatives and work with cross-functional teams to deliver successful products.',
    requirements: [
      'Experience in product management',
      'Strong analytical and problem-solving skills',
      'Excellent communication abilities',
      'Experience with agile methodologies'
    ],
    skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Stories'],
    industry: 'Product Management',
    education: "Master's Degree",
    workMode: 'Hybrid',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English', 'Hindi'],
    postedDate: '2024-03-15',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'DataMinds Analytics',
    location: 'Chennai',
    type: 'Full-time',
    experience: 3,
    salary: 1900000,
    description: 'Join our data science team to work on machine learning projects and data analysis.',
    requirements: [
      'Strong background in statistics and mathematics',
      'Experience with machine learning algorithms',
      'Proficiency in Python and data science libraries',
      'Experience with big data technologies'
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Pandas'],
    industry: 'Data Science',
    education: "Master's Degree",
    workMode: 'Hybrid',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English', 'Tamil'],
    postedDate: '2024-03-16',
    logo: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '7',
    title: 'Mobile App Developer',
    company: 'AppWorks Technologies',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: 4,
    salary: 2000000,
    description: 'Develop native mobile applications for iOS and Android platforms.',
    requirements: [
      'Experience with React Native or Flutter',
      'Knowledge of mobile app architecture',
      'Experience with app deployment',
      'Understanding of mobile UI/UX principles'
    ],
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    industry: 'Mobile Development',
    education: "Bachelor's Degree",
    workMode: 'Remote',
    shift: 'Flexible',
    contract: 'Permanent',
    languages: ['English', 'Telugu'],
    postedDate: '2024-03-17',
    logo: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '8',
    title: 'Backend Developer',
    company: 'ServerTech Solutions',
    location: 'Delhi',
    type: 'Full-time',
    experience: 3,
    salary: 1700000,
    description: 'Build and maintain server-side applications and APIs using Node.js and Python.',
    requirements: [
      'Experience with Node.js and Python',
      'Knowledge of database systems',
      'Experience with RESTful APIs',
      'Understanding of security best practices'
    ],
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis'],
    industry: 'IT',
    education: "Bachelor's Degree",
    workMode: 'Hybrid',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English', 'Hindi'],
    postedDate: '2024-03-18',
    logo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '9',
    title: 'QA Engineer',
    company: 'QualityFirst Tech',
    location: 'Pune',
    type: 'Full-time',
    experience: 2,
    salary: 1200000,
    description: 'Ensure software quality through manual and automated testing processes.',
    requirements: [
      'Experience with test automation',
      'Knowledge of testing frameworks',
      'Experience with bug tracking tools',
      'Understanding of agile methodologies'
    ],
    skills: ['Selenium', 'Jest', 'Cypress', 'JIRA', 'TestNG'],
    industry: 'QA',
    education: "Bachelor's Degree",
    workMode: 'Hybrid',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English', 'Marathi'],
    postedDate: '2024-03-19',
    logo: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '10',
    title: 'Technical Project Manager',
    company: 'ProjectPro Solutions',
    location: 'Bangalore',
    type: 'Full-time',
    experience: 7,
    salary: 3000000,
    description: 'Lead technical projects and manage development teams to deliver successful outcomes.',
    requirements: [
      'Experience in project management',
      'Technical background in software development',
      'Strong leadership skills',
      'Experience with project management tools'
    ],
    skills: ['Agile', 'JIRA', 'Scrum', 'Risk Management', 'Team Leadership'],
    industry: 'IT',
    education: "Master's Degree",
    workMode: 'Hybrid',
    shift: 'Day',
    contract: 'Permanent',
    languages: ['English', 'Hindi', 'Kannada'],
    postedDate: '2024-03-20',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=100&h=100'
  }
];

export const jobRoles = ['Developer', 'Designer', 'Product Manager', 'Data Scientist', 'DevOps Engineer', 'QA Engineer', 'Project Manager'];
export const industries = ['IT', 'Design', 'Product Management', 'Data Science', 'Mobile Development', 'QA'];
export const educationLevels = ['High School', "Bachelor's Degree", "Master's", 'Ph.D.'];
export const languages = ['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Marathi'];