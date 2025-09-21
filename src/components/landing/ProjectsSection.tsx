"use client";

import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import AnimatedSubheading from "../common/AnimatedSubHeading";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  return (
    <div className="py-8">
      <div className="flex justify-center">
        <AnimatedSubheading subheading="I love building things" />
      </div>

      <div className="grid grid-cols-1 gap-10 gap-y-12 py-6 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: (idx + 1) * 0.1,
              ease: "easeInOut",
            }}
            key={`project-${idx}`}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
