import Link from "next/link";
import { BoxReveal } from "./magicui/box-reveal";
import PixelImageComponent from "./magicui/custom-pixel-image";
import { ArrowRightIcon } from "lucide-react";
import { IconAnimation } from "./icon-animation";

export const Hero = () => {
  return (
    <section className="w-full relative">
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
            <div className="flex flex-col items-start justify-between gap-30 bg-white px-10 rounded-lg relative z-20">
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

              <BoxReveal boxColor={"#cb2b37"} duration={0.9}>
                <div className="max-w-[360px]">
                  <p className="text-[1.2rem]">
                    {"''"}Profissionalismo sem igual, uma equipe dedicada e
                    apaixonada pelo que faz!{"''"}
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

      <IconAnimation
        className={`absolute right-10 top-1/2 z-20`}
        size={80}
        color={`text-[#cb2b37]`}
        variant="triangle"
      />

      <IconAnimation
        className={`absolute left-150 top-20 z-10`}
        size={120}
        color={`text-[#cb2b37]`}
        variant="x"
      />

      <IconAnimation
        className={`absolute bottom-[-20] left-1/2`}
        size={60}
        color={`text-[#cb2b37]`}
        variant="square"
      />
    </section>
  );
};
