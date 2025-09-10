"use client";

import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function Projects() {
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg text-sm">
        I love building web apps and products that can impact millions of lives.
      </p>

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
            className="group relative"
          >
            <Link href={project.href}>
              <div className="group-hover:shadow-custom relative z-0 h-[200px] w-[400px] overflow-hidden rounded-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute right-2 bottom-2 z-[2] flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 p-2 dark:bg-neutral-700 shadow-xl ">
                  <IconArrowRight className="transition-all duration-300 group-hover:-rotate-45" />
                </div>
              </div>
              <h2 className="mt-2 font-medium tracking-tight text-neutral-700 dark:text-white">
                {project.title}
              </h2>
              <p className="text-secondary mt-1 text-sm">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
