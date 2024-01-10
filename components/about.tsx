"use client";

import React from 'react';
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently taking Electronics Engineeringin HKU focusing on 
        Data and AI systems, with a cGPA of 3.91/4.3. I have a passion for programming and 
        have been involved in various {" "}
        <Link
          href="#projects"
          className="text-blue-500 dark:text-purple-300"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          coding projects
        </Link>
        {" "}and{" "}
        <Link
          href="#experience"
          className="text-blue-500 dark:text-purple-300"
          onClick={() => {
            setActiveSection("Experience");
            setTimeOfLastClick(Date.now());
          }}
        >
          internships
        </Link>

        . Along my journey, I have been learning AI and web development. I am always looking to learn new technologies!
        My web dev core stack is{" "}
        <span className="font-bold">
          React, Next.js, Node.js, MongoDB, and TypeScript
        </span>
        . I am currently looking for an{" "}
        <span className="font-bold">internship position</span> as a software
        engineer.
      </p>

      <p>
        Outside of school/work, I enjoy playing piano,{" "}
        <a className="text-blue-500 dark:text-purple-300" href="https://tiktok.com/@davehenokh">doing content creation (recently hit 100K folls!)</a>, 
        and investing in{" "}<a className="text-blue-500 dark:text-purple-300" href="https://rendernetwork.com/">crypto projects</a>
        . I also love reading books. I am currently reading{" "}
        <a className="text-blue-500 dark:text-purple-300" href="https://www.amazon.com/Creativity-Inc-Overcoming-Unseen-Inspiration/dp/0812993012">Creativity, Inc. by Ed Catmull</a>.
      </p>
    </motion.section>
  );
}
