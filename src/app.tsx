import { useState } from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdLocationOn, MdMail } from 'react-icons/md'

export const App = () => {

    const [showMapa, setShowMapa] = useState(false)
    const [showValores, setShowValores] = useState(false)

    return (
        <div className="h-screen w-screen">
            <div className="bg-bgImage h-full w-full justify-start
            py-32 items-center flex flex-col gap-2">

                <div className="h-52 w-52 border-white border-2 rounded-full flex justify-center items-center">
                    <img src={'src/assets/logo-transparent.png'} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center my-4 gap-2'>
                    <h1 className='text-white font-bold text-2xl'>
                        @mrparauapebas
                    </h1>

                    <h1 className='max-md:text-xl text-4xl text-white flex flex-row'>
                        <span className='font-bold mr-2'>
                            Se é
                        </span>
                        <span className='text-orange-400 font-bold'>
                            sucesso
                        </span>
                        <span className='font-bold'>
                            , a MR entende!
                        </span>
                    </h1>
                    <span className='text-white font-bold text-4xl max-md:text-xl'>#PadrãoMR</span>
                </div>


                <a href='https://contate.me/mreventosparauapebas' className="flex bg-white p-2 rounded-lg gap-2 text-black max-md:text-sm">
                    <span>RESERVE SEU CAMAROTE - Pai da Seresta</span>
                </a>

                <a href='https://www.suamusica.com.br/milannecristina/cd-evoney-fernandes-seu-osmar-mr-eventos-at-mrparauapebas-fevereiro' className="flex bg-white p-2 rounded-lg gap-2 text-black mt-2 max-md:text-sm">
                    <span>BAIXE O CD PROMOCIONAL MR EVENTOS (Evoney Fernandes - Seu Osmar)</span>
                </a>

                <div onClick={() => { setShowMapa(!showMapa) }} className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium mt-2">
                    <span>MAPA SHOW SEU OSMAR #10.Março</span>
                </div>

                <div className={`flex m-0 p-0 duration-300 ${showMapa ? 'h-[600px] w-[600px]' : 'h-0 w-0'}`}>
                    <img src="src/assets/Mapa-Evento.png" alt="" />
                </div>

                <div onClick={() => { setShowValores(!showValores) }} className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium">
                    <span>Valores e Pontos de vendas - Evoney Fernandes (Seu Osmar)</span>
                </div>
                <div className={`flex duration-300 ${showValores ? 'h-[600px] w-[600px]' : 'h-0 w-0'}`}>
                    <img src="src/assets/valores.jpeg" alt="" />
                </div>

                <footer className="bottom-0 text-white mb-10 flex flex-col">
                    <div className='flex gap-4 items-center justify-center'>
                        <a href="https://www.instagram.com/mrparauapebas/" className='text-white'>
                            <BsInstagram size={30} />
                        </a>
                        <a href="https://www.facebook.com/mrparauapebas/" className='text-white'>
                            <BsFacebook size={30} />
                        </a>
                        <a href="https://contate.me/mreventosparauapebas" className='text-white'>
                            <BsWhatsapp size={30} />
                        </a>
                        <a href="" className='text-white'>
                            <MdMail size={30} />
                        </a>
                        <a href="https://goo.gl/maps/5ytiWhN4FkSHCDKq5" className='text-white'>
                            <MdLocationOn size={30} />
                        </a>
                    </div>
                    <div className='w-screen px-6 flex flex-col my-2'>
                        <span>
                            MR Eventos
                        </span>
                        <span>
                            Rua 4, esquina com a rua B. Cidade Nova, Parauapebas - PA, 68515000.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}