import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";


export const NAME = "Lokesh Singh 👋"
export const DESCRIPTION = "I enjoy turning ideas into real applications using React, Next.js, and Node.js — from AI platforms to real-time apps used by people around the world."



export const NAV_LINKS = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },


];



export const PROJECTS = [
  {
    title: "1BeatClub",
    src: "/projects/1beatclub/img1.png",
    href: "https://1beatclub.in",
    description:
      "1BeatClub is a real-time music collaboration platform that lets users create clubs, add songs, and vote together to decide what plays next — making group listening fun and interactive. Built with WebSockets for instant sync and an optimized global state system, it ensures seamless live updates across all members.",
    tech: [
      {
        name: "React",
        icon: "/icons/react.svg",
        width: 66,
      },
      {
        name: "Next.js",
        icon: "/icons/next-js.svg",
        width: 68,
      },
      {
        name: "Tailwind",
        icon: "/icons/tailwind.svg",
        width: 76,
      },
    ],
  },
  {
    title: "Urlbit",
    src: "/projects/urlbit/img4.png",
    href: "https://urlbit.space",
    description:
      "Urlbit is a fast, secure, and user-friendly URL shortener designed to help users create, manage, and track shortened links effortlessly. Built with a focus on performance and simplicity, it provides analytics for every shortened link — including total clicks and timestamps.",
    tech: [
      {
        name: "Next.js",
        icon: "/icons/next-js.svg",
        width: 68,
      },
      {
        name: "Golang",
        icon: "/icons/golang-1.svg",
        width: 70,
      },
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        width: 96,
      },
    ],
  },


];

export const EXPERIENCE = [
  {
    companyName: "PharmaEdge",
    companyLogoPath: "/experience/pharmaedge.jpeg",
    designation: "Frontend/Design  Engineer",
    jobType: "Full Time",
    jobLocation: "Remote",
    period: "Mar 2026 – Present",
    expPoints: [
      "Replaced the bootstrap styling of the existing application with Tailwind CSS, improving maintainability and reducing CSS file size by 40%.",
      "Implementing state management using Zustand and Context API for complex workflows.",
      "Building System Architectures and collaborating closely with backend engineers.",
    ],
    tech: [
      {
        name: "Next.js",
        icon: "/icons/next-js.svg",
        width: 68,
      },
       {
        name:"React",
        icon: "/icons/react.svg",
        width: 66,
      },
      {
        name: "Tailwind",
        icon: "/icons/tailwind.svg",
        width: 78,
      },
      {
        name:"Claude",
        icon: "/icons/claude.svg",
        width: 74
      }
    ],
  },
   {
    companyName: "HCL Technologies",
    companyLogoPath: "/experience/hcltech.svg",
    designation: "Full Stack Engineer",
    jobType: "Full Time",
    jobLocation: "Noida, India",
    period: "Sep 2021 - Mar 2026",
    expPoints: [
      "Improved SEO performance by 25% and increased organic traffic by 18% by implementing Next.js SSR and optimizing Core Web Vitals.",
      "Enhanced application performance by implementing data caching with TanStack Query, reducing latency for repeated requests.",
      "Collaborated with cross-functional teams in Agile development cycles to deliver production-ready features aligned with client requirements.",
      "Developed RESTful APIs using Node.js (Express.js) with PostgreSQL and Prisma ORM."
    ],
    tech: [
      {
        name: "Next",
        icon: "/icons/next-js.svg",
        width: 62,
      },
      {
        name:"React",
        icon: "/icons/react.svg",
        width: 66,
      },
      {
        name: "Tailwind",
        icon: "/icons/tailwind.svg",
        width: 78,
      },
      {
        name: "Node.js",
        icon: "/icons/nodejs-icon.svg",
        width: 72,
      },
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        width: 96,
      },
    ],
  },
  
];

export const ABOUT_IMAGES = [
  "/about/about1.jpg",
  "/about/about2.jpg",
  "/about/about3.jpg",
  "/about/about4.jpg",
  "/about/about5.jpg",
  "/about/about6.jpg",
  "/about/about7.jpg",
];

export const BLOGS: {
  title: string;
  description: string;
  link: string;
  published_at: string;
}[] = [];

export const ACHIVEMENTSTIMELINE = [
  {
    year: "2026",
    achivements: [
      {
        title: "Joined PharmaEdge",
        description:
          "Joined PharmaEdge as a Frontend Engineer, leading UI modernisation and building complex workflows with Next.js and Zustand.",
      },
    ],
  },
  {
    year: "2025",
    achivements: [
      {
        title: "Hello Pet Dreams — #5 on Product Hunt",
        description:
          "Launched Hello Pet Dreams, an AI pet portrait generator that achieved #5 Product of the Day with 300+ users.",
      },
      {
        title: "1BeatClub V2",
        description:
          "Rebuilt 1BeatClub from scratch with a cleaner UI and real-time WebSocket architecture, reaching #10 Product of the Day with 150+ users.",
      },
      {
        title: "Built Urlbit",
        description:
          "Developed Urlbit, a full-stack URL shortener with a Go backend, click analytics, and rate limiting.",
      },
      {
        title: "Graduated from BITS Pilani",
        description:
          "Completed a Bachelor of Science in Computer Science from BITS Pilani.",
      },
    ],
  },
  {
    year: "2024",
    achivements: [
      {
        title: "1BeatClub V1 — #10 on Product Hunt",
        description:
          "Launched 1BeatClub, a real-time music collaboration platform for group listening, reaching #10 Product of the Day on Product Hunt.",
      },
      {
        title: "Launched ContriCreator",
        description:
          "Shipped ContriCreator, an AI platform for content creators integrating GPT and Gemini APIs for thumbnail generation and content insights.",
      },
    ],
  },
  {
    year: "2021",
    achivements: [
      {
        title: "Joined HCL Technologies",
        description:
          "Started as a Full-Stack Engineer at HCL Technologies, working on Next.js, Node.js, and PostgreSQL projects for global clients.",
      },
    ],
  },
];


export const TESTIMONIALS = [
  {
    content: "Lokesh successfully developed our product website and console application. Throughout this period, he demonstrated strong ownership, sincerity, and a genuine willingness to learn and contribute.",
    name: "Shiva Verma",
    designation: "Founder, Tailor Talk",
    avatarPath: "/testimonial/shiva.webp"
  },
  {
    content: "Working with Lokesh was a good experience. Was impressed by the designs and website that he created for us. I just brought my ideas and he handled the rest. Nice work!!!",
    name: "Gagandeep Goyal",
    designation: "CTO, GDInvest",
    avatarPath: "/testimonial/gagan.jpg"
  },
  {
    content: "Lokesh has developed a website for my online agency and exceeded all expectations. He demonstrated remarkable professionalism, technical proficiency, and exemplary communication skills.",
    name: "Aleksandrs",
    designation: "Founder, Webta",
    avatarPath: "/testimonial/alek.jpg"
  },
  {
    content: "Thanks to Lokesh, our investment consultancy now has a sleek and professional website that perfectly captures our services. He exceeded our expectations with their expertise and attention to detail.",
    name: "Akash Garg",
    designation: "Founder, Anupaat Nivesh",
    avatarPath: "/testimonial/akash.webp"
  },
  {
    content: "As a Frontend Engineer at HuellasLabs, Lokesh consistently delivered high-quality, client-focused solutions. His ability to quickly adapt to project requirements and build seamless user interfaces made him a valuable contributor.",
    name: "Jaydeep Kumar",
    designation: "Co-Founder, Huellas Labs",
    avatarPath: "/testimonial/jaydeep.jpg"
  }
];


export const SOCIALS = [
  {
    name: "X",
    href: "https://x.com/ShipItLokesh",
    icon: IconBrandX

  },
  {
    name: "Github",
    href: "https://github.com/LokeshXs",
    icon: IconBrandGithub

  },
  {
    name: "Linked in",
    href: "https://www.linkedin.com/in/lokeshsingh1129/",
    icon: IconBrandLinkedin

  },
]

export const GITHUB_USERNAME = "LokeshXs"

export const GITHUB_SHOWCASE_REPOS = [
  "url-shortener",
  "Minimal-Portfolio-Template",
  "1BeatClub-V2.0",
  "FilmStash"
]