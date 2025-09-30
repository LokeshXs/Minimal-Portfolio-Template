import { BLOGS } from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import AnimatedSubheading from "../common/AnimatedSubHeading";

export default function BlogsSection() {
  return (
    <div className="px-4 max-sm:px-2 py-8 max-sm:py-6">
      <div className="flex justify-center">
        <AnimatedSubheading subheading=" Sharing knowledge as I learn" />
      </div>

      <div className="space-y-4 max-sm:space-y-2 py-6">
        {BLOGS.slice(0, 3).map((blog, idx) => (
          <div key={`blog-${idx}`} className="relative">
            <Link href={blog.link} className="group relative block p-4 max-sm:p-2">
              <div className="relative z-[2] overflow-hidden space-y-2">
                <div className="flex items-start max-sm:flex-col justify-between gap-4 max-sm:gap-[2px] ">
                  <h3 className="text-primary-foreground text-lg max-sm:text-base font-bold">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm text-nowrap">
                    {blog.published_at}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-primary-foreground/80 line-clamp-3 max-w-lg text-sm  max-sm:max-w-full">
                    {blog.description}
                  </p>
                  <div className="bg-muted rounded-full border p-2 max-sm:p-1">
                    <IconArrowRight className="text-muted-foreground h-4 w-4 max-sm:h-3 max-sm:w-3 transition-all duration-500 group-hover:-rotate-45" />
                  </div>
                </div>
              </div>
              <div className="from-accent/40 absolute top-0 left-0 z-0 h-full w-0 rounded-lg bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-full" />
            </Link>

            {idx !== 2 && (
              <div className="bg-muted mx-auto mt-4 block h-[2px] w-[90%]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
