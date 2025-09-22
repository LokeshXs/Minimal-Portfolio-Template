"use client";

import Image from "next/image";
import AnimatedSubheading from "../common/AnimatedSubHeading";
import { EXPERIENCE } from "@/lib/data";
import {
  IconArrowUp,
  IconClockHour5,
  IconCode,
  IconSelector,
} from "@tabler/icons-react";
import TechStackBadge from "../common/TechStackBadge";

export default function ExperienceSection() {
  return (
    <div className="py-8  px-4">
      <div className="flex justify-center">
        <AnimatedSubheading subheading="Worked at reputed firms" />
      </div>

      <div className="space-y-8 py-6">
        {EXPERIENCE.map((exp, idx) => (
          <div key={`exp-${idx}`} className="flex items-start gap-12">
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-3">
                <p className="text-lg font-medium">{exp.companyName}</p>{" "}
                {idx === 0 && (
                  <div className="relative h-2 w-2 rounded-full bg-orange-300">
                    <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-orange-300" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <p className="flex items-center gap-1">
                  <span className="text-secondary shrink-0 rounded-full border border-neutral-200 bg-neutral-100 p-1">
                    <IconCode className="h-3 w-3" />{" "}
                  </span>
                  {exp.designation}{" "}
                </p>{" "}
                <div className="flex items-center gap-1">
                  <span className="text-secondary shrink-0 rounded-full border border-neutral-200 bg-neutral-100 p-1">
                    <IconClockHour5 className="h-3 w-3" />{" "}
                  </span>
                  <div className="flex items-center gap-2">
                    <p className="text-secondary text-sm">{exp.jobType}</p>
                    <div className="h-4 w-[2px] rounded-full bg-neutral-200" />
                    <p className="text-secondary text-sm">{exp.period}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-1 pl-10">
                <ul className="marker:text-secondary/80 text-secondary list-disc space-y-1 text-sm">
                  {exp.expPoints.map((point, i) => (
                    <li key={`point-${idx}-${i}`}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-start pl-1">
                {exp.tech.map((tech, index) => (
                  <TechStackBadge
                    key={`tech-${idx}-${index}`}
                    name={tech.name}
                    iconImg={tech.icon}
                    width={tech.width}
                    translateValue={index * 4}
                  />
                ))}
              </div>
            </div>
            <div>
              <Image
                src={exp.companyLogoPath}
                alt={exp.companyName}
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
