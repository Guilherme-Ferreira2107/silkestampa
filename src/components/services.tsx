import {
  ArrowRightIcon,
  Building2Icon,
  HatGlassesIcon,
  ShirtIcon,
  StethoscopeIcon,
  VolleyballIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export const Services = () => {
  return (
    <div className="max-w-6xl w-full px-4 md:px-0 mt-20 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">NOSSOS SERVIÇOS</h2>
        <p className="mb-8">
          Oferecemos uma ampla gama de serviços de estamparia, incluindo
          camisetas personalizadas, bonés personalizados, uniformes, coletes e
          polos personalizados.
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=5511963620291&amp;text=Olá, tudo bem?"
          target="_blank"
          passHref
        >
          <div className="max-w-[200px]">
            <button className="custom-btn">
              <p className="text-[0.8rem]">SAIBA MAIS</p>
              <ArrowRightIcon />
            </button>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="group relative p-6 bg-white border border-gray-200 rounded-lg hover:bg-cover hover:bg-center hover:bg-[url('/img1.jpeg')] hover:text-white transition-all duration-300"
      >
        <ShirtIcon className="text-[#cb2b37] w-10 h-10 mb-4 group-hover:text-white group-hover:bg-blue-500/80 group-hover:rounded-full group-hover:p-2 transition-all duration-300" />

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 py-2 transition-all duration-300">
          <h3 className="text-xl font-semibold">Camisetas Personalizadas</h3>
        </div>

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 group-hover:py-2 group-hover:mt-2 transition-all duration-300">
          <p className="mt-2 text-sm">
            Camisetas de algodão, polos e muito mais, para todas as ocasiões,
            com qualidade e design exclusivo.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative p-6 bg-white border border-gray-200 rounded-lg bg-[url('/img3.jpeg')] text-white bg-cover bg-center"
      >
        <StethoscopeIcon className="text-white w-10 h-10 mb-4 bg-blue-500/80 rounded-full p-2" />

        <div className="bg-blue-500/80 bg-opacity-50 py-2">
          <h3 className="text-xl font-semibold">Uniformes Personalizados</h3>
        </div>
        <div className="bg-blue-500/80 bg-opacity-50 py-2 mt-2">
          <p className="mt-2 text-sm">
            Criamos uniformes para empresas, escolas, eventos e equipes
            esportivas, sempre focando no conforto e estilo.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="group relative p-6 bg-white border border-gray-200 rounded-lg hover:bg-cover hover:bg-center hover:bg-[url('/img1.jpeg')] hover:text-white transition-all duration-300"
      >
        <VolleyballIcon className="text-[#cb2b37] w-10 h-10 mb-4 group-hover:text-white group-hover:bg-blue-500/80 group-hover:rounded-full group-hover:p-2 transition-all duration-300" />

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 py-2 transition-all duration-300">
          <h3 className="text-xl font-semibold">Coletes Personalizados</h3>
        </div>

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 group-hover:py-2 group-hover:mt-2 transition-all duration-300">
          <p className="mt-2 text-sm">
            Coletes personalizados para eventos, equipes de trabalho e
            atividades ao ar livre. Qualidade e durabilidade garantidas.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="group relative p-6 bg-white border border-gray-200 rounded-lg hover:bg-cover hover:bg-center hover:bg-[url('/img1.jpeg')] hover:text-white transition-all duration-300"
      >
        <HatGlassesIcon className="text-[#cb2b37] w-10 h-10 mb-4 group-hover:text-white group-hover:bg-blue-500/80 group-hover:rounded-full group-hover:p-2 transition-all duration-300" />

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 py-2 transition-all duration-300">
          <h3 className="text-xl font-semibold">Bonés Personalizados</h3>
        </div>

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 group-hover:py-2 group-hover:mt-2 transition-all duration-300">
          <p className="mt-2 text-sm">
            Bonés personalizados para promoções de marcas, eventos ou para uso
            pessoal, com diversas opções de modelos e cores.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="group relative p-6 bg-white border border-gray-200 rounded-lg hover:bg-cover hover:bg-center hover:bg-[url('/img1.jpeg')] hover:text-white transition-all duration-300"
      >
        <Building2Icon className="text-[#cb2b37] w-10 h-10 mb-4 group-hover:text-white group-hover:bg-blue-500/80 group-hover:rounded-full group-hover:p-2 transition-all duration-300" />

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 py-2 transition-all duration-300">
          <h3 className="text-xl font-semibold">Para Empresas</h3>
        </div>

        <div className="group-hover:bg-blue-500/80 group-hover:bg-opacity-50 group-hover:py-2 group-hover:mt-2 transition-all duration-300">
          <p className="mt-2 text-sm">
            Soluções de estamparia para promover sua marca e fortalecer a
            identidade corporativa, com qualidade e eficiência.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
