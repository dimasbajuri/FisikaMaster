import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MainFooter = () => {
    return (
        <div className='w-full bg-blue-900'>
            <div className='container mx-auto px-5 py-10 flex flex-col gap-y-5 md:flex-row md:gap-x-9 md:justify-center'>
                <h1 className="text-5xl text-white font-bold text-center md:text-left">Fisika<br />Master</h1>
                <div>
                    <h4 className='font-semibold text-white'>Website ini dibuat dengan:</h4>
                    <div className='flex flex-col mt-1'>
                        <a href="https://react.dev/" className='text-slate-300 hover:text-white transition-colors duration-200'>React</a>
                        <a href="https://tailwindcss.com/" className='text-slate-300 hover:text-white transition-colors duration-200'>Tailwind</a>
                        <a href="https://vitejs.dev/" className='text-slate-300 hover:text-white transition-colors duration-200'>ViteJS</a>
                    </div>
                </div>
                <div >
                    <h4 className='font-semibold text-white'>Design website ini terinspirasi oleh:</h4>
                    <a href="https://crayon.co/" className='text-slate-300 hover:text-white transition-colors duration-200 mt-1'>Crayon.co</a>
                </div>
                <div>
                    <h4 className='font-semibold text-white'>Kontak developer (DimasBajuri):</h4>
                    <div className='flex mt-1 gap-x-7 text-3xl md:text-base md:flex-col'>
                        <a href="https://github.com/dimasbajuri" className='text-slate-300 hover:text-white transition-colors duration-200'>
                            <FontAwesomeIcon className='md:hidden' icon="fa-brands fa-github" />
                            <span className='hidden md:block'>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/dimas-bajuri-019453260/" className='text-slate-300 hover:text-white transition-colors duration-200'>
                            <FontAwesomeIcon className='md:hidden' icon="fa-brands fa-linkedin-in" />
                            <span className='hidden md:block'>Linked In</span>
                        </a>
                        <a href="https://x.com/dddimasriz?t=0PSOMOyAtj2xIVqYzBmxYw&s=09" className='text-slate-300 hover:text-white transition-colors duration-200'>
                            <FontAwesomeIcon className='md:hidden' icon="fa-brands fa-x-twitter" />
                            <span className='hidden md:block'>X (Twitter)</span>
                        </a>
                        <a href="https://www.instagram.com/dimasbajuri?igsh=MTJnMzBwZGU5OWNuaA==" className='text-slate-300 hover:text-white transition-colors duration-200'>
                            <FontAwesomeIcon className='md:hidden' icon="fa-brands fa-instagram" />
                            <span className='hidden md:block'>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-slate-100 text-center font-semibold mt-7 pb-4 max-sm:mt-0'>Made with Love by DimasBajuri</p>
        </div>
    )
}

export default MainFooter