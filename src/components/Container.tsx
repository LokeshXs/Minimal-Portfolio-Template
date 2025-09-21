import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("max-w-4xl w-full mx-auto bg-white  dark:bg-black px-4 md:px-10  pt-24   ", className)}>{children}</section>
  );
}
