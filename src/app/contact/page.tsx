"use client";

import Container from "@/components/Container";
import ContactForm from "@/components/form/contactForm";
import { motion } from "motion/react";

const CONTACT_DESCRIPTION =
  "I'm open to freelancing offers. Reach out to me to inquire more about my work.";

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
    <Container className="relative min-h-screen overflow-x-hidden">
      <div className="space-y-2 px-4 py-8">
        <motion.h1
          variants={variants}
          initial="hiddenVariants"
          animate="visibleVariants"
          className="text-primary-foreground text-2xl font-medium tracking-tight drop-shadow-xl md:text-4xl"
        >
          {"Contact Me 🤝".split(" ").map((word, idx) => (
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
          className="text-muted-foreground max-w-xl pt-4 text-base break-normal"
        >
          {CONTACT_DESCRIPTION.split(" ").map((word, idx) => (
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + idx / 20 }}
              viewport={{ once: true }}
              key={`${word}-${idx}`}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="block h-[2px] w-full bg-muted" />
      <motion.div initial={{opacity:0,y:40,filter:"blur(10x)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}}  className="mx-auto max-w-xl px-4 py-20">
        <ContactForm />
      </motion.div>

      <div className="absolute top-0 left-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="absolute top-0 right-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    </Container>
  );
}
