"use client";

import { useEffect, useRef, useState } from "react";

export default function Banner() {
  // Lista de imagens do banner (coloque os arquivos em public/images/banner/)
  const images: string[] = [
    "/images/banner/slide1.jpg",
    "/images/banner/slide2.jpg",
    "/images/banner/slide3.png",
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const touchStartX = useRef<number | null>(null);

  

  // Re-run autoplay when isPaused changes
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length]);

  // Parallax: compute small transforms based on pointer position inside the banner
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      pointerRef.current = { x, y };
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const factor = 10; // quanto maior, maior o movimento
        setParallax({ x: pointerRef.current.x * factor, y: pointerRef.current.y * factor });
      });
    };

    const onLeave = () => {
      // suavemente volta ao centro
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setParallax({ x: 0, y: 0 }));
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onLeave);

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches?.[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        const endX = e.changedTouches?.[0]?.clientX ?? null;
        if (touchStartX.current !== null && endX !== null) {
          const diff = touchStartX.current - endX;
          const threshold = 40; // swipe mínimo
          if (diff > threshold) goNext();
          else if (diff < -threshold) goPrev();
        }
        touchStartX.current = null;
      }}
       className="relative max-w-7xl mx-auto h-[600px] mt-28 pt-6 overflow-hidden rounded-xl shadow-lg before:absolute before:inset-x-0 before:top-0 before:h-12 before:bg-gradient-to-b before:from-gray-900/10 before:via-gray-900/5 before:to-transparent before:z-10"
    >
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={i !== index}
        />
      ))}

      {/* Camada de overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent z-10" />

      {/* Camadas decorativas com movimento parallax (SVG simples embutidos para evitar dependência de imagens) */}
      <svg
        className="absolute left-8 top-24 w-40 h-40 opacity-80 z-15 pointer-events-none"
        style={{ transform: `translate(${parallax.x * 0.6}px, ${parallax.y * 0.6}px)` }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="50" cy="50" r="50" fill="rgba(99,102,241,0.12)" />
      </svg>

      <svg
        className="absolute right-12 bottom-28 w-56 h-56 opacity-70 z-15 pointer-events-none"
        style={{ transform: `translate(${parallax.x * -0.8}px, ${parallax.y * -0.8}px)` }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="0" y="0" width="100" height="100" rx="20" fill="rgba(59,130,246,0.08)" />
      </svg>

      {/* Conteúdo por cima das imagens */}
      <div className="relative z-20 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Soluções em Aço Inox
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Tubos e conexões de alta qualidade para suas necessidades industriais.
          Produtos certificados e com garantia de durabilidade.
        </p>
        <div className="mt-16 sm:mt-20">
          <a
            href="/produtos"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
          >
            Conheça Nossos Produtos
          </a>
        </div>
      </div>

      {/* Controles (prev/next) */}
      <button
        onClick={goPrev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-30"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Próximo"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-30"
      >
        ›
      </button>

      {/* Dots */}
  <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-opacity ${
              i === index ? "bg-white opacity-100" : "bg-white/60 opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}