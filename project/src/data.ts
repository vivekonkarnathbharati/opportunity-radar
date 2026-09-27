import type { Opportunity } from './types';

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-001',
    title: 'Software Engineering Intern',
    organization: 'TechFlow Solutions',
    type: 'Internship',
    requiredSkills: ['Java', 'Data Structures', 'SQL'],
    matchScore: 92,
    description:
      'A 2-month summer internship based in Magarpatta City, Hadapsar. Interns will shadow senior developers and assist in building internal dashboard APIs.',
  },
  {
    id: 'opp-002',
    title: 'Medhavi Web3 & AI Hackathon',
    organization: 'Medhavi Skills University',
    type: 'Hackathon',
    requiredSkills: ['Python', 'JavaScript', 'Problem Solving'],
    matchScore: 85,
    description:
      'A 48-hour hybrid hackathon focusing on building practical AI and Web3 solutions for education. Great opportunity for sophomore students to build their portfolios.',
  },
  {
    id: 'opp-003',
    title: 'Introduction to Generative AI & LLMs',
    organization: 'OpenTech AI',
    type: 'Online Workshop',
    requiredSkills: ['Python Basics', 'Curiosity'],
    matchScore: 98,
    description:
      'A weekend virtual workshop covering the fundamentals of prompt engineering, integrating LLM APIs, and building your first AI chatbot.',
  },
  {
    id: 'opp-004',
    title: 'Pune React.js Meetup - Building Scalable UIs',
    organization: 'Pune JavaScript Community',
    type: 'Meetup',
    requiredSkills: ['HTML/CSS', 'JavaScript', 'React Basics'],
    matchScore: 78,
    description:
      'An in-person weekend meetup in Baner featuring tech talks from local startup founders and an open networking session for students and professionals.',
  },
  {
    id: 'opp-005',
    title: 'Open Source Contributor Mentorship',
    organization: 'Code for India',
    type: 'Mentorship',
    requiredSkills: ['Git', 'C++', 'Linux Basics'],
    matchScore: 82,
    description:
      'An online program pairing university students with open-source maintainers to help you make your first merged pull requests in major repositories.',
  },
  {
    id: 'opp-006',
    title: 'Junior Cloud Associate (Part-Time)',
    organization: 'CloudScale Inc.',
    type: 'Part-Time Job',
    requiredSkills: ['Networking Basics', 'AWS Concepts', 'Bash Scripting'],
    matchScore: 70,
    description:
      'A 10-hour/week remote role for students based in Pune to assist the infrastructure team with monitoring cloud resources and writing automated backup scripts.',
  },
];
