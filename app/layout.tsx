import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petropipe - Tubos e Conexões em Aço Inox",
  description: "Fornecedor especializado em Tubos, Conexões e Flanges em Aço Inox",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* 🔹 Fundo com partículas cobrindo toda a página */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* 🔹 Gradiente global abaixo das partículas */}
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-white-100 to-gray-800 to-gray-600 -z-20" />

        {/* 🔹 Conteúdo principal */}
        <Header />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
