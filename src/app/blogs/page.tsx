"use client";

import Container from "@/components/Container";
import { BLOGS } from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";

const BLOGS_DESCRIPTION =
  "Here I share my thoughts, learnings, and experiences as a software engineer. From deep-dives into web development, practical coding tips, and project breakdowns, to reflections on productivity and career growth — this space is where I document and share my journey.";

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
    <Container className="relative min-h-screen overflow-x-hidden">
      <div className="space-y-2 px-4 max-sm:px-2 py-8 max-sm:py-6">
        <motion.h1
          variants={variants}
          initial="hiddenVariants"
          animate="visibleVariants"
          className="text-primary-foreground text-2xl font-medium tracking-tight drop-shadow-xl md:text-4xl"
        >
          {"All Blogs ✍️".split(" ").map((word, idx) => (
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
        <motion.p
          variants={variants}
          initial="hiddenVariants"
          animate="visibleVariants"
         className="text-muted-foreground max-w-xl pt-4 max-sm:pt-2 text-base break-normal"
        >
          {BLOGS_DESCRIPTION.split(" ").map((word, idx) => (
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + idx / 20 }}
              viewport={{ once: true }}
              key={`${word}-${idx}`}
              className="inline-block max-sm:text-sm"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </div>

      <div className="block h-[2px] w-full bg-muted" />

      <motion.div
        variants={containerVariants}
        initial="hiddenVariants"
        animate="visibleVariants"
        className="space-y-4  px-4 max-sm:px-2 py-8 max-sm:py-6"
      >
        {BLOGS.map((blog, idx) => (
          <motion.div
            variants={containerVariants}
            key={`blog-${idx}`}
            className="relative"
          >
               <Link href={blog.link}  className="group relative block p-4 max-sm:p-2">
              <div className="relative z-[2] overflow-hidden space-y-2">
                <div className="flex items-start max-sm:flex-col justify-between gap-4 max-sm:gap-[2px] ">
                  <h3 className="text-primary-foreground text-lg max-sm:text-base font-bold">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm text-nowrap">
                    {blog.published_at}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-primary-foreground/80 line-clamp-3 max-w-lg text-sm  max-sm:max-w-full">
                    {blog.description}
                  </p>
                  <div className="bg-muted rounded-full border p-2 max-sm:p-1">
                    <IconArrowRight className="text-muted-foreground h-4 w-4 max-sm:h-3 max-sm:w-3 transition-all duration-500 group-hover:-rotate-45" />
                  </div>
                </div>
              </div>
              <div className="from-accent/40 absolute top-0 left-0 z-0 h-full w-0 rounded-lg bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-full max-sm:hidden" />
            </Link>

            {idx !== BLOGS.length-1 && (
              <div className="mx-auto mt-4 block h-[2px] w-[90%] bg-muted" />
            )}
          </motion.div>
        ))}
      </motion.div>

          <div className="absolute top-0 left-0 col-start-2 row-span-full row-start-1 h-full w-10 max-md:w-6 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute top-0 right-0 col-start-2 row-span-full row-start-1 h-full w-10  max-md:w-6 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    </Container>
  );
}
