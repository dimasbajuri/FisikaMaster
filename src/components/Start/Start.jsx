import React from 'react'
import StartCard from './StartCard'

const Start = () => {
  return (
    <div className='container mx-auto px-5 mt-24 flex flex-col items-center gap-y-5'>
      <h1 className='text-5xl font-bold font-jost lg:text-7xl text-center text-balance'>Pilih Darimana Kamu Akan Memulainya</h1>
      <div className='mt-5 flex flex-col items-center gap-y-8 md:flex-row md:items-start gap-x-5 lg:w-3/4'>
        <StartCard
          photo='1.png'
          kelas='1'
          deskripsi='Pada kelas ini kamu akan mempelajari dasar dasar fisika, seperti besaran dan satuan, vektor, gerak lurus, dan dasar dasar fisika lainnya.'
        />
        <StartCard
          photo='2.png'
          kelas='2'
          deskripsi='Lanjutkan perjalananmu dalam memahami fisika dengan topik yang lebih mendalam seperti kesetimbangan dan dinamika rotasi, kalor, termodinamika, hingga gelombang.'
        />
        <StartCard
          photo='3.png'
          kelas='3'
          deskripsi='Jelajahi aspek-aspek kompleks dalam fisika mulai dari listrik AC dan DC, relativitas khusus, fisika kuantum, hingga fisika inti, untuk memahami fenomena-fenomena fisika yang lebih rumit di sekitar kita.'
        />
      </div>
    </div>
  )
}

export default Start