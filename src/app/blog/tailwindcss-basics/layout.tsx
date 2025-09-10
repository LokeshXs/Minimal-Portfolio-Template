import type { Metadata } from "next";




import Container from "@/components/Container";



export const metadata: Metadata = {
  title: "Portfolio Website Template - Lokesh Singh",
  description: "A perfect portfolio website template that showcase your skills, minimal and smotth micro interactions, perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Container className=" min-h-screen px-10 md:pt-24 md:pb-10 prose">{children}</Container>
  );
}
