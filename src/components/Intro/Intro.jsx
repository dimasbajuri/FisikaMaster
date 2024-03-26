// ./src/components/Intro/Intro.jsx

// BELOM RESPONSIVE DAN ADVANTAGE BELUM DIBERI ANIMASI

import { useEffect, useState } from 'react'
import Advantage from './Advantage'

const AdvantageButton = (props) => {
  const { advantageTag, setFocus, focus } = props;

  return (
    <button onClick={() => setFocus(`${advantageTag}`)} className={`capitalize px-4 py-2 font-jost font-semibold ${focus === `${advantageTag}` ? `bg-green-500 text-green-200`: `text-slate-700`} hover:bg-green-500 hover:text-green-200 transition-all duration-500 text-xl`}>{advantageTag}</button>
  )
}

const Intro = () => {
  const [focus, setFocus] = useState('fleksibilitas');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Daftar nilai yang akan digunakan
      const focusValues = ['fleksibilitas', 'kualitas', 'interaktifitas', 'aksesibilitas'];

      // Dapatkan indeks nilai berikutnya dari daftar
      const nextIndex = (focusValues.indexOf(focus) + 1) % focusValues.length;

      // Atur nilai focus menjadi nilai berikutnya
      setFocus(focusValues[nextIndex]);
    }, 3000); // Interval setiap 5 detik

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(intervalId);
  }, [focus]);

  return (
    <div className='container mx-auto px-5 mt-24'>
      <div className='text-center text-balance'>
        <h1 className='text-5xl font-bold font-jost lg:text-7xl max-sm:text-4xl'>Selamat Datang di Kursus Fisika Online!</h1>
        <p className='mt-5 font-jost text-lg lg:text-2xl text-gray-600'>Selamat datang di kursus fisika online kami, tempat di mana Anda dapat belajar fisika dengan cara yang menyenangkan dan interaktifitas. Kami menyediakan berbagai materi pembelajaran yang dirancang untuk membantu Anda memahami konsep-konsep fisika dengan lebih baik.</p>
      </div>
      <div className='mt-10 bg-green-200'>
        <div className='container mx-auto p-5'>
          <div className='flex overflow-auto lg:gap-x-5'>
            <AdvantageButton advantageTag='fleksibilitas' setFocus={setFocus} focus={focus} />
            <AdvantageButton advantageTag='kualitas' setFocus={setFocus} focus={focus} />
            <AdvantageButton advantageTag='interaktifitas' setFocus={setFocus} focus={focus} />
            <AdvantageButton advantageTag='aksesibilitas' setFocus={setFocus} focus={focus} />
          </div>
          <Advantage
            disappear={focus === 'fleksibilitas' ? 'opacity-100 h-auto mt-5' : 'opacity-0 h-0 overflow-hidden px-0 mt-0'}
            h3='Fleksibilitas'
            h11='Program Belajar yang Fleksibel'
            p1='Kami menawarkan program belajar yang fleksibel, memungkinkan Anda untuk belajar sesuai dengan jadwal Anda sendiri.'
            h12='Akses Materi Kapanpun, Dimanapun'
            p2='Anda dapat mengakses materi pembelajaran kapanpun dan dimanapun melalui platform online kami, tanpa terikat oleh waktu atau lokasi.'
            h13='Fleksibilitas Pemilihan Topik'
            p3='Anda memiliki kebebasan untuk memilih topik atau materi yang ingin dipelajari sesuai dengan minat dan kebutuhan Anda.'
          />
          <Advantage
            disappear={focus === 'kualitas' ? 'opacity-100 h-auto mt-5' : 'opacity-0 h-0 overflow-hidden px-0 mt-0'}
            h3='Kualitas'
            h11='Materi Berkualitas Tinggi'
            p1='Materi pembelajaran yang kami sediakan dirancang dengan kualitas terbaik oleh para ahli dalam bidangnya, sehingga memastikan pemahaman yang mendalam dan akurat.'
            h12='Pendekatan Pembelajaran yang Efektif'
            p2='Kami menggunakan pendekatan pembelajaran yang terbukti efektif dalam menyampaikan konsep-konsep fisika secara jelas dan mudah dipahami oleh para pelajar.'
            h13='Dukungan dari Tim Ahli'
            p3='Anda akan mendapatkan dukungan penuh dari tim ahli kami yang siap membantu menjawab pertanyaan atau memberikan bimbingan tambahan dalam proses belajar Anda.'
          />
          <Advantage
            disappear={focus === 'interaktifitas' ? 'opacity-100 h-auto mt-5' : 'opacity-0 h-0 overflow-hidden px-0 mt-0'}
            h3='Interaktifitas'
            h11='Pengalaman Belajar yang Engaging'
            p1='Kami menyajikan pengalaman belajar yang interaktifitas dengan berbagai aktivitas, simulasi, dan percobaan virtual untuk memperdalam pemahaman Anda secara praktis.'
            h12='Keterlibatan Langsung dalam Pembelajaran'
            p2='Anda akan terlibat langsung dalam pembelajaran fisika melalui berbagai interaksi, diskusi, dan tugas-tugas yang dirancang untuk meningkatkan pemahaman Anda.'
            h13='Konten Dinamis dan Menarik'
            p3='Kami terus memperbarui konten pembelajaran dengan materi-materi baru dan menarik agar selalu relevan dan menantang bagi para pelajar.'
          />
          <Advantage
            disappear={focus === 'aksesibilitas' ? 'opacity-100 h-auto mt-5' : 'opacity-0 h-0 overflow-hidden px-0 mt-0'}
            h3='Aksesibilitas'
            h11='Akses Mudah ke Materi Pembelajaran'
            p1='Kami menyediakan akses mudah ke materi pembelajaran melalui platform online kami, sehingga Anda dapat belajar fisika kapanpun dan dimanapun.'
            h12='Dukungan Beragam Perangkat'
            p2='Platform kami dapat diakses melalui berbagai perangkat seperti komputer, tablet, atau ponsel, memastikan kenyamanan akses bagi semua pelajar.'
            h13='Komitmen untuk Inklusivitas'
            p3='Kami berkomitmen untuk menyediakan lingkungan belajar yang inklusif bagi semua orang, tanpa memandang latar belakang atau kondisi.'
          />
        </div>
      </div>
    </div>
  )
}

export default Intro