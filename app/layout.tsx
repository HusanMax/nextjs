import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Navbar, main content va Footer tuzilmasi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <body className="flex min-h-screen flex-col bg-neutral-900 text-white antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}