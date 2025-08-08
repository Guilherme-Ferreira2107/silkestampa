"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { IconAnimation } from "@/components/icon-animation";

// rgba(15,164,220) // azul
// rgba(203,43,55) #cb2b37 // vermelho

export default function Home() {
  return (
    <div className="font-sans margin-auto w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center pb-20">
          <Header />
          <Hero />
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-4">
          <VelocityScroll defaultVelocity={0.075} numRows={2}>
            Camisetas Personalizadas | Bonés Personalizados | Uniformes
            Personalizados | Coletes Personalizados | Polos Personalizados |
            Uniformes Personalizados
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </main>
    </div>
  );
}
