"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CustomCarrousel } from "@/components/custom-carrossel";
import { motion } from "motion/react";
import Image from "next/image";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Services } from "@/components/services";
import { BoxReveal } from "@/components/magicui/box-reveal";

// rgba(15,164,220) // #0fa4dc // azul
// rgba(203,43,55) #cb2b37 // vermelho

export default function Home() {
  return (
    <div className="font-sans margin-auto w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center md:pb-20">
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

        <div className="mt-10 md:mt-20 relative flex w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll defaultVelocity={0.075} numRows={2}>
            Camisetas Personalizadas | Bonés Personalizados | Uniformes
            Personalizados | Coletes Personalizados | Polos Personalizados
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>

        <motion.div
          className="relative w-full flex flex-col items-center justify-center mt-10 md:mt-20"
          initial={{ opacity: 0, y: +100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCarrousel />
        </motion.div>

        <Services />

        <div className="w-full bg-black text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <BoxReveal
              boxColor={"rgba(203,43,55, 1)"}
              duration={0.5}
              width="100%"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 mx-auto text-center w-full">
                Pronto para Personalizar seus Produtos?
              </h2>
            </BoxReveal>

            <BoxReveal
              boxColor={"rgba(203,43,55, 1)"}
              duration={0.5}
              width="100%"
            >
              <p className="text-lg md:text-xl mb-8">
                Oferecemos personalização de alta qualidade para camisetas,
                bonés, uniformes e muito mais. Garantimos a melhor qualidade e
                entrega rápida. Entre em contato agora mesmo e faça seu pedido!
              </p>
            </BoxReveal>
            <BoxReveal
              boxColor={"rgba(203,43,55, 1)"}
              duration={1.1}
              width="100%"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5511963620291&amp;text=Olá, tudo bem?"
                target="_blank"
                passHref
              >
                <button className="custom-btn">
                  <p className="text-[1.2rem] md:text-xl">
                    Faça seu pedido agora
                  </p>
                  <ArrowRightIcon />
                </button>
              </Link>
            </BoxReveal>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
