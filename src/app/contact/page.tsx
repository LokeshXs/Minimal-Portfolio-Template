"use client";

import TimelineBlock from "@/components/about/TimelineBlock";
import AnimatedSubheading from "@/components/common/AnimatedSubHeading";
import Container from "@/components/Container";
import ContactForm from "@/components/form/contactForm";
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
      <div>
        <div className="space-y-2">
          <motion.h1
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-4xl font-bold drop-shadow-lg"
          >
            Contact Me 🤝
          </motion.h1>
          <motion.p
            variants={variants}
            initial="hiddenVariants"
            animate="visibleVariants"
            className="text-secondary max-w-xl"
          >
            I&apos;m open to freelancing offers. Reach out to me to inquire more
            about my work.
          </motion.p>
        </div>
        <div className="py-20 max-w-xl mx-auto">
          <ContactForm/>
        </div>
       
     
      </div>
    </Container>
  );
}
