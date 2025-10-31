'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCorpOpen, setIsCorpOpen] = useState(false);
  const [isCorpMobileOpen, setIsCorpMobileOpen] = useState(false);

  const corpTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (corpTimeoutRef.current) clearTimeout(corpTimeoutRef.current);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
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
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
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
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2">
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

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Petropipe
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
              <Link href="/produtos" className="text-gray-700 hover:text-blue-600">
                Produtos
              </Link>

              {/* Dropdown */}
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
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

            <Link href="/sobre" className="text-gray-700 hover:text-blue-600">
              Sobre Nós
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Empresa (mobile expand/collapse) */}
              <div>
                <button
                  onClick={() => setIsCorpMobileOpen(!isCorpMobileOpen)}
                  className="w-full text-left px-3 py-2 flex items-center justify-between text-gray-700 hover:text-blue-600"
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
                  <div className="pl-4">
                    <Link href="/sobre-a-acotubo" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre a Petropipe</Link>
                    <Link href="/unidades" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Unidades</Link>
                    <Link href="/qualidade" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Qualidade</Link>
                    <Link href="/planos-de-financiamento" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Planos de Financiamento</Link>
                    <Link href="/compliance-lgpd" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Compliance e LGPD</Link>
                    <Link href="/ouvidoria" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Ouvidoria</Link>
                    <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
                    <Link href="/trabalhe-conosco" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Trabalhe conosco</Link>
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