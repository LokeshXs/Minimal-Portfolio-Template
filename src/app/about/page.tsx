"use client";

import TimelineBlock from "@/components/about/TimelineBlock";
import AnimatedSubheading from "@/components/common/AnimatedSubHeading";
import Container from "@/components/Container";
import { ABOUT_IMAGES, ACHIVEMENTSTIMELINE } from "@/lib/data";

import { motion } from "motion/react";
import Image from "next/image";


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
      <div >
        <div className="space-y-2">
          <motion.h1
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-4xl font-bold drop-shadow-lg"
          >
            About Me 🙂
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
            <AnimatedSubheading subheading="Travelling is in my blood" />
          </div>
          <div className="mt-6 columns-3 gap-4 max-sm:gap-2">
            {ABOUT_IMAGES.map((aboutImg, idx) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -40,
                  filter: "blur(40px)",
                  scale: 0.8,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 + idx / 10,
                }}
                key={idx}
              >
                <Image
                  src={aboutImg}
                  alt="About Image"
                  height={300}
                  width={300}
                  className="mb-4 rounded-xl max-sm:mb-2 max-sm:rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <div className="py-8">
          <div className="flex justify-center">
            <AnimatedSubheading subheading="Timeline of achivements" />
          </div>
          <div className="mt-6 space-y-6">
            {ACHIVEMENTSTIMELINE.map((item, idx) => (
              <TimelineBlock key={`achivement-${idx}`} achivement={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
