import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorHandle = () => {
  const error = useRouteError();
  console.error(error)

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen text-center font-jost'>
      <h1 className='font-extrabold text-9xl max-sm:text-8xl'>404</h1>
      <p className='text-xl max-sm:text-lg'>Maaf halaman yang kamu cari tidak dapat ditemukan</p>
      <button className='text-xl px-4 py-2 bg-yellow-500 rounded-sm mt-5 font-semibold hover:text-white hover:bg-yellow-400 transition-colors duration-200'><a href="/">Kembali Ke Halaman Utama</a></button>
    </div>
  )
}

export default ErrorHandle