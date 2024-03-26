import React from 'react'
import Card from './Card';

const Header = () => {
    return (
        <div className='bg-blue-700 w-full pb-16 pt-28'>
            <div className='grid grid-cols-1 container mx-auto px-5 justify-items-center gap-y-7 md:gap-y-9 lg:grid-cols-2 lg:items-center lg:gap-x-5'>
                <div className='flex flex-col items-center gap-y-5 lg:items-start lg:gap-y-7'>
                    <h1 className='text-center font-jost font-extrabold text-5xl md:text-7xl tracking-wide lg:text-left lg:text-5xl max-sm:text-4xl'>
                        <span className='text-white'>Explore the Wonders of Physics.</span>
                        <br />
                        <span className='text-white'>Unlock Your Potential.</span>
                        <br />
                        <span className='text-teal-500'>Empowered by Science</span>
                    </h1>
                    <button className='p-5 bg-yellow-500 rounded text-3xl font-bold w-fit max-sm:text-2xl'>MULAI BELAJAR</button>
                </div>
                <img src="/test.jpeg" alt="" className='' />
                <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-5 justify-center items-center lg:col-span-2 md:items-start'>
                    <Card
                        h1="Pemahaman Konsep"
                        h2="peningkatan dalam penerimaan konsep fisika"
                        p='"Dengan memanfaatkan platform pembelajaran fisika kami, siswa melaporkan peningkatan signifikan dalam pemahaman mereka terhadap konsep-konsep fisika yang rumit."'
                        h1color='text-purple-600'
                        h2color='text-purple-500'
                    />
                    <Card
                        h1="Tingkat Kelulusan"
                        h2="tingkat kelulusan dalam ujian fisika"
                        p='"Platform kami membantu siswa mencapai tingkat kelulusan yang tinggi dalam ujian fisika, memperkuat pemahaman dan keterampilan mereka dalam menerapkan konsep-konsep fisika secara praktis."'
                        h1color='text-teal-600'
                        h2color='text-teal-500'
                    />
                    <Card
                        h1="Prestasi Akademik"
                        h2="peningkatan dalam prestasi akademik fisika"
                        p='"Melalui pembelajaran yang interaktif dan mendalam, siswa kami mencatat peningkatan yang signifikan dalam prestasi akademik fisika mereka, mempersiapkan mereka untuk tantangan di masa depan."'
                        h1color='text-orange-600'
                        h2color='text-orange-500'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header