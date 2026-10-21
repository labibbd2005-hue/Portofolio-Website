/* ==========================================================
   EDIT YOUR CONTENT HERE. This is the only file you need to
   change for routine updates.
   Strings use quotes "like this". Keep the commas between items.
   Leave a link as "" if you do not have one yet; it shows as
   "not added yet" instead of a broken link.
   ========================================================== */

const SITE = {

  /* ---- ABOUT: one string per paragraph ---- */
  about: [
    "I am an undergraduate EEE student at Chittagong Independent University. I am early in my degree and building my foundation through coursework, online learning and small projects.",
    "My current focus is circuit fundamentals, MATLAB and Simulink, and programming in C and Python. My goal is to move from theory to practical work with electronics, embedded systems, robotics and automation."
  ],

  /* ---- EDUCATION: change "status" when your situation changes ---- */
  education: [
    { label: "University", value: "Chittagong Independent University (CIU), Bangladesh" },
    { label: "School", value: "School of Science and Engineering (SSE)" },
    { label: "Degree", value: "Bachelor of Science in Electrical & Electronic Engineering" },
    { label: "Status", value: "Undergraduate student" }
  ],

  /* ---- SKILLS ----
     level must be one of: "Learning", "Beginner", "Developing"   */
  skills: [
    { category: "Programming", name: "C", level: "Developing", note: "Through coursework and practice" },
    { category: "Programming", name: "Python", level: "Developing", note: "Independent practice" },
    { category: "Programming", name: "HTML / CSS / JavaScript", level: "Beginner", note: "Used to build this site and the calculator" },
    { category: "Engineering software", name: "MATLAB", level: "Beginner", note: "MATLAB Onramp completed" },
    { category: "Engineering software", name: "Simulink", level: "Learning", note: "Simulink Onramp in progress" },
    { category: "Electronics fundamentals", name: "Circuit analysis", level: "Learning", note: "Through university coursework" },
    { category: "Electronics fundamentals", name: "Basic electronics", level: "Learning", note: "Through university coursework" },
    { category: "Tools", name: "Git & GitHub", level: "Beginner", note: "" },
    { category: "Tools", name: "VS Code", level: "Beginner", note: "" }
  ],

  /* ---- PROJECTS ----
     status must be: "Planned", "In Progress" or "Completed".
     Only use "Completed" once it truly is.
     image: "" for none, or a path like "assets/projects/my-shot.png" */
  projects: [
    {
      title: "EEE Engineering Calculator",
      status: "In Progress",
      description: "A web-based calculator for common electrical and electronic engineering calculations, aimed at EEE students.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "",
      imageAlt: "",
      github: "",
      demo: ""
    }
  ],

  /* ---- LEARNING JOURNEY ----
     status: "Completed", "In progress" or "Developing"
     link: certificate or course URL, or "" for none        */
  journey: [
    { title: "MATLAB Onramp", status: "Completed", detail: "Introductory MATLAB course.", link: "" },
    { title: "Simulink Onramp", status: "In progress", detail: "Building Simulink fundamentals.", link: "" },
    { title: "C programming", status: "Developing", detail: "Coursework and practice.", link: "" },
    { title: "Python", status: "Developing", detail: "Independent practice.", link: "" },
    { title: "Circuit analysis and electronics", status: "Developing", detail: "University coursework.", link: "" }
  ],

  /* ---- FUTURE INTERESTS ---- */
  interests: [
    "Robotics and automation",
    "Embedded systems",
    "Electronics and circuit design",
    "MATLAB / Simulink simulation",
    "Practical engineering projects"
  ],

  /* ---- CONTACT: paste full URLs. Email: just the address. ---- */
  contact: {
    email: "",
    linkedin: "",
    github: ""
  }
};
