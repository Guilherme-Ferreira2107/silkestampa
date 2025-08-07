"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ArrowRightIcon, SquareIcon, TriangleIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import PixelImageComponent from "@/components/magicui/custom-pixel-image";

// rgba(15,164,220) // azul
// rgba(203,43,55) // vermelho

export default function Home() {
  return (
    <div className="font-sans margin-auto w-full flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center pb-20">
          <header className="w-full flex items-center justify-center bg-black px-4">
            <div className="flex items-center justify-between w-full max-w-6xl text-white">
              <div>
                <Link href="/">
                  <Image
                    src={"/logo-250.webp"}
                    alt="Logo SilkEstampa"
                    width={80}
                    height={80}
                  />
                </Link>
              </div>
              <nav>
                <ul className="flex gap-12">
                  <li>
                    <Link href="/#servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link href="/#sobre">História</Link>
                  </li>
                  <li>
                    <Link href="/#contato">Contatos</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <section className="w-full">
            <div className="w-full grid grid-cols-3">
              <div className="custom-image-hero w-[600px]">
                <PixelImageComponent
                  src="/3.jpg"
                  grayscaleAnimation
                  pixelFadeInDuration={1100}
                />
              </div>

              <div className="w-full col-span-2 border">
                <div className="grid grid-cols text-[1.5rem] items-center justify-end text-black gap-10 p-10">
                  <div className="flex flex-col items-start justify-between gap-30">
                    <div>
                      <BoxReveal boxColor={"rgba(203,43,55, 1)"} duration={0.5}>
                        <h1 className="text-[4.5rem] font-semibold">
                          SilkEstampa<span className="text-[#0fa4dcff]">.</span>
                        </h1>
                      </BoxReveal>

                      <BoxReveal boxColor={"rgba(203,43,55, 1)"} duration={0.7}>
                        <h2 className="text-sm">
                          A melhor estamparia de{" "}
                          <span className="text-[#0fa4dcff]">
                            <strong>São Paulo</strong>
                          </span>
                        </h2>
                      </BoxReveal>
                    </div>

                    <BoxReveal boxColor={"rgba(203,43,55, 1)"} duration={0.9}>
                      <div className="max-w-[360px]">
                        <p className="text-[1.2rem]">
                          {"''"}Profissionalismo sem igual, uma equipe dedicada
                          e apaixonada pelo que faz!{"''"}
                        </p>
                        <p className="text-sm text-right mt-2">
                          - CEO da M3 Digital Solutions
                        </p>
                        <br />
                      </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"rgba(203,43,55, 1)"} duration={1.1}>
                      <Link href="/servicos" className="custom-btn">
                        <span>Faça seu pedido agora!</span>
                        <ArrowRightIcon />
                      </Link>
                    </BoxReveal>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatDelay: 10,
          }}
          className={`absolute right-10 top-60`}
        >
          <TriangleIcon size={80} className={`text-[#cb2b37]`} />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatDelay: 10,
          }}
          className={`absolute left-150 top-20`}
        >
          <XIcon size={120} className={`text-[#cb2b37]`} />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className={`absolute bottom-10`}
        >
          <SquareIcon size={60} className={`text-[#cb2b37]`} />
          {/* 0fa4dc */}
          {/* cb2b37 */}
        </motion.div>

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
