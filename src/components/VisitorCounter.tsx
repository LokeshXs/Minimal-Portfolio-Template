"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getCount, incrementCount } from "@/lib/actions/visitors";

const SESSION_KEY = "visitor_counted";

function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const already = sessionStorage.getItem(SESSION_KEY);

    if (!already) {
      sessionStorage.setItem(SESSION_KEY, "1");
      incrementCount().then((c) => {
        setCount(c);
      });
    } else {
      getCount().then(setCount);
    }
  }, []);

  if (count === null) return null;

  const ordinal = getOrdinal(count);

  return (
    <motion.p
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-muted-foreground text-xs tabular-nums"
    >
      You&apos;re the{" "}
      <span className="text-primary-foreground font-medium">
        {count.toLocaleString()}
        <sup className="text-[0.6em]">{ordinal}</sup>
      </span>{" "}
      visitor
    </motion.p>
  );
}
