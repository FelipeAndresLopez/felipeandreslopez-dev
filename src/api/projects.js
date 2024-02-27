import philipsAdventure1 from '@assets/images/portfolio/development/philips-adventure/gui-1.jpg';
import philipsAdventure2 from '@assets/images/portfolio/development/philips-adventure/gui-2.jpg';
import philipsAdventure3 from '@assets/images/portfolio/development/philips-adventure/gui-3.jpg';

import philipsAdventure4 from '@assets/images/portfolio/development/philips-adventure/mision-1.jpg';
import philipsAdventure5 from '@assets/images/portfolio/development/philips-adventure/mision-4.jpg';
import philipsAdventure6 from '@assets/images/portfolio/development/philips-adventure/mision-5.jpg';

import fileManager1 from '@assets/images/portfolio/development/file-manager/fm-2.png';
import fileManager2 from '@assets/images/portfolio/development/file-manager/fm-3.png';

import cocrealab1 from '@assets/images/portfolio/development/cocrealab/cocrealab-1.png';
import cocrealab2 from '@assets/images/portfolio/development/cocrealab/cocrealab-2.png';
import cocrealab3 from '@assets/images/portfolio/development/cocrealab/cocrealab-3.png';
import cocrealab4 from '@assets/images/portfolio/development/cocrealab/cocrealab-4.png';
import cocrealab5 from '@assets/images/portfolio/development/cocrealab/cocrealab-5.png';

const projects = [
  {
    id: 1,
    name: 'Philip\'s Adventure',
    description:
      'In association with Diego Mellizo we developed a video game as a support tool for English teaching. It was installed on computers of a school in Ubaté (Cund. - Colombia).',
    specs: [
      {
        id: '1',
        name: 'Video game Engine: Unity'
      },
      {
        id: '2',
        name: 'Programming language: C#'
      },
      {
        id: '3',
        name: 'GUI: Unity Asset Store'
      }
    ],
    thumbnail: {
      image: philipsAdventure6,
      desc: 'Video '
    },
    images: [
      {
        id: '1',
        src: philipsAdventure1,
        desc: 'Philip\'s Adventure - GUI'
      },
      {
        id: '2',
        src: philipsAdventure2,
        desc: 'Philip\'s Adventure - GUI'
      },
      {
        id: '3',
        src: philipsAdventure3,
        desc: 'Philip\'s Adventure - GUI'
      },
      {
        id: '4',
        src: philipsAdventure4,
        desc: 'Philip\'s Adventure - Missions'
      },
      {
        id: '5',
        src: philipsAdventure5,
        desc: 'Philip\'s Adventure - Missions'
      },
      {
        id: '6',
        src: philipsAdventure6,
        desc: 'Philip\'s Adventure - Missions'
      }
    ]
  },
  {
    id: 2,
    name: 'Web plug-in for GDA',
    description:
      'In association with Diego Mellizo and Eforcers we developed a file manager plug-in for GDA\'s HumHub social network.',
    thumbnail: {
      image: fileManager1,
      desc: 'Preview Web plug-in for GDA'
    },
    specs: [
      {
        id: '1',
        name: 'Programming language: PHP using Yii (framework based on MVC)'
      },
      {
        id: '2',
        name: 'GUI: Bootstrap'
      },
      {
        id: '3',
        name: 'Server: Apache Tomcat'
      }
    ],
    images: [
      {
        id: '1',
        src: fileManager1,
        desc: 'File Manager - GUI'
      },
      {
        id: '2',
        src: fileManager2,
        desc: 'File Manager - GUI'
      }
    ]
  },
  {
    id: 3,
    name: 'Web application',
    description:
      'I contributed in development of a web application for visualizing Colombia\'s coverage and quality in terms of higher education.',
    thumbnail: {
      image: cocrealab1,
      desc: 'Preview Web application'
    },
    specs: [
      {
        id: '1',
        name:
          'Programming language: PHP using CodeIgniter (framework based on MVC)'
      },
      {
        id: '2',
        name: 'GUI: Materializecss'
      },
      {
        id: '3',
        name: 'Server: Apache Tomcat'
      },
      {
        id: '4',
        name: 'Database engine: MySQL'
      }
    ],
    images: [
      {
        id: '1',
        src: cocrealab1,
        desc: 'Stats'
      },
      {
        id: '2',
        src: cocrealab2,
        desc: 'Programs - CRUD'
      },
      {
        id: '3',
        src: cocrealab3,
        desc: 'Stats'
      },
      {
        id: '4',
        src: cocrealab4,
        desc: 'Coverage of higher education'
      },
      {
        id: '5',
        src: cocrealab5,
        desc: 'Admin panel'
      }
    ]
  }
];

export default projects;
