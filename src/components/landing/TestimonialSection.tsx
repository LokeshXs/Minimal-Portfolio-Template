"use client";

import { TESTIMONIALS } from "@/lib/data";
import AnimatedSubheading from "../common/AnimatedSubHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

export default function TestimonialSection() {
  return (
    <div className="py-8  px-4">
      <div className="flex justify-center">
        <AnimatedSubheading subheading="Words of appreciation" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        className="px-10"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="py-6">
            {TESTIMONIALS.map((item, idx) => (
              <CarouselItem key={`test-${idx}`} className="basis-1/2">
                <div className="hover:shadow-custom flex min-h-[240px] flex-col justify-between gap-6 rounded-lg border p-4 transition-all duration-300">
                  <blockquote className="line-clamp-5">
                    {item.content}
                  </blockquote>

                  <div className="mt-4 flex items-start gap-2">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={item.avatarPath}
                        alt={item.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="text-sm">
                      <p>{item.name}</p>
                      <p className="text-secondary">({item.designation})</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  );
}
