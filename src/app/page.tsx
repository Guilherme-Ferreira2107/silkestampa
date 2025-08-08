"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CustomCarrousel } from "@/components/custom-carrossel";
import { motion } from "motion/react";
import { InstagramIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

// rgba(15,164,220) // #0fa4dc // azul
// rgba(203,43,55) #cb2b37 // vermelho

export default function Home() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="font-sans margin-auto w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center pb-20">
          <Header />
          <Hero />
        </div>

        <div>
          <a
            href="https://www.instagram.com/silkestampa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl p-2 border border-white rounded-lg hover:bg-[#C13584] transition duration-300"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp Icon"
              width={50}
              height={50}
              className="fixed bottom-4 right-4 z-50 cursor-pointer"
            />
          </a>
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

        <footer className="w-full bg-[#cb2b37] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
            <div className="flex gap-6 mb-6">
              <a
                href="https://www.instagram.com/silkestampa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl p-2 border border-white rounded-lg hover:bg-[#C13584] transition duration-300"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511963620291&text=Olá, tudo bem?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl p-2 border border-white rounded-lg hover:bg-[#128C7E] transition duration-300"
              >
                <PhoneIcon size={24} />
              </a>
            </div>
            <p className="text-lg">
              &copy; {currentYear} SilkEstampa. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
