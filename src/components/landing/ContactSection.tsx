"use client";
import { useState } from "react";
import AnimatedSubheading from "../common/AnimatedSubHeading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ContactSection() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      toast.warning("Invalid Email!");
      return;
    }

    router.push(`mailto:${value}`);
  };

  return (
    <div className="px-4 py-8 max-sm:px-2 max-sm:py-6">
      <div className="flex justify-center">
        <AnimatedSubheading subheading="Get in touch" />
      </div>

      <div className="flex flex-col items-center py-6">
        <p className="text-secondary max-w-xl text-center max-sm:text-sm">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or want to say hi, hit that button.
        </p>

        <div
          className={cn(
            "border-border focus-within:ring-ring shadow-custom mt-4 flex w-lg rounded-lg border p-1 ring-1 ring-transparent max-sm:w-full",
          )}
        >
          <Input
            className="flex-1 border-0 shadow-none focus-visible:ring-0 max-sm:text-sm"
            placeholder="Your email"
            type="email"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button onClick={onSubmit} variant="secondary">
            Send Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
}
