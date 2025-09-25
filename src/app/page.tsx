import Container from "@/components/Container";
import BlogsSection from "@/components/landing/BlogsSection";
import ContactSection from "@/components/landing/ContactSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import HeroSection from "@/components/landing/HeroSection";
import Projects from "@/components/landing/ProjectsSection";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container className="relative min-h-screen">
        <HeroSection />

        <Projects />
        <div className="mx-auto block h-[2px] w-full bg-muted" />
        <ExperienceSection />
        <div className="mx-auto block h-[2px] w-full bg-muted" />

        <BlogsSection />
        <div className="mx-auto block h-[2px] w-full bg-muted" />
        <TestimonialSection />
        <div className="mx-auto block h-[2px] w-full bg-muted" />
        <ContactSection />
       
        <div className="absolute top-0 left-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute top-0 right-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      </Container>
    </div>
  );
}
