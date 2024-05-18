import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codex PDF",
  description: "Codex PDF permite que você converse com qualquer documento PDF. Basta enviar seu arquivo e começar a fazer perguntas imediatamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
