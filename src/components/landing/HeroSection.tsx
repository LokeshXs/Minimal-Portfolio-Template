"use client";

import { IconDownload } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { DESCRIPTION, NAME } from "@/lib/data";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="px-4 py-8 max-sm:py-6  ">
      <h1 className="text-primary-foreground text-2xl font-medium tracking-tight drop-shadow-xl md:text-4xl">
        {NAME.split(" ").map((word, idx) => (
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
      </h1>
      <p className="text-muted-foreground max-w-xl pt-4 max-sm:pt-2 text-base max-sm:text-sm break-normal">
        {DESCRIPTION.split(" ").map((word, idx) => (
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2 + idx / 50 }}
            viewport={{ once: true }}
            key={`${word}-${idx}`}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </p>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        viewport={{ once: true }}
        className="mt-2"
      >
        <Link href="/Lokesh_resume.pdf" target="_blank">
          <Button
            className="text-secondary hover:text-secondary shadow-custom group mt-2"
            title="Resume Download"
            size="sm"
            variant="outline"
          >
            Resume{" "}
            <IconDownload className="group-hover:text-primary-foreground transition-all duration-300" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
