
// ==========================================
// PORTFOLIO DATA
// Md Fokrul Alam Labib | EEE Student
// ==========================================

const PORTFOLIO_DATA = {

  profile: {

    name: "Md Fokrul Alam Labib",

    title: "BSc EEE Student | Electronics • Robotics • Embedded Systems",

    institution: "Chittagong Independent University (CIU)",

    location: "Chittagong, Bangladesh",

    tagline:
      "Building my foundation in electrical and electronic engineering through programming, simulation, circuits, and hands-on projects.",

    about: [
      "I'm an Electrical & Electronic Engineering student at Chittagong Independent University (CIU), currently developing my technical foundation.",

      "I'm early in my journey — studying the theory, practising with simulation tools, and building small projects to turn what I learn into something that works.",

      "My interests are centred on electronics, robotics, and embedded systems. I believe in documenting what I build honestly: what worked, what failed, and what I learned from it."
    ]
  },


  // CONTACT AND PROFILE LINKS
  links: {

    email: {
      href: "mailto:your.email@example.com",
      label: "your.email@example.com"
    },

    linkedin: {
      href: "https://www.linkedin.com/",
      label: "LinkedIn Profile"
    },

    github: {
      href: "https://github.com/labibbd2005-hue",
      label: "GitHub Profile"
    }

  },


  // NAVIGATION
  nav: [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Journey",
    "Education",
    "Contact"
  ],


  // ==========================================
  // SKILLS
  // Two main categories with individual icons
  // ==========================================

  skills: [

    {

      group: "Technical Foundations",

      description: "Engineering knowledge and programming fundamentals.",

      items: [

        {
          name: "Circuit Analysis",
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/circuit-board.svg",
          type: "concept"
        },

        {
          name: "Electronics",
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/cpu.svg",
          type: "concept"
        },

        {
          name: "C Programming",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        },

        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },

        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },

        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },

        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }

      ]
    },


    {

      group: "Working Tools",

      description: "Software and platforms used for learning and development.",

      items: [

        {
          name: "MATLAB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
        },

        {
          name: "Simulink",
          icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/workflow.svg",
          type: "concept"
        },

        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },

        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },

        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },

        {
          name: "Canva",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
        }

      ]
    }

  ],


  // ==========================================
  // PROJECTS
  // ==========================================

  projects: [

    {

      title: "Scientific Calculator Web Application",

      category: "Software & Web Development",

      description:
        "A responsive scientific calculator supporting arithmetic, trigonometric functions, exponents, and memory operations. Built to strengthen JavaScript logic, DOM manipulation, and responsive UI design.",

      tags: [
        "HTML",
        "CSS",
        "JavaScript"
      ],

      demoLink:
        "https://labibbd2005-hue.github.io/eee-engineering-calculator/",

      repoLink:
        "https://github.com/labibbd2005-hue",

      isLive: true

    }

  ],


  // UPCOMING PROJECT DOMAINS
  comingSoon: [

    "Circuit Simulation",
    "MATLAB / Simulink",
    "Embedded Systems",
    "Robotics",
    "Automation"

  ],


  // ==========================================
  // LEARNING JOURNEY
  // ==========================================

  journey: [

    {
      title: "MATLAB Onramp",
      status: "Completed"
    },

    {
      title: "Simulink Onramp",
      status: "In Progress"
    },

    {
      title: "C Programming",
      status: "Developing"
    },

    {
      title: "Python",
      status: "Developing"
    },

    {
      title: "Circuit Simulation",
      status: "Exploring"
    }

  ],


  // ACTIVITIES
  activities: [

    {
      title: "MATLAB Onramp",
      note: "Certificate — completed"
    },

    {
      title: "Karate",
      note: "Purple Belt"
    },

    {
      title: "CIU Robotics Club",
      note: "Interested in"
    },

    {
      title: "IEEE & Student Technical Activities",
      note: "Exploring"
    }

  ],


  // ==========================================
  // EDUCATION
  // ==========================================

  education: {

    degree: "BSc in Electrical & Electronic Engineering",

    institution: "Chittagong Independent University (CIU)",

    status: "Currently enrolled undergraduate student",

    details:
      "Focusing on fundamental circuit theory, programming for engineering problems, simulation, and embedded hardware."

  }

};
