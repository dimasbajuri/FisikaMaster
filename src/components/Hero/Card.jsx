import React from 'react'

const Card = (props) => {
  const { h1, h2, p, h1color = '', h2color = '', link='#' } = props;

  return (
    <div className='py-3 px-6 bg-white flex flex-col md:w-2/6'>
      <div>
        <h1 className={`text-4xl font-jost font-bold ${h1color}`}>{h1}</h1>
        <h2 className={`text-2xl font-jost font-semibold ${h2color}`}>{h2}</h2>
        <p className='mt-5 mb-7 font-jost text-lg text-gray-600'>{p}</p>
        <a href={link} className='font-jost font-bold text-blue-800 cursor-pointer'>BACA SELENGKAPNYA  </a>
      </div>
    </div>
  )
}

export default Card