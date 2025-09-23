"use client";

import TimelineBlock from "@/components/about/TimelineBlock";
import AnimatedSubheading from "@/components/common/AnimatedSubHeading";
import ProjectCard from "@/components/common/ProjectCard";
import Container from "@/components/Container";
import {
  ABOUT_IMAGES,
  ACHIVEMENTSTIMELINE,
  PROJECTS,
  PROJECTS_DESCRIPTION,
} from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container className="relative min-h-screen overflow-x-hidden">
      <div>
        <div className="space-y-2 px-4 py-8">
          <motion.h1 className="text-4xl font-bold drop-shadow-lg">
            {"Projects 🔮".split(" ").map((word, idx) => (
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.1 + idx / 10 }}
                viewport={{ once: true }}
                key={`${word}-${idx}`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>
          <motion.p className="text-secondary max-w-xl break-words ">
            {PROJECTS_DESCRIPTION.split(" ").map((word, idx) => (
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.2 + idx / 20 }}
                viewport={{ once: true }}
                key={`${word}-${idx}`}
                className=" inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </div>
         <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <div className="px-4 py-8">
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
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="absolute top-0 right-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    </Container>
  );
}
