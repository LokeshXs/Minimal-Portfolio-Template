"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

export default function NotFoundContent() {
  return (
    <Container className="relative flex min-h-screen flex-col items-center justify-center">
      {/* Decorative side patterns */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-md:w-6"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-md:w-6"
      />

      <main className="px-4 text-center max-sm:px-2">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em]"
        >
          Error 404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-primary-foreground mt-4 text-balance text-8xl font-bold tracking-tight drop-shadow-xl md:text-[10rem]"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-muted-foreground mx-auto mt-4 max-w-xs text-balance text-base max-sm:text-sm"
        >
          This page doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.3 }}
          className="mt-8"
        >
          <Link href="/">
            <Button
              className="text-secondary hover:text-secondary shadow-custom group"
              variant="outline"
              size="sm"
            >
              <IconArrowLeft
                aria-hidden="true"
                className="group-hover:text-primary-foreground mr-1 transition-all duration-300"
              />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </main>
    </Container>
  );
}
