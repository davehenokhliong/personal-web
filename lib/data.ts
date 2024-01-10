import React from "react";
import { MdBubbleChart } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { SiWebflow } from "react-icons/si";
import algoGPT from "@/public/algoGPT.jpeg";
import mustimusik from "@/public/mustimusik.png";
import sharePrompt from "@/public/sharePrompt.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technology Intern",
    location: "Rouge Venture Capital",
    description:
      "Led a 6-person tech team and managed the company's SaaS which provides ESG investing data from 30K+ startups using Bubble.",
    icon: React.createElement(MdBubbleChart),
    date: "Jun 2022 - Aug 2022",
  },
  {
    title: "Front-End Developer",
    location: "Sevenpreneur",
    description:
      "Managed Sevenpreneur's website using Webflow and developed its skincare portfolio company's (SOMBONG) landing page.",
    icon: React.createElement(SiWebflow),
    date: "Feb 2023 - Nov 2023",
  },
  {
    title: "Founder and CEO",
    location: "Musti Musik",
    description:
      "I'm building an online course platform for pianists to learn jazz & pop music theory (150+ users subscribed, HK$ 10k MRR) using Wordpress and its plugins for exclusive member area.",
    icon: React.createElement(FaWordpress),
    date: "Aug 2023 - present",
  },
  {
    title: "AI Researcher",
    location: "Algogene Fintech Ltd.",
    description:
      "I'm now working on developing the company's first chatbot to help clients for trading algo generation and strategy backtesting.",
    icon: React.createElement(RiStockFill),
    date: "Dec 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AlgoGPT",
    description:
      "I worked as sole developer for the company's chatbot, which will assist investors in developing trading algorithms from scratch.",
    tags: ["Python", "Langchain", "AWS", "Llama 2", "FAISS", "REST API", "CTransformer"],
    imageUrl: algoGPT,
  },
  {
    title: "Musti Musik",
    description:
      "Managing full-stack learning management system with landing page, payment integration, exclusive member area, affiliate program, and email marketing.",
    tags: ["Wordpress", "Elementor", "Sejoli", "Mailketing"],
    imageUrl: mustimusik,
  },
  {
    title: "Share Prompt",
    description:
      "Webapp where people can share ChatGPT prompts, complete with secure authentication, creating posts, and updating feed.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: sharePrompt,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Java",
  "Express",
  "C++",
  "Python",
] as const;
