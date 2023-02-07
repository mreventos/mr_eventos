import { useState } from 'react'
import { render } from 'react-dom'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdClose, MdLocationOn, MdMail } from 'react-icons/md'


export const App = () => {

    const [showMapa, setShowMapa] = useState(false)
    const [showValores, setShowValores] = useState(false)



    const MapPopup = (props: any) => {
        return (
            <div className='fixed max-md:w-[350px] max-md:top-[25%] max-md:left-[10%] w-[750px] h-full top-[10%] left-[15%]'>
                <div className='relative w-[85%] m-0 h-auto max-h-[85vh] rounded-[4px] border border-solid border-[#999] overflow-auto'>
                    <span className='cursor-pointer max-md:right-[14%] max-md:top-[26%] fixed right-[17.5%] top-[10.5%] w-[25px] h-[25px] text-white bg-orange-500 rounded-md flex items-center justify-center' onClick={() => { setShowMapa(false) }}>
                        <MdClose />
                    </span>
                    {props.children}
                </div>
            </div>
        )
    }

    const PricesPopup = (props: any) => {
        return (
            <div className='fixed max-md:w-[350px] max-md:top-[25%] max-md:left-[10%] w-[750px] h-full top-[10%] left-[15%]'>
                <div className='relative w-[85%] m-0 h-auto max-h-[85vh] rounded-[4px] border border-solid border-[#999] overflow-auto'>
                    <span className='cursor-pointer max-md:right-[14%] max-md:top-[26%] fixed right-[17.5%] top-[10.5%] w-[25px] h-[25px] text-white bg-orange-500 rounded-md flex items-center justify-center' onClick={() => { setShowValores(false) }}>
                        <MdClose />
                    </span>
                    {props.children}
                </div>
            </div>
        )
    }

    return (
        <div className="h-full min-h-screen w-screen overflow-auto">
            <div className="bg-bgImage h-screen w-full justify-between
            pt-32 items-center flex flex-col gap-2 max-md:px-5">

                <div className='h-full w-full justify-start items-center flex flex-col gap-2'>
                    <div className="h-52 w-52 border-white border-2 rounded-full flex justify-center items-center">
                        <img src={'logo-transparent.png'} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center my-4 gap-2'>
                        <h1 className='text-white font-bold text-2xl'>
                            @mrparauapebas
                        </h1>

                        <h1 className='max-md:text-2xl text-4xl text-white flex flex-row'>
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
                        <span className='text-white font-bold text-4xl max-md:text-2xl'>#PadrãoMR</span>
                    </div>

                    <a href='https://contate.me/mreventosparauapebas' className="flex bg-white p-2 rounded-lg gap-2 text-black max-md:text-sm hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black">
                        <span >RESERVE SEU CAMAROTE - Pai da Seresta</span>
                    </a>

                    <a href='https://www.suamusica.com.br/milannecristina/cd-evoney-fernandes-seu-osmar-mr-eventos-at-mrparauapebas-fevereiro' className="flex bg-white p-2 rounded-lg gap-2 text-black max-md:text-sm hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black">
                        <span>BAIXE O CD PROMOCIONAL MR EVENTOS (Evoney Fernandes - Seu Osmar)</span>
                    </a>

                    <div onClick={() => { setShowMapa(true) }} className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium  hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black">
                        <span>MAPA SHOW SEU OSMAR #10.Março</span>
                    </div>
                    {
                        showMapa &&
                        <MapPopup>
                            <img src="Mapa-Evento.png" alt="" />
                        </MapPopup>
                    }

                    <div onClick={() => { setShowValores(!showValores) }} className="flex bg-white p-2 rounded-lg gap-2 text-black cursor-pointer font-medium hover:bg-gradient-to-r from-orange-700 
                     via-orange-500 to-orange-300 transition-all hover:text-black">
                        <span>Valores e Pontos de vendas - Evoney Fernandes (Seu Osmar)</span>
                    </div>
                    {
                        showValores &&
                        <PricesPopup>
                            <img src="valores.jpeg" alt="" />
                        </PricesPopup>
                    }
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