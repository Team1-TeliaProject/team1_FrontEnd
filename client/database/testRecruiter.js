const recruiter = [
  {
    company: 'Company A',
    description: 'basic description about companyA same for all job ads',
    phone: '123456789',
    email: 'companya@email.com',
    image: 'templatea.jpg',
    vacancies: [
      {
        jobid: '1',
        location: 'Helsinki',
        type: 'Full-time',
        position: 'Web Developer',
        specialty: 'Front-end',
        seniority: 'Senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'TypeScript',
          'React',
          'Node.js',
          'Jest',
          'GitHub',
          'AWS',
          'Less',
          'Sass',
          'Microservices'
        ],
        deadline: '01/09/2021'
      },
      {
        jobid: '2',
        location: 'Tampere',
        type: 'Part-time',
        position: 'Angular Developer',
        specialty: 'Front-end',
        seniority: 'Junior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: ['Angular', 'TypeScript', 'Cypress', 'Jasmin', 'Web Components', 'Stencil'],
        deadline: '04/08/2021'
      }
    ]
  },
  {
    company: 'CompanyB',
    description: 'basic description about companyB same for all job ads',
    phone: '123456789',
    email: 'companyb@email.com',
    image: 'templateb.jpg',
    vacancies: [
      {
        jobid: '1',
        location: 'Tampere',
        type: 'Part-time',
        position: 'Angular Developer',
        specialty: 'Front-end',
        seniority: 'Junior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: ['Angular', 'TypeScript', 'Cypress', 'Jasmin', 'Web Components', 'Stencil'],
        deadline: '04/08/2021'
      },
      {
        jobid: '2',
        location: 'Helsinki',
        type: 'Full-time',
        position: 'Software Engineer',
        specialty: 'Full stack',
        seniority: 'Junior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: ['Java', 'Spring Boot', 'MySQL'],
        deadline: '04/10/2021'
      },
      {
        jobid: '3',
        location: 'Helsinki',
        type: 'Full-time',
        position: 'Web Developer',
        specialty: 'Front-end',
        seniority: 'Senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'TypeScript',
          'React',
          'Node.js',
          'Jest',
          'GitHub',
          'AWS',
          'Less',
          'Sass',
          'Microservices'
        ],
        deadline: '01/09/2021'
      },
      {
        jobid: '4',
        location: 'Turku',
        type: 'Full-time',
        position: 'Software Engineer',
        specialty: 'Backend',
        seniority: 'Mid-senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Jenkins',
          'Docker',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'PostgreSQL',
          'Firebase',
          'Rust'
        ],
        deadline: '26/06/2021'
      },
      {
        jobid: '5',
        location: 'Vantaa',
        type: 'Full-time',
        position: 'Software Developer',
        specialty: 'Full-stack',
        seniority: 'Senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Python',
          'TenserFlow',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'Docker',
          'Kubernetes'
        ],
        deadline: '06/08/2021'
      }
    ]
  },
  {
    company: 'CompanyC',
    description: 'basic description about companyC same for all job ads',
    phone: '123456789',
    email: 'companyc@email.com',
    image: 'templatec.jpg',
    vacancies: [
      {
        jobid: '1',
        location: 'Oulu',
        type: 'Part-time',
        position: 'Database Designer',
        specialty: 'Database',
        seniority: 'Junior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'TypeScript',
          'React',
          'Node.js',
          'Jest',
          'GitHub',
          'AWS',
          'Less',
          'Sass',
          'Microservices'
        ],
        deadline: '13/08/2021'
      }
    ]
  },
  {
    company: 'CompanyD',
    description: 'basic description about company D same for all job ads',
    phone: '123456789',
    email: 'companyad@email.com',
    image: 'templated.jpg',
    vacancies: [
      {
        jobid: '1',
        location: 'Tampere',
        type: 'Freelance',
        position: 'Software Engineer',
        specialty: 'Full Stack',
        seniority: 'Mid-senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Jenkins',
          'Docker',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'PostgreSQL',
          'Firebase',
          'Rust'
        ]
      },
      {
        jobid: '2',
        location: 'Vaasa',
        type: 'Part-time',
        position: 'Devops specialist',
        specialty: 'Full stack',
        seniority: 'Senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Jenkins',
          'Docker',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'PostgreSQL',
          'Firebase',
          'Rust'
        ],
        deadline: '27/07/2021'
      },
      {
        jobid: '3',
        location: 'Lapland',
        type: 'Full-time',
        position: 'Software Engineer',
        specialty: 'Front-End',
        seniority: 'Mid-senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Jenkins',
          'Docker',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'PostgreSQL',
          'Firebase',
          'Rust'
        ],
        deadline: '14/06/2021'
      },
      {
        jobid: '4',
        location: 'Jyvskyla',
        type: 'Full-time',
        position: 'Data Analyst',
        specialty: 'Data',
        seniority: 'Mid-senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Jenkins',
          'Docker',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'PostgreSQL',
          'Firebase',
          'Rust'
        ],
        deadline: '21/08/2021'
      },
      {
        jobid: '5',
        location: 'Vantaa',
        type: 'Full-time',
        position: 'Software Developer',
        specialty: 'Full-stack',
        seniority: 'Senior',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempor mauris. Fusce eu enim sed magna mollis mollis. Sed tempus ut erat id dapibus. Nullam vel tortor vitae nisl tempor semper.',
        skills: [
          'Python',
          'TenserFlow',
          'Azure',
          'AWS',
          'Node.js',
          'TypeScript',
          'Git',
          'Docker',
          'Kubernetes'
        ],
        deadline: '06/08/2021'
      }
    ]
  }

  //closing tag
];
