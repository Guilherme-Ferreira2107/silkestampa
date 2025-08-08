"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { InstagramIcon, PhoneIcon, XIcon } from "lucide-react";
import { IconAnimation } from "./icon-animation";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
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

        <div className="block lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden lg:block">
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

      <motion.div
        className={`${
          open ? "block" : "hidden"
        } lg:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 transition-all duration-300`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <IconAnimation
          className={`absolute left-0 top-20 z-10`}
          size={120}
          color={`text-[#cb2b37]`}
          variant="x"
        />

        <IconAnimation
          className={`absolute right-10 bottom-10 z-10`}
          size={80}
          color={`text-[#cb2b37]`}
          variant="triangle"
        />

        <div className="absolute top-4 right-4 z-51">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl cursor-pointer"
          >
            <XIcon />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-8 text-white text-2xl">
            <li className="relative group">
              <Link href="/#servicos" className="hover:text-[#cb2b37]">
                Serviços
              </Link>
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cb2b37] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/#sobre" className="hover:text-[#cb2b37]">
                História
              </Link>
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cb2b37] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/#contato" className="hover:text-[#cb2b37]">
                Contatos
              </Link>
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cb2b37] group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </nav>

        {/* Social Media and Contact Buttons in Footer */}
        <div className="absolute bottom-10 w-full px-4">
          <div className="flex justify-center gap-4">
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/silkestampa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl p-2 border border-white rounded-lg hover:bg-[#C13584] transition duration-300"
            >
              <InstagramIcon size={24} />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://api.whatsapp.com/send?phone=5511963620291&text=Olá, tudo bem?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl p-2 border border-white rounded-lg hover:bg-[#128C7E] transition duration-300"
            >
              <PhoneIcon size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
