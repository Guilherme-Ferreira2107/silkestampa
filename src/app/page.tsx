"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CustomCarrousel } from "@/components/custom-carrossel";
import { motion } from "motion/react";

// rgba(15,164,220) // #0fa4dc // azul
// rgba(203,43,55) #cb2b37 // vermelho

export default function Home() {
  return (
    <div className="font-sans margin-auto w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center pb-20">
          <Header />
          <Hero />
        </div>

        <div className=" mt-20 relative flex w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll defaultVelocity={0.075} numRows={2}>
            Camisetas Personalizadas | Bonés Personalizados | Uniformes
            Personalizados | Coletes Personalizados | Polos Personalizados |
            Uniformes Personalizados
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>

        <motion.div
          className="relative w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: +100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCarrousel />
        </motion.div>
      </main>
    </div>
  );
}
