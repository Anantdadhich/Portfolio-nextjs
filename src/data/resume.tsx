import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Anant Dadhich - Developer",
  initials: "AD",
  url:"https://anant",
  location: "Bhilwara, India",
  locationLink: "https://maps.app.goo.gl/F5zdd1RkXEdX5uUY8",
  description:
    " I am Full Stack Developer. Passionate about my work ,and have eagerness to learn new skills and Current focus on Blockchains tech like Solana and etherum.",
  summary:
    "I am  developer i love to code and whenever gets bored i turns into music currently focus on blockchain technologies .",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
    "Shadcn UI",
    "JavaScript",
    "TypeScript",
    "Next JS",
    "React JS",
    "Node JS",
    "Express JS",
    "Hono JS",
     "C++",
    "Recoil",
    "Mongo DB",
    "Docker",
    "PostgreSQL",
    "Prisma ORM",
    "Git/GitHub",
    "Vite",
    "Monorepo",
    "AWS",
    "CloudFlare",
    "Stripe",
    "Turborepoes",
    "Redis",
    "WebSockets",
    "WebRTC",
    "GRPC",
    "OpenAPI",
    "Appwrite",
    "Testing",
    "Solana"
  ],
  navbar: [{ href: "/#", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "anantdadhich66@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anantdadhich",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anant-dadhich-b4aa02256/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/AnantDadhich6",
        icon: Icons.x,
        navbar: true,
      },
  
      Email: {
        name: "Send Email",
        url: "mailto:anantdadhich66@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  }
 ,


  projects: [
    {
      title: "Coursu.ai",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "An AI based Platfrom which generates the course by input the title of the course with specific youtubevideos and quiz ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Next-Auth",
        "Framer Motion",
        "NextAuth",
        "GeminiAPI"
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/Coursu.ai",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
     {
      title: "Bugpeer-finder",

      dates: "May 2024",
      active: true,
      description:
        "It is platfrom where we can create or join room and code with other dev to find bug with github repo by sharing and live video call ",
      technologies: [
        "Next.js",
        "Typescript",
        "Neontech",
        "Prisma",
        "TailwindCSS",
        "Stream.io",
        "Shadcn UI",
        "Next-Auth",
      
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/Bugfinder-paircode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:"/nvidia.png,"
    },
    {
      title: "Checkers",
      dates: "June 2024",
      active: true,
      description:
        "Checkers is an platform like chess.com where we can play the chess with real time communication. ",
      technologies: [
        "TurboRepoes",
        "React.js",
        "Typescript",
        "Docker",
        "Prisma",
        "TailwindCSS",
        "Express JS",
        "Web Sockets",
        "Shadcn UI",
        "Passport Js",
        "Node Js"
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/checkers",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
    {
      title: "Paytm Clone",
      dates: "May 2024",
      active: true,
      description:
        "Platform where we can send transactions by using database transactions and use bank webhook for on Ramp transactions ",
      technologies: [
        "TurboRepoes",
        "Next.js",
        "Typescript",
        "Docker",
        "Prisma",
        "TailwindCSS",
        "Express JS",
        "Node Js",
        "Shadcn UI",
        "Next-Auth",
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/PAYTM",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
    {
      title: "Discode",
      href: "https://discode-production.up.railway.app/",
      dates: "June 2024",
      active: true,
      description:
        "Discode is an Discord inspired platfrom where user can create servers and channels ,chat with others with real time communication and video call,live screen sharing.  ",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "Sockets.io",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "Livekit.io",
      ],
      links: [
        {
          type: "Live URL",
          href: "https://discode-production.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/discode",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
    {
      title: "Snapgram",
      href: "https://social-media-app-blue-one.vercel.app",
      dates: "March 2024",
      active: true,
      description:
        "Snapgram is a platform where we can create posts and explore the others content and edit profils and save or like the posts",
      technologies: [
        "React.js",
        "Typescript",
        "Appwrite",
        "React Query",
        "TailwindCSS",
        
        "Shadcn UI",
        
      ],
      links: [
        {
          type: "Live URL",
          href: "https://social-media-app-blue-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/snapgram",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
      {
      title: "Devtalk",
      href: "https://plinkoo-azure.vercel.app/",
      dates: "Sept 2024",
      active: true,
      description:
        "It is platform where developers connect with random dev just like omegle and share thier thoughts and ideas",
      technologies: [
        "React.js",
        "Typescript",
        "WebRTC",
         "Express.js",
        "TailwindCSS",
        
        "Aceternity UI",
        
      ],
      links: [
    
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/devtalk",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
    {
      title: "Plinkoo",
      href: "https://plinkoo-azure.vercel.app/",
      dates: "Sept 2024",
      active: true,
      description:
        "Gambling website like plinko on stake platform",
      technologies: [
        "React.js",
        "Typescript",
        "Canvas",
            "Express.js",
        "TailwindCSS",
        
        "Aceternity UI",
        
      ],
      links: [
        {
          type: "Live URL",
          href: "https://plinkoo-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/plinkoo",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },{
      title: "Boulder-pass",
      href: "https://boulder-pass-liart.vercel.app",
      dates: "July 2024",
      active: true,
      description:
        "It is platform where we can play game with our hand gestures with both hands",
      technologies: [
        "Next.js",
         "Typescript",
     "TailwindCSS",
         "Shadcn UI",
        "MediaPipe"
      ],
      links: [
        {
          type: "Live URL",
          href: "https://boulder-pass-liart.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/Boulder-pass-",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
    {
      title: "Technoverse",
      href: "https://technoverse-two.vercel.app/",
      dates: "January 2024",
      active: true,
      description:
        "  Technoverse webpage for avatars which is made up of GSAP animations  ",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "GSAP",
      
        
      ],
      links: [
        {
          type: "Live URL",
          href: "https://technoverse-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Codebase",
          href: "https://github.com/Anantdadhich/cyberfiction-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
    }
  ]
   ,work:[ {
      company: "Ready Bytes",

      badges: [],
      location: "Bhilwara",
      title: "Full Stack Development internship",
      logoUrl: "/ready-bytes-logo.png",
      start: "July 2024",
      end: "Aug 2024",
     
    }], hackathons: [
    {
      title: "Google Gen AI",
      dates: "September 20th - October 2th, 2024",
      location: "Virtual, Devfolio",
      description:
        "I participated in a hackathon and developed an AI-generated course platform that creates courses using Next.js, Gemini API, and YouTube API.",
      
      
    },  {
      title: "HackIndia",
      dates: "October 3rd -  4th, 2024",
      location: "PIET,Jaipur",
      description:
        "I participated in a hackathon and developed an NFT music marketplace using technologies like Solidity .",
      
      
    }
    
  ]
    
};
