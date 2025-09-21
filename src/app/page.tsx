import Container from "@/components/Container";
import BlogsSection from "@/components/landing/BlogsSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import Projects from "@/components/landing/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container className="min-h-screen">
        <h1 className="text-primary text-2xl font-medium tracking-tight drop-shadow-xl md:text-4xl">
          Lokesh Singh 👋
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quas
          doloribus distinctio illum veniam rem perspiciatis corporis tenetur?
          Modi, quos.
        </p>

        <Projects />
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <BlogsSection />
        <div className="mx-auto block h-[2px] w-full bg-neutral-100" />
        <ExperienceSection />
      </Container>
    </div>
  );
}
