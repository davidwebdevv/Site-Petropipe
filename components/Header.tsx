'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Hook personalizado pra controlar o scroll e header transparente
const useScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Só atualiza a cada 10px pra não sobrecarregar
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

  return isScrolled;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCorpOpen, setIsCorpOpen] = useState(false);
  const [isCorpMobileOpen, setIsCorpMobileOpen] = useState(false);
  const isScrolled = useScrollHeader();

  // Refs pra controlar os timeouts dos menus e o clique fora
  const corpTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (corpTimeoutRef.current) clearTimeout(corpTimeoutRef.current);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
  }, []);

  // Fecha o menu quando clica fora (melhor UX)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg" 
          : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left: Corporate menu + Logo */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            {/* Corporate menu (desktop hover) */}
            <div
              className="relative hidden md:block"
              onMouseEnter={handleCorpMouseEnter}
              onMouseLeave={handleCorpMouseLeave}
            >
              <button className={`px-3 py-2 ${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"}`}>
                Empresa
              </button>
              {isCorpOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link href="/sobre-a-Petropipe" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sobre a Petropipe</Link>
                    </li>
                    <li>
                      <Link href="/unidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Unidades</Link>
                    </li>
                    <li>
                      <Link href="/qualidade" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Qualidade</Link>
                    </li>
                    <li>
                      <Link href="/planos-de-financiamento" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Planos de Financiamento</Link>
                    </li>
                    <li>
                      <Link href="/compliance-lgpd" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Compliance e LGPD</Link>
                    </li>
                    <li>
                      <Link href="/ouvidoria" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ouvidoria</Link>
                    </li>
                    <li>
                      <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</Link>
                    </li>
                    <li>
                      <Link href="/trabalhe-conosco" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Trabalhe conosco</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Logo: substitua '/images/logo.png' pelo caminho da sua imagem em public/ */}
            <div className="flex items-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Petropipe"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
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
                {/* Linha animada embaixo do link */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
              </Link>

              {/* Menu dropdown com fundo blur e animação */}
              {isProductsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm border rounded-md shadow-lg z-50 
                    animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <ul className="py-2">
                    <li>
                      <Link href="/produtos/tubos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Tubos
                      </Link>
                    </li>
                    <li>
                      <Link href="/produtos/conexoes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Conexões
                      </Link>
                    </li>
                    <li>
                      <Link href="/produtos/valvulas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Válvulas
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link 
              href="/sobre" 
              className={`group relative inline-flex items-center transition-colors duration-200
                ${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
            </Link>
            <Link 
              href="/contato" 
              className={`group relative inline-flex items-center transition-colors duration-200
                ${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
            </Link>
          </nav>

          {/* Botão do menu mobile com fundo hover */}
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

        {/* Menu mobile com fundo blur e animação */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className={`md:hidden fixed inset-x-0 top-20 p-4 
              ${isScrolled ? "bg-white/95" : "bg-gray-900"} 
              backdrop-blur-sm border-t border-gray-200/20 animate-in slide-in-from-top duration-200`}
          >
            <div className="pt-2 pb-3 space-y-1">
              {/* Menu Empresa com expansão suave */}
              <div>
                <button
                  onClick={() => setIsCorpMobileOpen(!isCorpMobileOpen)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors
                    ${isScrolled 
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/80" 
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                    }`}
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
                    <Link href="/sobre-a-acotubo" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Sobre a Petropipe</Link>
                    <Link href="/unidades" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Unidades</Link>
                    <Link href="/qualidade" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Qualidade</Link>
                    <Link href="/planos-de-financiamento" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Planos de Financiamento</Link>
                    <Link href="/compliance-lgpd" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Compliance e LGPD</Link>
                    <Link href="/ouvidoria" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Ouvidoria</Link>
                    <Link href="/blog" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Blog</Link>
                    <Link href="/trabalhe-conosco" className={`${isScrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-200"} block px-3 py-2`}>Trabalhe conosco</Link>
                  </div>
                )}
              </div>

              {/* Produtos - mobile expand/collapse */}
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
                    <Link href="/produtos/tubos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tubos</Link>
                    <Link href="/produtos/conexoes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Conexões</Link>
                    <Link href="/produtos/valvulas" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Válvulas</Link>
                  </div>
                )}
              </div>

              <Link
                href="/sobre"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Sobre Nós
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}