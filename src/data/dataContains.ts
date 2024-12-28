import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwindCss from "../assets/tailwindCss.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import exjs from "../assets/exjs.png";
import MongoDB from "../assets/MongoDB.png";
import SQL from "../assets/SQL.png";
import firebase from "../assets/firebase.png";
import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";

export const Bio = {
  name: "Mohit Singh Rawat",
  roles: ["Programmer", "and", "Full Stack Developer"],
  description:
    "I’m a dedicated tech and cybersecurity enthusiast with a passion for solving complex challenges and continuously expanding my skill set. Driven by curiosity and a commitment to innovation, I thrive in dynamic environments.",
  resume:
    "https://docs.google.com/document/d/17S15DUnOXcvhbPaXBKZ2RbjSSBkPGy9UA81kk6g_XbQ/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/mohit-singh-rawat-12680b21b/",
  insta: "https://www.instagram.com/_m._s._rawat_/",
};

export const Skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: html,
      },
      {
        name: "CSS",
        image: css,
      },
      {
        name: "BOOTSTRAP",
        image:bootstrap,
      },
      {
        name: "TAILWIND CSS",
        image: tailwindCss,
      },
      {
        name: "JS",
        image:js,
      },
      {
        name: "React JS",
        image: react,
      },
      {
        name: "Redux",
        image: redux,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image: nodejs,
      },
      {
        name: "Express.js",
        image: exjs,
      },
      {
        name: "MongoDB",
        image: MongoDB,
      },
      {
        name: "SQL",
        image: SQL,
      },

      {
        name: "Firebase",
        image: firebase,
      },
    ],
  },
];

export interface SubProject {
  name: string;
  url?: string;
}
interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills?: string[];
  highlights?: string[];
  projects:SubProject [];
  doc: string;
}

export const Experiences: Experience[] = [
  {
    id: 0,
    img: "",
    role: "Software Development Intern",
    company: "Zyper.ai Pvt Ltd.",
    date: "August 2024 - December 2024",
    desc: "Developed and maintained responsive web applications, focusing on optimizing frontend features for an engaging user experience.",
    skills: ["React.js", "Angular.js", "Redux", "HTML", "CSS"],
    projects: [
      {
        name: "Web Application",
        url: "https://zyper-ai.vercel.app",
      },
      {
        name: "Corporate Website",
        url: "https://zyper.ai",
      },
    ],
    highlights: [
      "Collaborated with cross-functional teams to launch innovative product features.",
      "Integrated APIs to fetch and display real-time data, enhancing application functionality.",
      "Integrated APIs to fetch and display real-time data, enhancing application functionality."
    ],
    doc: "https://www.google.com",
  },
];

// types.ts (or a shared types file)
export interface Project {
  id: number;
  image?: string;
  ProjectLevel:string;
  tags?: string[];
  title: string;
  date: string;
  description?: string;
  category: string;
  github?: string;
  webapp?: string;
  completed:boolean
}


export const Projects: Project[] = [
  {
    id: 0,
    title: "Social Media Application",
    date: "Dec 2024 - Present",
    ProjectLevel: "Advance with MERN Stack",
    category: "Web Application",
    description: "Social Media Application - Coming Soon ",
    completed:false,
    image:"https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?semt=ais_hybrid"
  },
  {
    id: 1,
    title: "T0-[)0",
    date: "Jan 2024",
    description:
      "“Todo List” Project is a simple and efficient task management application that allows users to create, edit, and organize their daily tasks. With an intuitive interface, users can mark tasks as completed, ensuring a streamlined and effective approach to managing their to-do lists. The project aims to increase productivity by providing a user-friendly platform to organize and track tasks as well as add personalized learning.",
    image: P1,
    ProjectLevel: "Basic with Frontend and Javascript Logic",
    tags: ["React Js", "Javascript Fundamentals"],
    category: "Web Application",
    github: "https://github.com/mohitSr1021/todo_list_react_Application",
    webapp: "https://todo-list-react-application.vercel.app/",
    completed:true,
  },
  {
    id: 2,
    title: "ecommerce.",
    date: "Apr 2024 - May 2024",
    description:
      "A full-stack ecommerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Redux Toolkit for state management. The website provides a modern and responsive user interface for browsing products, managing a shopping cart, and completing secure transactions.",
    image: P2,
    ProjectLevel: "Advance with MERN Stack",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux-toolkit"],
    category: "Web Application",
    github:
      "https://github.com/mohitSr1021/E-Commerce-Website-MERN-Stack-Application-",
    webapp: "https://mern-stack-application-seven.vercel.app/",
    completed:true,
  },
];

export const Education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKyq8k1kOEdhX2K0dV4He05lvrTEcsoiUdw&s",
    school: "Jagannath International Management School Vasant Kunj",
    date: "Dec 2020 - July 2023",
    grade: "8.81 CGPA",
    desc: "I attended Jagannath International Management School, Vasant Kunj, from December 2020 to July 2023, and earned a CGPA of 8.81. During my time there, I was exposed to a rigorous academic curriculum that emphasized both theoretical knowledge and practical application. The school's experienced faculty provided me with a strong foundation in various subjects, and I was able to develop valuable skills that have prepared me for further studies and my professional career.",
    degree: "BCA - Bachelor of Computer Applications",
  },
  // {
  //   id: 1,
  //   img: "/public/school.png",
  //   school: "",
  //   date: "March 2020",
  //   percentage: "72%",
  //   desc: "I had completed my Schooling as a Commerce studies in 2020, achieving a commendable 72% average.",
  //   Stream: "Commerce with Maths",
  // },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
];
