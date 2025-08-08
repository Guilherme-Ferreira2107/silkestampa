import { InstagramIcon, PhoneIcon } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
  );
};
