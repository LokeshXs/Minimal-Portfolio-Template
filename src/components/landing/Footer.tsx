import { SOCIALS } from "@/lib/data";
import Link from "next/link";
import VisitorCounter from "../VisitorCounter";

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <VisitorCounter />

      <div className="flex items-center gap-2">
        {SOCIALS.map((social, idx) => (
          <Link  href={social.href} key={`social-${idx}`} target="_blank">
            <div className="text-muted-foreground hover:text-primary-foreground shrink-0 rounded-full border  bg-muted p-1 transition-all duration-300">
              <social.icon className="size-5 max-sm:size-4" />{" "}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
