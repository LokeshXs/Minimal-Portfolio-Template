"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSubheading from "../common/AnimatedSubHeading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ContactSection() {

  const [value, setValue] = useState("");

 



  return (
    <div className="px-4 py-8 max-sm:py-6">
      <div className="flex justify-center">
        <AnimatedSubheading subheading="Get in touch" />
      </div>

      <div className="flex flex-col items-center py-6">
        <p className="text-secondary max-w-xl text-center max-sm:text-sm">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or want to say hi, hit that button.
        </p>

        <div
          className={cn("mt-4 flex w-lg max-sm:w-full rounded-lg border border-border p-1 ring-1 ring-transparent focus-within:ring-ring shadow-custom ")}
        >
          <Input
           
            className="flex-1 border-0 shadow-none focus-visible:ring-0 "
            placeholder="Your email"
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
          />
          <Link href={`mailto:${value}`} className=""><Button variant="secondary" >Send Enquiry</Button></Link>
        </div>
      </div>
    </div>
  );
}
