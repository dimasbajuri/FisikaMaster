import React from 'react'

const StartCard = (props) => {
    const { photo, kelas, deskripsi, link } = props

    return (
        <a href={link} className='flex flex-col gap-y-3 w-4/5 p-3 rounded-md cursor-pointer transition-shadow duration-300 hover:shadow-2xl lg:w-2/3 max-sm:w-full'>
            <img src={`/${photo}`} alt={`foto kelas${photo}`} />
            <h3 className='text-4xl font-bold font-jost text-left'>Kelas {kelas}</h3>
            <p className='text-lg text-gray-600'>{deskripsi}</p>
        </a>
    )
}

export default StartCard