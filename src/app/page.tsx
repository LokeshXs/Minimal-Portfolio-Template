import Container from "@/components/Container";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen   ">
      <Container className="min-h-screen px-4 md:px-10  pt-24 h-[3000px] ">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Lokesh Singh 👋
        </h1>
        <p className="text-secondary text-sm pt-4 max-w-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quas
          doloribus distinctio illum veniam rem perspiciatis corporis tenetur?
          Modi, quos.
        </p>

        <Projects/>
      </Container>
    </div>
  );
}
