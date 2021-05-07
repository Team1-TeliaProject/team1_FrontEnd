export const typeOptions = [
  {
    value: 'Full-time',
    label: 'Full-time',
  },
  {
    value: 'Part-time',
    label: 'Part-time',
  },
];

const stacks = [
  'HTML',
  'CSS',
  'JavaScript',
  'UX Design',
  'UI Design',
  'TypeScript',
  'GitHub',
  'Redux',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'MariaDB',
  'PHP',
  'Python',
  'C#',
  'Java',
  'Django',
  'Heroku',
  'AWS',
  'Docker',
  'CI/CD',
  'Design Thinking',
  'MS office',
  'Power BI',
  'Project Management',
  'Content Creation',
  'Accounting',
  'Social Media',
  'Communication',
  'Leadership',
];

export const techOptions = stacks.map((item) => {
  return {
    value: item,
    label: item,
  };
});
