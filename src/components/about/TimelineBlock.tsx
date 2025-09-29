"use client";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function TimelineBlock({
  achivement,
  index,
}: {
  achivement: {
    year: string;
    achivements: {
      title: string;
      description: string;
    }[];
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0, filter: "blur(10px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <p className="shadow-custom border-accent w-fit rounded-md border px-2 font-medium">
          {achivement.year}
        </p>
        {index === 0 && (
          <div className="relative h-2 w-2 rounded-full bg-orange-400">
            <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-orange-400" />
          </div>
        )}
      </div>
      <div className="space-y-2 pl-4 max-sm:pl-3">
        {achivement.achivements.map((achivement, idx) => (
          <motion.div
            initial={{ y: -40, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.3 + idx / 10,
            }}
            key={achivement.title}
            className="flex gap-2"
          >
            <IconCircleDashedCheck className="text-muted-foreground h-4 w-4" />
            <div>
              <p className="text-primary-foreground max-sm:text-sm">{achivement.title}</p>
              <p className="text-muted-foreground text-sm max-sm:text-xs">
                {achivement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
