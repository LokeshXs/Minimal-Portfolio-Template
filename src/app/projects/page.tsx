"use client";

import TimelineBlock from "@/components/about/TimelineBlock";
import AnimatedSubheading from "@/components/common/AnimatedSubHeading";
import ProjectCard from "@/components/common/ProjectCard";
import Container from "@/components/Container";
import { ABOUT_IMAGES, ACHIVEMENTSTIMELINE, PROJECTS } from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const variants = {
    hiddenVariants: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
    visibleVariants: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  return (
    <Container className="min-h-screen overflow-x-hidden">
      <div>
        <div className="space-y-2">
          <motion.h1
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-4xl font-bold drop-shadow-lg"
          >
            Projects 🔮
          </motion.h1>
          <motion.p
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-secondary max-w-xl"
          >
            I&apos;m a passionate software engineer dedicated to crafting
            elegant solutions for complex problems. With expertise in full-stack
            development, I enjoy building user-centric applications that make a
            difference.
          </motion.p>
        </div>
        <div className="py-8">
          <div className="flex justify-center">
            <AnimatedSubheading subheading="I love building things" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-10 gap-y-12 md:grid-cols-2">
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
                <ProjectCard project={project}/>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
