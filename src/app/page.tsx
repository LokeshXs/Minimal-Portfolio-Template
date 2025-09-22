import Container from "@/components/Container";
import BlogsSection from "@/components/landing/BlogsSection";
import ContactSection from "@/components/landing/ContactSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import Projects from "@/components/landing/ProjectsSection";
import TestimonialSection from "@/components/landing/TestimonialSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Container className="relative min-h-screen">
        <div className="px-4">
          <h1 className="text-primary text-2xl font-medium tracking-tight drop-shadow-xl md:text-4xl">
            Lokesh Singh 👋
          </h1>
          <p className="text-secondary max-w-lg pt-4 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            quas doloribus distinctio illum veniam rem perspiciatis corporis
            tenetur? Modi, quos.
          </p>
        </div>

        <Projects />
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <BlogsSection />
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <ExperienceSection />
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <TestimonialSection />
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <ContactSection />
        <div className="absolute top-0 left-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute top-0 right-0 col-start-2 row-span-full row-start-1 h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      </Container>
    </div>
  );
}
