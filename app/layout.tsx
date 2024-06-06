import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Penpie",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang="en">
      <body className="w-ful">
          <section className="relative w-full bg-blac flex-col flex items-center justify-start">
            {children}
            <Footer />
          </section>
      </body>
    </html>
  );
}
