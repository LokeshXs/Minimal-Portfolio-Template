import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";
import Container from "@/components/Container";
import { Toaster } from "sonner";
import MobileNavBar from "@/components/MobileNavBar";

const rubik = Rubik({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh | Software Engineer & Web Developer Portfolio",
  description:
    "Portfolio of Lokesh, a software engineer specializing in modern web development with React, Next.js, Node.js, and PostgreSQL. Explore projects, blogs, and experience.",
  keywords: [
    "Lokesh",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Full Stack Developer",
    "Portfolio",
    "Frontend Engineer",
    "MERN Stack",
  ],
  openGraph: {
    title: "Lokesh | Software Engineer & Web Developer Portfolio",
    description:
      "Showcasing projects, blogs, and experience in building scalable web applications using React, Next.js, Node.js, and PostgreSQL.",
    url: "https://your-portfolio-domain.com",
    siteName: "Lokesh Portfolio",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lokesh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh | Software Engineer & Web Developer Portfolio",
    description:
      "Portfolio of Lokesh, showcasing projects, blogs, and experience in web development.",
    images: ["https://your-portfolio-domain.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${rubik.className} bg-neutral-100 antialiased [--pattern-fg:var(--color-gray-950)]/5 dark:bg-black dark:[--pattern-fg:var(--color-white)]/10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-md:hidden">
            <NavBar />
          </div>
          <div className="md:hidden">
            <MobileNavBar/>
          </div>

          {children}
          <Container className="px-0 pt-0 md:px-0">
            <div className="mx-auto block h-[2px] w-full bg-muted" />
            <div className="x-4 md:px-10">
              <Footer />
            </div>
          </Container>
        </ThemeProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
