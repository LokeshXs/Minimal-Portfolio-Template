import { cn } from "@/lib/utils";
import { IconArrowRight, IconBrandReact } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Image from "next/image";
import { JSX, useRef } from "react";
export default function TechStackBadge({
  width,
  iconImg,
  name,
  translateValue
}: {
  width: number;
  iconImg: string;
  name: string;
  translateValue?:number
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{
        width: 24,
        borderColor:"#d4d4d4"
      }}
      whileHover={{
        width: width,
        borderColor:"#a1a1a1"
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn("group/badge flex h-6 shrink-0 items-center gap-1 overflow-hidden rounded-full bg-neutral-100 p-1 border  ")}
      style={{
        translateX:translateValue? -translateValue:0
      }}
    >
      <Image src={iconImg} alt={name} width={16} height={16} className="h-4 w-4 shrink-0 " />
      <motion.p className="text-xs opacity-0 transition-all duration-300 group-hover/badge:opacity-100 text-secondary">
        {name}
      </motion.p>
    </motion.div>
  );
}
