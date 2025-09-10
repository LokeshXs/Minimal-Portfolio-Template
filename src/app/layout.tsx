import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import NavBar from "@/components/NavBar";

const inter = Inter({
  weight:['400','500','600','700','800','900'],
  subsets:["latin"]
})

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
    <html lang="en" className="light" >
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <NavBar/>
     

        {children}

      </body>
    </html>
  );
}
