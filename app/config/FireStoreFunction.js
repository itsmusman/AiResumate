

import {firebase} from '../config/FirebaseSetup';

 const database = firebase.firestore();

const addSkillsToFirestore = async () => {
    
  const skills = [
    {
      id: '1',
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
    },
    {
      id: '2',
      name: 'React Native',
      description: 'A framework for building mobile apps using React.',
    },
    {
      id: '3',
      name: 'Node.js',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    },
    {
      id: '4',
      name: 'Express.js',
      description: 'A fast, unopinionated, minimalist web framework for Node.js.',
    },
    {
      id: '5',
      name: 'MongoDB',
      description: 'A document-oriented NoSQL database used for high volume data storage.',
    },
    {
      id: '6',
      name: 'Firebase',
      description: 'A mobile and web application development platform.',
    },
    {
      id: '7',
      name: 'Java',
      description: 'A general-purpose programming language used to build enterprise-scale applications.',
    },
    {
      id: '8',
      name: 'Python',
      description: 'A high-level programming language used for web development, data analysis, artificial intelligence, and more.',
    },
    {
      id: '9',
      name: 'Swift',
      description: 'A powerful and intuitive programming language used to build iOS, macOS, watchOS, and tvOS apps.',
    },
    {
      id: '10',
      name: 'Kotlin',
      description: 'A statically typed programming language used to build Android apps and server-side applications.',
    },
  ];

  const skillsCollection = database().collection('skills');

  skills.forEach((skill) => {
    skillsCollection.doc(skill.id).set(skill);
  });
};

export default addSkillsToFirestore;