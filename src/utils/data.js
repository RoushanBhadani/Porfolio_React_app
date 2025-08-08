export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/front-end.png",
    skills: [
      { skill: "React.js", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React Native", percentage: "70%" },
      { skill: "Typescript", percentage: "80%" },
      { skill: "CSS3", percentage: "90%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend.png",
    skills: [
      { skill: "Node.js", percentage: "80%" },
      { skill: "Java", percentage: "65%" },
    ],
  },
  {
    title: "Framework",
    icon: "./assets/images/screwdriver.png",
    skills: [
      { skill: "Prime React", percentage: "75%" },
      { skill: "React Native Paper", percentage: "70%" },
      { skill: "Prime Flex", percentage: "80%" },
      { skill: "Bootstrap (CSS)", percentage: "80%" },
      { skill: "Tailwind (CSS)", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/screwdriver.png",
    skills: [
      { skill: "Git & GitHub", percentage: "80%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/creative.png",
    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Developer at Webpristine Technologies",
    date: "January 2025 - Present",
    responsibility: [
      "Worked as part of a team delivering scalable UI components for the UK-based application Click and Send.",
      "Working on TechHut Academy's web and mobile platforms to enhance user experience and performance.",
      "Building and maintaining responsive UIs using React.js, React Native, PrimeReact, Bootstrap, and PrimeFlex.",
      "Managing application state effectively using Redux Toolkit and Recoil.",
      "Handling asynchronous API requests using Axios and `useMutation` for robust data handling.",
      "Optimizing builds and development workflow using Webpack.",
      "Integrating component libraries like React Native Paper to deliver clean and consistent design across mobile apps.",
    ],
  },
  {
    title: "Fullstack Java + ReactJS Training at DUCAT IT",
    date: "July 2024 - January 2025",
    responsibility: [
      "Developed responsive web applications using React.js, Redux, HTML5, CSS3, and JavaScript.",
      "Built reusable UI components and managed state effectively using Redux.",
      "Integrated frontend with backend services using RESTful APIs.",
      "Designed and implemented backend logic using Java, JSP, and Servlets.",
      "Worked with Hibernate for efficient database interaction and ORM mapping.",
      "Followed MVC architecture to structure and organize the application effectively.",
      "Gained hands-on experience in full-stack development by building end-to-end projects.",
    ],
  },
];

export const projectData = [
  {
    id: 1,
    title: "API Market Place",
    subtitle: "React JS + Redux Toolkit + Prime React + Prime Flex + Node JS",
    image: "./assets/images/workinprogress.jpg",
    company: false,
    level: "Advanced",
    currentlyWorking: true,
    link: "",
    description:
      "A full-stack API Market Place for students to buy and practice APIs with guided docs. Built with React, Redux Toolkit, PrimeReact, and Node.js, handling both frontend and backend with auth, API access, and purchase tracking.",
  },
  {
    id: 2,
    title: "Lead Management System",
    subtitle: "React JS + Typescript + Redux Toolkit + Prime React + Prime Flex + Node JS",
    image: "./assets/images/workinprogress.jpg",
    company: true,
    level: "Intermediate",
    currentlyWorking: true,
    link: "",
    description:
      "A full-stack API Market Place for students to buy and practice APIs with guided docs. Built with React, Redux Toolkit, PrimeReact, and Node.js, handling both frontend and backend with auth, API access, and purchase tracking.",
  },
  {
    id: 3,
    title: "Click and Send",
    subtitle: "Next JS + Redux + MaterialUI",
    image: "./assets/images/clickandsend.jpeg",
    company: true,
    level: "Advanced",
    currentlyWorking: false,
    link: "https://www.clicknsend.co.uk/",
    description:
      "Developed a delivery job platform with real-time driver matching, job posting, and tracking. Integrated secure authentication, REST APIs, and a responsive Material UI design.",
  },
  {
    id: 4,
    title: "Techhut Academy",
    subtitle: "React JS + Bootstrap + Redux",
    image: "./assets/images/Techhut.jpeg",
    company: true,
    level: "Intermediate",
    currentlyWorking: false,
    link: "https://www.techhutacademy.com/",
    description:
      "Built an educational platform for course browsing and enrollment with Redux state management. Integrated backend APIs for dynamic course and user data.",
  },
  {
    id: 5,
    title: "Techhut Student",
    subtitle: "React Native + Recoil + React Native Paper",
    image: "./assets/images/TechhutStudent.jpeg",
    company: true,
    level: "Advanced",
    currentlyWorking: false,
    link: "https://portal.techhutacademy.com/",
    description:
      "Created a mobile student portal for course access, mentor interaction, and exams. Integrated APIs for real-time data syncing, managed state with Recoil, and styled with React Native Paper.",
  },
  // {
  //   id: 6,
  //   title: "Replica Weapon Store",
  //   subtitle: "React JS + Redux + Bootstrap + NodeJs",
  //   image: "./assets/images/replicaweaponsestore.jpeg",
  //   company: false,
  //   level: "Intermediate",
  //   currentlyWorking: false,
  //   link: "https://replicaweaponstore.vercel.app/",
  //   description:
  //     "Developed an e-commerce store for replica weapons with product catalog, cart, and checkout flow. Integrated Node.js APIs and managed state using Redux.",
  // },
  {
    id: 7,
    title: "Movieland",
    subtitle: "React JS + API integration",
    image: "./assets/images/movieland.jpeg",
    company: false,
    level: "Basic",
    currentlyWorking: false,
    link: "https://movieland-six-omega.vercel.app/",
    description:
      "Built a movie search application using the OMDb API. Integrated API calls for fetching movie data and implemented dynamic search with responsive design.",
  },
  {
    id: 8,
    title: "TIC TAC TOE",
    subtitle: "React JS",
    image: "./assets/images/tictactoe.jpeg",
    company: false,
    level: "Basic",
    currentlyWorking: false,
    link: "https://tic-tac-toe-game-nine-gray.vercel.app/",
    description:
      "Created an interactive Tic Tac Toe game with win detection and game reset functionality. Designed a clean, responsive interface in React.",
  },
];
