'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCorpOpen, setIsCorpOpen] = useState(false);
  const [isCorpMobileOpen, setIsCorpMobileOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const corpTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll header
  useEffect(() => {
    let lastScroll = 0;
    const threshold = 10;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastScroll) > threshold) {
        setIsScrolled(currentScroll > 50);
        lastScroll = currentScroll;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsCorpMobileOpen(false);
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha menu mobile ao clicar em qualquer link
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.closest("header")) {
        setIsMenuOpen(false);
        setIsCorpMobileOpen(false);
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleCorpMouseEnter = () => {
    if (corpTimeoutRef.current) clearTimeout(corpTimeoutRef.current);
    setIsCorpOpen(true);
  };

  const handleCorpMouseLeave = () => {
    if (corpTimeoutRef.current) clearTimeout(corpTimeoutRef.current);
    corpTimeoutRef.current = setTimeout(() => setIsCorpOpen(false), 200);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    productsTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 200);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
        : "bg-gradient-to-r from-white-100 to-gray-900 text-white"
      }`}
    >
      {/* Partículas */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo6.png"
                alt="Petropipe"
                width={160}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Empresa */}
            <div
              className="relative"
              onMouseEnter={handleCorpMouseEnter}
              onMouseLeave={handleCorpMouseLeave}
            >
              <button className={`group relative inline-flex items-center transition-colors duration-200
                ${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"}`}>
                Empresa
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
              </button>
              {isCorpOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-sm border rounded-md shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <ul className="py-2">
                    <li>
                      <Link href="/sobre-a-petropipe" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sobre a Petropipe</Link>
                    </li>
                    <li>
                      <Link href="/unidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Unidades</Link>
                    </li>
                    <li>
                      <Link href="/planos-de-financiamento" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Planos de Financiamento</Link>
                    </li>
                    <li>
                      <Link href="/trabalhe-conosco" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Trabalhe conosco</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Produtos */}
            <div
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <Link
                href="/produtos"
                className={`group relative inline-flex items-center transition-colors duration-200
                  ${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                Produtos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
              </Link>

              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm border rounded-md shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <ul className="py-2">
                    <li><Link href="/produtos/Tubos&Tubing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tubos & Tubing</Link></li>
                    <li><Link href="/produtos/Conexoes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Conexões</Link></li>
                    <li><Link href="/produtos/Flanges" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Flanges</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Contato */}
            <Link
              href="/contato"
              className={`group relative inline-flex items-center transition-colors duration-200
                ${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
            </Link>
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors duration-200
                ${isScrolled
                  ? "text-gray-900 hover:text-blue-600 hover:bg-gray-100"
                  : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className={`md:hidden fixed inset-x-0 top-20 p-4 
              ${isScrolled ? "bg-white/95" : "bg-gradient-to-r from-white to-gray-900"} 
              backdrop-blur-sm border-t border-gray-200/20 animate-in slide-in-from-top duration-200`}
          >
            <div className="pt-2 pb-3 space-y-1">
              {/* Empresa */}
              <div>
                <button
                  onClick={() => setIsCorpMobileOpen(!isCorpMobileOpen)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors
                    ${isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/80" : "text-white hover:text-blue-200 hover:bg-white/10"}`}
                >
                  <span>Empresa</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isCorpMobileOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                </button>

                {isCorpMobileOpen && (
                  <div className="pl-4 animate-in slide-in-from-left duration-200">
                    <Link href="/sobre-a-petropipe" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Sobre a Petropipe</Link>
                    <Link href="/unidades" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Unidades</Link>
                    <Link href="/planos-de-financiamento" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Planos de Financiamento</Link>
                    <Link href="/trabalhe-conosco" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Trabalhe conosco</Link>
                  </div>
                )}
              </div>

              {/* Produtos */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full text-left px-3 py-2 flex items-center justify-between text-gray-700 hover:text-blue-600"
                >
                  <span>Produtos</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isProductsOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                </button>

                {isProductsOpen && (
                  <div className="pl-4">
                    <Link href="/produtos/Tubos&Tubing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tubos</Link>
                    <Link href="/produtos/Conexoes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Conexões</Link>
                    <Link href="/produtos/Flanges" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Flanges</Link>
                  </div>
                )}
              </div>

              {/* Contato */}
              <Link href="/contato" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
