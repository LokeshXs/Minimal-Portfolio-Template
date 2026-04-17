"use client";
import { useState } from "react";
import AnimatedSubheading from "../common/AnimatedSubHeading";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IconCheck, IconClipboard, IconCopy } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactSection() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      toast.warning("Invalid Email!");
      return;
    }

    router.push(`mailto:${value}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("lokesh1129ece@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-4 py-8 max-sm:px-2 max-sm:py-6">
      <div className="flex justify-center">
        <AnimatedSubheading subheading="Get in touch" />
      </div>

      <div className="flex flex-col items-center py-6">
        <div className="flex items-center justify-center gap-2 py-6">
          <p className="text-muted-foreground font-pixel max-sm:text-sm">lokesh1129ece@gmail.com</p>
          <button
            className="relative size-5 cursor-pointer"
            onClick={handleCopy}
          >
            <AnimatePresence>
              {!copied ? (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {" "}
                  <IconClipboard className="text-muted-foreground size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <IconCheck className="size-5 text-green-500" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  );
}
