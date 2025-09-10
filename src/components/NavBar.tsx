"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Container from "./Container";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconHome, IconHomeFilled } from "@tabler/icons-react";

export default function NavBar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className="fixed inset-x-0 top-0 z-10 bg-transparent px-4 py-4 md:px-10">
      <motion.nav
        animate={{
          width: scrolled ? "90%" : "100%",
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          paddingLeft: scrolled ? "6px" : "0px",
          paddingRight: scrolled ? "6px" : "0px",
          paddingTop: scrolled ? "4px" : "0px",
          paddingBottom: scrolled ? "4px" : "0px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative mx-auto flex items-center justify-between gap-6 rounded-full bg-white dark:bg-black"
      >
        <AnimatePresence>
          {pathName !== "/" ? (
            <motion.div
              key="home"
              title="Home"
              className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-neutral-100 p-4 dark:bg-neutral-700"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                padding: scrolled ? "12px" : "16px",
                opacity: 1,
                scale: 1,
              }}
              onClick={() => router.push("/")}
            >
              <IconHome className="text-neutral-700 transition-all duration-300 group-hover:scale-105 group-hover:text-neutral-900 dark:text-neutral-200" />
            </motion.div>
          ) : (
            <motion.div
              key="profile"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                width: scrolled ? "3rem" : "3.5rem",
                height: scrolled ? "3rem" : "3.5rem",
                opacity: 1,
                scale: 1,
              }}
              className="relative h-14 w-14 overflow-hidden rounded-full"
            >
              <Image
                src="/me.jpg"
                alt="Lokesh Singh"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="text-secondary flex items-center text-sm">
          {NAV_LINKS.map((linkObj, idx) => (
            <li key={`link-${idx}`}>
              <Link
                href={linkObj.href}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="hover:text-primary relative px-2 py-1 transition-all duration-300"
              >
                <span className="relative z-[2]"> {linkObj.title}</span>
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0 z-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </Container>
  );
}
