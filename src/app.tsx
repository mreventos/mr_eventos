import { useState } from "react";
import { render } from "react-dom";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdClose, MdLocationOn, MdMail } from "react-icons/md";

export const App = () => {
  const [showMapa, setShowMapa] = useState(false);
  const [showValores, setShowValores] = useState(false);

  //   const MapPopup = (props: any) => {
  //     return (
  //       <div className="fixed h-[80vh] w-[70vw] flex flex-col">
  //         <div className="flex w-full justify-end">
  //           <MdClose
  //             onClick={() => {
  //               setShowMapa(false);
  //             }}
  //             className="text-white cursor-pointer bg-orange-500 rounded-md h-10 w-10 "
  //           />
  //         </div>
  //         <div className="flex h-full w-full overflow-auto items-center justify-center">
  //           {/* <span className=' flex items-center justify-end w-full' >

  //                     </span> */}
  //           {props.children}
  //         </div>
  //       </div>
  //     );
  //   };

  //   const PricesPopup = (props: any) => {
  //     return (
  //       <div className="fixed h-[80vh] w-[70vw] flex flex-col">
  //         <div className="flex w-full justify-end">
  //           <MdClose
  //             onClick={() => {
  //               setShowValores(false);
  //             }}
  //             className="text-white cursor-pointer bg-orange-500 rounded-md h-10 w-10 "
  //           />
  //         </div>
  //         <div className="flex h-full w-full overflow-auto items-center justify-center">
  //           {/* <span className=' flex items-center justify-end w-full' >

  //                     </span> */}
  //           {props.children}
  //         </div>
  //       </div>
  //     );
  //   };

  return (
    <div className="bg-gradient-to-tr from-orange-800 to-black h-screen min-h-screen w-screen overflow-auto flex">
      <div
        className="  h-screen w-full justify-between
            pt-20 items-center flex flex-col gap-2 max-md:px-5"
      >
        <div className=" w-full justify-start items-center flex flex-col gap-2">
          <div className="h-52 w-52 border-white border-2 rounded-full flex justify-center items-center">
            <img src={"logo-transparent.png"} alt="" />
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

          <a
            href="https://contate.me/mreventosparauapebas"
            className="flex bg-white p-2 rounded-lg gap-2 text-black max-md:text-sm hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black"
          >
            <span>RESERVE SEU CAMAROTE - Pai da Seresta</span>
          </a>

          <a
            href="https://www.suamusica.com.br/milannecristina/cd-evoney-fernandes-seu-osmar-mr-eventos-at-mrparauapebas-fevereiro"
            className="flex bg-white p-2 rounded-lg gap-2 text-black max-md:text-sm hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black mt-2"
          >
            <span>
              BAIXE O CD PROMOCIONAL MR EVENTOS (Evoney Fernandes - Seu Osmar)
            </span>
          </a>

          <div
            onClick={() => {
              setShowMapa(!showMapa);
            }}
            className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium  hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black mt-2"
          >
            <span>MAPA SHOW SEU OSMAR #10.Março</span>
          </div>

          <div
            className={`flex p-0 duration-300 ${
              showMapa ? " my-4  w-[80vw] md:w-[40%] " : "h-0 w-0"
            }`}
          >
            <img src="Mapa-Evento.png" alt="" />
          </div>

                    <div
                        onClick={() => {
                            setShowValores(!showValores);
                        }}
                        className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black"
                    >
                        <span>
                            Valores e Pontos de vendas - Evoney Fernandes (Seu Osmar)
                        </span>
                    </div>

                    <div
                        className={`flex  duration-300 ${showValores ? "my-4 h-[80vh] w-[80vw] md:w-[30%]" : "h-0 w-0"
                            }`}
                    >
                        <img src="valores.jpeg" alt="" />
                    </div>
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
