"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { XIcon } from "lucide-react";

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
        <div className="absolute top-4 right-4 z-51">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl"
          >
            <XIcon />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-8 text-white text-2xl">
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
      </motion.div>
    </header>
  );
};
