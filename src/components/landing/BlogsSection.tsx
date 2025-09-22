import { BLOGS } from "@/lib/data";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import AnimatedSubheading from "../common/AnimatedSubHeading";

export default function BlogsSection() {
  return (
    <div className="py-8  px-4">
     <div className=" flex justify-center ">
   
      <AnimatedSubheading subheading=" Sharing knowledge as I learn"/>
     </div>

      <div className="py-6 space-y-4">
        {BLOGS.slice(0, 3).map((blog, idx) => (
          <div key={`blog-${idx}`} className="relative">
            <Link href={`/${blog.slug}`} className="group relative block p-4">
              <div className="relative z-[2] flex items-start justify-between gap-6 overflow-hidden">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{blog.title}</h3>
                  <p className="text-secondary line-clamp-3 max-w-lg text-sm">
                    {blog.description}
                  </p>
                </div>

                <p className="text-secondary text-sm text-nowrap">
                  {blog.published_at}
                </p>
              </div>
              <div className="absolute top-0 left-0 z-0 h-full w-0 rounded-lg bg-gradient-to-r from-neutral-200 to-transparent transition-all duration-500 group-hover:w-full" />
              <div className="absolute right-4 bottom-2 rounded-full bg-neutral-100 p-2 dark:bg-neutral-700">
                <IconArrowRight className="text-secondary h-4 w-4 transition-all duration-500 group-hover:-rotate-45" />
              </div>
            </Link>

            {idx !== 2 && (
              <div className="mx-auto mt-4 block h-[2px] w-[90%] bg-neutral-100" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
