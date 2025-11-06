"use client";



import { useMemo } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

import type { ISourceOptions } from "@tsparticles/engine";

import { useEffect, useState } from "react";



export default function BackgroundParticles() {

  const [init, setInit] = useState(false);



  // inicializa o engine

  useEffect(() => {

    initParticlesEngine(async (engine) => {

      await loadSlim(engine);

    }).then(() => {

      setInit(true);

    });

  }, []);



  // configuração das partículas

  const options: ISourceOptions = useMemo(

  () => ({

    background: {

      color: { value: "transparent" },

    },

    fullScreen: { enable: false },

    fpsLimit: 60,

    interactivity: {

      events: {

        onHover: { enable: true, mode: "repulse" },

        resize: { enable: true },

      },

      modes: { repulse: { distance: 300, duration: 0.4 } },

    },

    particles: {

      color: { value: "#ffffffff" },

      links: {

        color: "#ffffffff",

        distance: 150,

        enable: true,

        width: 1,

      },

      move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },

      number: { value: 100, density: { enable: true, area: 100 } },

      opacity: { value: 0.2 },

      shape: { type: "circle" },

      size: { value: { min: 1, max: 3 } },

    },

    detectRetina: true,

  }),

  []

);



  if (!init) return null;



  return (

    <Particles

      id="tsparticles"

      options={options}

      className="absolute inset-0 z-0"

    />

  );

}