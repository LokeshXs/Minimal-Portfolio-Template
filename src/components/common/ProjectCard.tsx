import { IconArrowRight, IconBrandReact } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import TechStackBadge from "./TechStackBadge";


export default function ProjectCard({
  project,
}: {
  project: {
    title: string;
    src: string;
    href: string;
    description: string;
      tech: {
        name: string;
        icon: string;
        width: number;
    }[];
  };
}) {
  return (
    <div className="group hover:shadow-custom relative rounded-xl border border-transparent p-4 max-sm:p-2 transition-all duration-300 hover:border-neutral-200 max-sm:border-neutral-200 dark:hover:border-neutral-800 dark:max-sm:border-neutral-800">
      <Link href={project.href} className="flex flex-col items-center">
        <div className="group-hover:shadow-custom relative z-0 h-[200px] w-full overflow-hidden rounded-md transition-all duration-300 group-hover:-translate-y-1">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute right-2 bottom-2 z-[2] flex h-8 w-8 items-center justify-center rounded-full bg-muted p-2 shadow-xl border">
            <IconArrowRight className="text-muted-foreground  transition-all duration-300 group-hover:-rotate-45 " />
           
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mt-2 font-medium tracking-tight text-primary-foreground">
            {project.title}
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">{project.description}</p>
          <div className="flex justify-start mt-2">
          {project.tech.map((tech,idx)=>(
            <TechStackBadge key={`tech-${idx}`} name={tech.name} iconImg={tech.icon} width={tech.width} translateValue={idx*4}  />
          ))}
          
          </div>
        </div>
      </Link>
    </div>
  );
}
