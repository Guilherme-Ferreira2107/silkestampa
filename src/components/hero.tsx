import Link from "next/link";
import { BoxReveal } from "./magicui/box-reveal";
import PixelImageComponent from "./magicui/custom-pixel-image";
import { ArrowRightIcon } from "lucide-react";
import { IconAnimation } from "./icon-animation";

export const Hero = () => {
  return (
    <section className="w-full relative">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        <div className="custom-image-hero w-full sm:col-span-1 max-w-[600px] mx-auto sm:mx-0">
          <PixelImageComponent
            src="/3.jpg"
            grayscaleAnimation
            pixelFadeInDuration={1100}
          />
        </div>

        <div className="w-full sm:col-span-2 border sm:p-4">
          <div className="grid grid-cols text-[1.5rem] items-center sm:justify-end text-black gap-10 py-10 sm:p-10">
            <div className="w-full flex flex-col items-start justify-between gap-10 sm:gap-30 bg-white rounded-lg relative z-20 px-4 sm:px-10">
              <div>
                <BoxReveal boxColor={"rgba(203,43,55, 1)"} duration={0.5}>
                  <h1 className="text-[2.0rem] md:text-[4.5rem] font-semibold">
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

              <BoxReveal boxColor={"#cb2b37"} duration={0.9}>
                <div className="max-w-[360px]">
                  <p className="text-[1rem] sm:text-[1.2rem]">
                    {"''"}Profissionalismo sem igual, uma equipe dedicada e
                    apaixonada pelo que faz.{"''"}
                  </p>
                  <p className="text-[0.8rem] md:text-sm text-right mt-2">
                    - CEO da M3 Digital Solutions
                  </p>
                  <br />
                </div>
              </BoxReveal>

              <BoxReveal
                boxColor={"rgba(203,43,55, 1)"}
                duration={1.1}
                width="100%"
              >
                <Link href="/servicos" passHref>
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
        </div>
      </div>

      <IconAnimation
        className={`absolute right-10 top-1/2 z-20 hidden md:block`}
        size={80}
        color={`text-[#cb2b37]`}
        variant="triangle"
      />

      <IconAnimation
        className={`absolute left-150 top-20 z-10 hidden md:block`}
        size={120}
        color={`text-[#cb2b37]`}
        variant="x"
      />

      <IconAnimation
        className={`absolute bottom-[-20] left-1/2 hidden md:block`}
        size={60}
        color={`text-[#cb2b37]`}
        variant="square"
      />
    </section>
  );
};
