"use client";

import Container from "@/components/Container";
import { BLOGS } from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";

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
  const containerVariants = {
    hiddenVariants: {
      opacity: 0,
      filter: "blur(10px)",
      x: -40,
    },
    visibleVariants: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <Container className="min-h-screen overflow-x-hidden">
      <div className="space-y-8">
        <div className="space-y-2">
          <motion.h1
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-4xl font-bold drop-shadow-lg"
          >
            All Blogs ✍️
          </motion.h1>
          <motion.p
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-secondary max-w-xl"
          >
            A software engineer with a passion for building scalable and
            efficient systems. currently working as a software engineer at
            Google
          </motion.p>
        </div>

        <div className="block h-[2px] w-full bg-neutral-200" />

        <motion.div
          variants={containerVariants}
          initial="hiddenVariants"
          animate="visibleVariants"
          className="space-y-4"
        >
          {BLOGS.map((blog, idx) => (
            <motion.div
              variants={containerVariants}
              key={`blog-${idx}`}
              className="relative"
            >
              <Link href={`/${blog.slug}`} className="group relative block p-4">
                <div className="relative z-[2] flex items-start justify-between gap-6 overflow-hidden">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                    <p className="text-secondary line-clamp-3 max-w-lg text-sm">
                      {blog.description}
                    </p>
                  </div>

                  <p className="text-secondary text-sm text-nowrap">
                    {blog.published_at}
                  </p>
                </div>
                <div className="absolute top-0 left-0 z-0 h-full w-0 rounded-lg bg-gradient-to-r from-neutral-200 to-transparent transition-all duration-500 group-hover:w-full" />
                <div className="absolute right-4 bottom-2 rounded-full bg-neutral-100 p-2 dark:bg-neutral-700">
                  <IconArrowRight className="text-secondary h-4 w-4 transition-all duration-500 group-hover:-rotate-45" />
                </div>
              </Link>

              {idx !== BLOGS.length - 1 && (
                <div className="mx-auto mt-4 block h-[2px] w-[90%] bg-neutral-100" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
