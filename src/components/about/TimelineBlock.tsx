"use client";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function TimelineBlock({
  achivement,
}: {
  achivement: {
    year: string;
    achivements: {
      title: string;
      description: string;
    }[];
  };
}) {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0, filter: "blur(10px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      className="space-y-4"
    >
      <p className="shadow-custom w-fit rounded-md border border-neutral-200 px-2 font-medium">
        {achivement.year}
      </p>
      <div className="space-y-2 pl-4">
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
            <IconCircleDashedCheck className="text-secondary h-4 w-4" />
            <div>
              <p>{achivement.title}</p>
              <p className="text-secondary text-sm">{achivement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
