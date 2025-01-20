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
      className="flex bg-white p-2 rounded-lg gap-2 text-black max-md:text-sm hover:bg-gradient-to-r from-orange-700 
             via-orange-500 to-orange-300 transition-all hover:text-black mt-2"
    >
      <span>{text}</span>
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
    <>
      <div
        onClick={() => {
          setShowMapa(!showMapa);
        }}
        className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium  hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black mt-2"
      >
        <span>{text}</span>
      </div>

      <div
        className={`flex p-0 duration-300 justify-center ${
          showMapa ? ' my-4  w-[80vw] md:w-[80%] ' : 'h-0 w-0'
        }`}
      >
        <img src={link} alt="" />
      </div>
    </>
  );
};

export const App = () => {
  return (
    <div className="bg-bgImage h-screen min-h-screen w-screen overflow-auto flex">
      <div
        className="  h-screen w-full justify-between
            pt-20 items-center flex flex-col gap-2 max-md:px-5"
      >
        <div className=" w-full justify-start items-center flex flex-col gap-2">
          <div className="h-52 w-52 border-white border-2 rounded-full flex justify-center items-center">
            <img src={'logo-transparent.png'} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center my-4 gap-2">
            <h1 className="text-white font-bold text-2xl">@mrparauapebas</h1>

            <h1 className="max-md:text-2xl text-4xl text-white flex flex-row">
              <span className="font-bold mr-2">Se é</span>
              <span className="text-orange-400 font-bold">sucesso</span>
              <span className="font-bold">, a MR entende!</span>
            </h1>
            <span className="text-white font-bold text-4xl max-md:text-2xl">
              #PadrãoMR
            </span>
          </div>
          <ExpansibleBanner
            text="Mapa Divas do Pará (Joelma, Fruto Sensual e Zaynara)"
            link="mapa.jpeg"
          />
          <ExpansibleBanner
            text="Pontos de vendas físicos"
            link="pontos_de_venda.jpeg"
          />
          <LinkButton
            link="https://www.stingressos.com.br/eventos/festival-divas-do-para-parauapebas"
            text="Ingressso On-line Divas do Pará (Joelma, Fruto Sensual e Zaynara)"
          />
          <LinkButton
            link="https://drive.google.com/file/d/1HHvuyz9dVe6YHbAyQG4NJ8W1C32ME-eU/view"
            text="Autorização menores 16 anos à 18 anos"
          />
          <LinkButton
            link="https://contate.me/mreventosparauapebas"
            text="Compre seu Lounge Camarote Divas do Pará (Joelma, Fruto Sensual e Zaynara)"
          />
        </div>
        <footer className=" text-white mb-10 flex flex-col">
          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://www.instagram.com/mrparauapebas/"
              className="text-white"
            >
              <BsInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com/mrparauapebas/"
              className="text-white"
            >
              <BsFacebook size={30} />
            </a>
            <a
              href="https://contate.me/mreventosparauapebas"
              className="text-white"
            >
              <BsWhatsapp size={30} />
            </a>
            <a href="" className="text-white">
              <MdMail size={30} />
            </a>
            <a
              href="https://goo.gl/maps/5ytiWhN4FkSHCDKq5"
              className="text-white"
            >
              <MdLocationOn size={30} />
            </a>
          </div>
          <div className="w-screen px-6 flex flex-col my-2">
            <span>MR Eventos</span>
            <span>
              Rua 4, esquina com a rua B. Cidade Nova, Parauapebas - PA,
              68515000.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
