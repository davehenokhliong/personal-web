"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        I'm currently taking{" "}
        <span className="font-medium">Electronics Engineering</span> with a focus on 
        AI, with a cGPA of 3.91/4.3. I have a passion for programming. I did many coding projects and internships and learned{" "}
        <span className="font-medium">full-stack web development</span> thoroughly.{" "}
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, and TypeScript
        </span>
        . I am always looking to learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        piano, do content creation, and invest in crypto projects. I also enjoy{" "}
        <span className="font-medium">reading books</span>. I am currently
        reading{" "}
        <span className="font-medium">Ed Catmull's Creativity, Inc.</span>. I love
        learning new things!
      </p>
    </motion.section>
  );
}
