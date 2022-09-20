import { useState } from "react"
import basket from '../assets/svg/basket.svg'


const NavLive = () => {
    const [show, setShow] = useState(false)

    const showing = () => {
        setShow(!show)
    }
    
    return(
        <div className='relative z-20'>
            <button onClick={showing} className='py-1 px-5 bg-gray-100 rounded hover:bg-gray-200 hover:text-white text-sm'>
                <img src={basket} alt="imgLogo" className="hover:rotate-45 transition-transform" />
            </button>
            <div className={`absolute text-black top-full right-0 w-80 h-80 bg-white transition-all p-2 rounded ${show ? 'opacity-0 h-0':'opacity-1 h-full'}`}>
                <div className="w-full h-full flex flex-col justify-center divide-y">
                    <div className="w-full h-full"></div>
                    <div className="w-full h-full"></div>
                    <div className="w-full h-full"></div>
                    <div className="w-full h-full"></div>
                </div>
            </div>
        </div>
    )
}

export default NavLive