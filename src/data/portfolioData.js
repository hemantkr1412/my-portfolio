import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiReact,
  SiEthereum,
  SiPostgresql,
  SiMongodb,
  SiGitlab,
  SiNginx,
  SiPm2,
  SiOpenai,
} from 'react-icons/si';
import { HiOutlineCode } from 'react-icons/hi';

export const personalInfo = {
  name: "Hemant Kumar",
  title: "AI Full Stack Developer",
  email: "hemantfbzkumar@gmail.com",
  github: "https://github.com/hemantkr1412",
  linkedin: "https://www.linkedin.com/in/hemantkr1412?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  resume: "/resume.pdf"
};

export const heroData = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  title: personalInfo.title,
  description: "I build exceptional web applications with modern technologies and create seamless user experiences.",
  typewriterTexts: [
    "Full Stack Developer",
    "React.js Expert",
    "Python Developer",
    "AI Enthusiast",
    "Web3 Developer"
  ]
};

export const skillsData = {
  languages: [
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" }
  ],
  frontend: [
    { name: "React.js", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
    { name: "Django", icon: SiDjango, color: "text-green-700" },
    { name: "FastAPI", icon: SiFastapi, color: "text-teal-600" },
    { name: "Flask", icon: SiFlask, color: "text-gray-800 dark:text-gray-200" }
  ],
  mobile: [
    { name: "React Native", icon: SiReact, color: "text-cyan-400" }
  ],
  web3: [
    { name: "EVM", icon: SiEthereum, color: "text-purple-600" },
    { name: "Web3 Wallet", icon: HiOutlineCode, color: "text-indigo-600" }
  ],
  ai: [
    { name: "GenAI", icon: SiOpenai, color: "text-green-500" },
    { name: "LLM", icon: HiOutlineCode, color: "text-purple-500" },
    { name: "Agent AI", icon: HiOutlineCode, color: "text-pink-500" }
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
  ]
};

export const devopsData = [
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-gray-200" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },
  { name: "Docker", icon: HiOutlineCode, color: "text-blue-500" },
  { name: "AWS EC2", icon: FaAws, color: "text-orange-400" },
  { name: "AWS S3", icon: FaAws, color: "text-orange-400" },
  { name: "AWS RDS", icon: FaAws, color: "text-orange-400" },
  { name: "Route 53", icon: FaAws, color: "text-orange-400" },
  { name: "Nginx", icon: SiNginx, color: "text-green-600" },
  { name: "PM2", icon: SiPm2, color: "text-blue-600" }
];

export const projectsData = [
  {
    id: 1,
    title: "BitWalllet",
    description: "BitWallet is a Web3 mobile wallet built on the NEAR Protocol, offering all core decentralized wallet features. Developed with React Native and Django, it allows users to securely manage crypto assets, send/receive NEAR tokens, and interact with dApps seamlessly.",
    techStack: ["ReactNative", "Django", "PostgreSQL", "Web3"],
    liveDemo: "https://play.google.com/store/apps/details?id=beimagine.tech",
    featured: true
  },
  {
    id: 2,
    title: "KhelManch",
    description: "KhelManch is a social media platform for athletes and sports enthusiasts to share their sports activities and achievements. Built using React Native, FastAPI, and MongoDB, it allows users to post, connect, and engage with the sports community in one place.",
    techStack: ["ReactNative", "FastAPI", "MongoDB"],
    liveDemo: "https://play.google.com/store/apps/details?id=com.khelmanch",
    featured: true
  },
  {
    id: 3,
    title: "Vetrans Connect",
    description: "Veterans Connect is a platform for military veterans to stay informed about ongoing events, connect with fellow veterans, and share updates. Built with React Native, Django, and PostgreSQL, the app serves as a dedicated social and event hub for the armed forces community.",
    techStack: ["ReactNative", "Djnago", "PostgreSQL", "Expo"],
    liveDemo: "https://play.google.com/store/apps/details?id=com.navraj2071.VeteransConnect",
    featured: true
  },
  {
    id: 4,
    title: "BitMemoir",
    description: "BitMemoir is a blockchain-powered platform for issuing, storing, and verifying digital certificates and credentials securely. Built using Next.js, Django, and PostgreSQL, it empowers institutions and individuals to manage verifiable documents on-chain, ensuring transparency and trust.",
    techStack: ["React js", "Next Js", "PostgreSQL", "Django", "Docker"],
    liveDemo: "https://www.bitmemoir.com/en",
    featured: true
  },
  {
    id: 5,
    title: "IDS Co-pilot",
    description: "Database Co-Pilot is an AI-powered assistant that allows users to write natural language queries, which are converted into SQL, executed on the database, and returned with results, analytics, and visualizations. Built using React, FastAPI, and AWS Bedrock (Claude LLM) with a multi-agent AI architecture, it acts as a smart co-pilot for querying, analyzing, and visualizing data effortlessly.",
    techStack: ["React JS", "FastAPI", "LLM", "Agent AI"],
    featured: true
  },
  {
    id: 6,
    title: "AirDaoMarket",
    description: "AirDaoMarket is a Web3-based prediction platform where users can predict outcomes, win rewards, and earn crypto. Built using React.js, FastAPI, PostgreSQL, and EVM-based Web3 integration, it provides a decentralized and rewarding prediction market experience.",
    techStack: ["Reactjs", "DJango", "Web3",],
    liveDemo: "https://airdaomarkets.xyz",
    featured: true
  },
  {
    id: 7,
    title: "AirDoge",
    description: "AirDoge is a meme coin built on the AirDAO Chain, with its own NFT collection to engage the community. Developed using React.js and Solana/Web3, it combines fun, crypto rewards, and NFT utility in one ecosystem.",
    techStack: ["Reactjs", "DJango", "Web3",],
    liveDemo: "https://airdoge.xyz",
    featured: true
  }, {
    id: 8,
    title: "NGO Donation Platform",
    description: "A NGO Donation Platform is a web application built to help a non-profit organization collect donations online. Developed with React.js and Node.js, it integrates Razorpay for secure and seamless payment processing, making it easy for donors to contribute.",
    techStack: ["Reactjs", "Node js", "Payment gateway ",],
    liveDemo: "https://66f819b328bd550008391811--inspiring-kashata-3e9eff.netlify.app/",
    featured: true
  }
];

export const experienceData = [

  {
    id: 2,
    company: "Sandvine Technologies",
    role: "AI Full Stack Developer",
    duration: "March 2025 – Present",
    description: "Built an AI-based data assistant that converts natural language to SQL, executes DB queries, analyzes results, and returns visualizations. Worked with React, FastAPI, AWS Bedrock (Claude), and multi-agent AI architecture.",
    technologies: ["Python", "FastAI", "React.js", "Wbe3", "Docker", "AWS", " PostgreSQL", "RaectNative", "Vertica DB", "LLM", "Agent AI"]
  },
  {
    id: 2,
    company: "Beyond Imagination Technologies",
    role: "Web3 Full Stack Developer",
    duration: "OCT 2022 – Feb 2025",
    description: "Full Stack Developer skilled in building web applications using React, Node.js/Django, and deploying them on AWS. Experienced with EC2, S3, RDS, and containerization using Docker, with a focus on scalable and secure full-stack development.",
    technologies: ["React.js", "Node.js", "AWS", "PostgreSQL", "Django", "Docker", "Web3", "Python"]
  },

];

export const contactInfo = {
  email: personalInfo.email,
  social: [
    {
      name: "GitHub",
      icon: FaGithub,
      url: personalInfo.github,
      color: "hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: personalInfo.linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: `mailto:${personalInfo.email}`,
      color: "hover:text-red-500"
    }
  ]
};

const portfolioData = {
  personalInfo,
  heroData,
  skillsData,
  devopsData,
  projectsData,
  experienceData,
  contactInfo
};

export default portfolioData;
