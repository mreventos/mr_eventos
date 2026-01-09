import { useState } from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdLocationOn, MdMail } from 'react-icons/md';

interface LinkButtonProps {
  text: string;
  link: string;
}

const LinkButton = ({ text, link }: LinkButtonProps) => {
  return (
    <a
      href={link}
      className="group relative flex bg-gradient-to-r from-white to-gray-50 p-4 rounded-xl gap-3 text-gray-800 w-full max-w-3xl 
                 max-md:text-sm hover:from-orange-500 hover:via-orange-400 hover:to-orange-300 
                 transition-all duration-300 hover:text-white mt-3 shadow-lg hover:shadow-2xl 
                 hover:scale-105 transform border border-orange-200 hover:border-orange-400
                 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10 font-semibold flex items-center gap-2">
        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" 
             fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 
                1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                clipRule="evenodd" />
        </svg>
        {text}
      </span>
    </a>
  );
};

interface ExpansibleBannerProps {
  text: string;
  link: string;
}

const ExpansibleBanner = ({ text, link }: ExpansibleBannerProps) => {
  const [showMapa, setShowMapa] = useState(false);
  return (
    <div className="w-full max-w-3xl">
      <button
        onClick={() => setShowMapa(!showMapa)}
        className="group w-full relative flex items-center justify-between bg-gradient-to-r from-white 
                   to-gray-50 p-4 rounded-xl gap-3 text-gray-800 cursor-pointer font-semibold 
                   hover:from-orange-500 hover:via-orange-400 hover:to-orange-300 
                   transition-all duration-300 hover:text-white mt-3 shadow-lg hover:shadow-2xl 
                   border border-orange-200 hover:border-orange-400 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10 text-left flex-1">{text}</span>
        <svg 
          className={`relative z-10 w-6 h-6 transition-transform duration-300 ${
            showMapa ? 'rotate-180' : ''
          }`}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 
                   0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showMapa ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex justify-center w-full">
          <img 
            src={link} 
            alt="Mapa" 
            className="w-[90vw] md:w-[80%] rounded-xl shadow-2xl border-4 border-orange-300 
                       hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <div className="bg-bgImage bg-cover bg-center bg-fixed bg-no-repeat h-screen min-h-screen w-screen overflow-auto flex relative">
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <div className="relative z-10 h-screen w-full justify-between pt-20 items-center flex flex-col gap-2 max-md:px-5">
        <div className="w-full max-w-4xl justify-start items-center flex flex-col gap-2 animate-fadeIn px-4">
          {/* Logo com animação e efeitos */}
          <div className="relative h-56 w-56 mb-4 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full 
                            blur-2xl opacity-50 animate-pulse" />
            <div className="relative h-52 w-52 border-white border-4 rounded-full flex justify-center items-center 
                            bg-white/10 backdrop-blur-sm shadow-2xl hover:scale-110 transition-transform duration-300
                            mx-auto mt-2">
              <img src={'logo-transparent.png'} alt="MR Eventos" className="p-2" />
            </div>
          </div>
          
          {/* Título e slogan com gradientes e animações */}
          <div className="flex flex-col justify-center items-center my-6 gap-3">
            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 
                            shadow-lg hover:scale-105 transition-transform duration-300">
              <h1 className="text-white font-bold text-2xl tracking-wide">@mrparauapebas</h1>
            </div>

            <h1 className="max-md:text-2xl text-4xl text-white flex flex-row flex-wrap justify-center 
                           text-center gap-2 px-4">
              <span className="font-bold drop-shadow-lg">Se é</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 
                               to-yellow-300 font-bold drop-shadow-lg animate-gradient">
                sucesso
              </span>
              <span className="font-bold drop-shadow-lg">, a MR entende!</span>
            </h1>
            
            <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-8 py-3 
                            rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-4xl max-md:text-2xl drop-shadow-md">
                #PadrãoMR
              </span>
            </div>
          </div>
          <ExpansibleBanner
            text="Mapa Zé Neto & Cristiano / Felipe Amorim"
            link="mapa.jpeg"
          />
          <ExpansibleBanner
            text="Pontos de Vendas Físicos Zé Neto & Cristiano / Felipe Amorim"
            link="pontos_de_venda.jpeg"
          />
          <LinkButton
            link="https://beta.meubilhete.com.br/aniversario-15-anos-mr-eventos-13-03-2026"
            text="Ingressos Online Zé Neto & Cristiano / Felipe Amorim"
          />
          <LinkButton
            link="https://drive.google.com/file/d/1HHvuyz9dVe6YHbAyQG4NJ8W1C32ME-eU/view?usp=sharing"
            text="Autorização menores 16 anos à 18 anos"
          />
          <LinkButton
            link="https://contate.me/mreventosparauapebas"
            text="Compre seu Camarote Lounge & Tapete Vermelho"
          />
        </div>
        
        {/* Footer moderno com gradiente e animações */}
        <footer className="text-white mb-10 flex flex-col items-center w-full max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 w-full">
            <div className="flex gap-6 items-center justify-center mb-4 flex-wrap">
              <a
                href="https://www.instagram.com/mrparauapebas/"
                className="text-white hover:text-orange-400 transform hover:scale-125 transition-all 
                           duration-300 hover:rotate-12 bg-white/10 p-3 rounded-full hover:bg-orange-500"
                aria-label="Instagram"
              >
                <BsInstagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/mrparauapebas/"
                className="text-white hover:text-orange-400 transform hover:scale-125 transition-all 
                           duration-300 hover:rotate-12 bg-white/10 p-3 rounded-full hover:bg-orange-500"
                aria-label="Facebook"
              >
                <BsFacebook size={28} />
              </a>
              <a
                href="https://contate.me/mreventosparauapebas"
                className="text-white hover:text-orange-400 transform hover:scale-125 transition-all 
                           duration-300 hover:rotate-12 bg-white/10 p-3 rounded-full hover:bg-green-500"
                aria-label="WhatsApp"
              >
                <BsWhatsapp size={28} />
              </a>
              <a 
                href="mailto:contato@mreventos.com" 
                className="text-white hover:text-orange-400 transform hover:scale-125 transition-all 
                           duration-300 hover:rotate-12 bg-white/10 p-3 rounded-full hover:bg-orange-500"
                aria-label="Email"
              >
                <MdMail size={28} />
              </a>
              <a
                href="https://goo.gl/maps/5ytiWhN4FkSHCDKq5"
                className="text-white hover:text-orange-400 transform hover:scale-125 transition-all 
                           duration-300 hover:rotate-12 bg-white/10 p-3 rounded-full hover:bg-red-500"
                aria-label="Localização"
              >
                <MdLocationOn size={28} />
              </a>
            </div>
            
            <div className="border-t border-white/20 pt-4 mt-2">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="font-bold text-lg text-orange-300">MR Eventos</span>
                <span className="text-sm text-white/90 max-w-md">
                  Rua 4, esquina com a rua B. Cidade Nova, Parauapebas - PA, 68515-000
                </span>
                <span className="text-xs text-white/70 mt-2">
                  © 2026 MR Eventos - Todos os direitos reservados
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
