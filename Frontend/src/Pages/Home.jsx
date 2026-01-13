import '../index.css'
import papel from '../assets/18647.jpg'


import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/effect-fade'


function Home() {

  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)


  // Função para mudar o slide ao clicar no número
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }


  const slides = [
    {
      id: 1,
      title: "Técnico de Informática",
      tag: "ADMINISTRAÇÃO",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600",
      color: "bg-pink-700"
    },
    {
      id: 2,
      title: "Gestão de Sistemas",
      tag: "TECNOLOGIA",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600",
      color: "bg-orange-700"
    },
    {
      id: 3,
      title: "Novos Horizontes",
      tag: "EDUCAÇÃO",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600",
      color: "bg-brown-800"
    }
  ]







  return (
    <section className="relative w-full min-h-screen overflow-x-hidden ">
     


      <div className="relative w-full h-[100vh] overflow-hidden ">

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img src={slide.image} className="absolute inset-0 w-full h-full object-cover" alt={slide.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

                {/* Conteúdo do Slide */}
                <div className="relative z-10 flex flex-col justify-center h-full px-12 lg:px-24">
                  <span className="bg-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full w-fit mb-4">
                    {slide.tag}
                  </span>
                  <h2 className="text-white text-5xl lg:text-7xl font-black max-w-xl leading-tight uppercase">
                    {slide.title.split(' ')[0]} <br />
                    <span className="text-pink-500">{slide.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}

          
        </Swiper>





        {/* --- OS NÚMEROS COMO "CHECKBOXES" (INDICADORES) --- */}
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="group flex flex-col items-center gap-2 focus:outline-none cursor-pointer"
            >
              <div className={`
                w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300
                ${activeIndex === idx
                  ? 'bg-pink-600 border-pink-600 text-white scale-125 shadow-lg'
                  : 'bg-white/10 border-white/40 text-white hover:border-white'}
              `}>
                {idx + 1}
              </div>
              {idx < slides.length - 1 && (
                <div className={`w-[2px] h-8 transition-colors ${activeIndex === idx ? 'bg-pink-600' : 'bg-white/20'}`}></div>
              )}
            </button>
          ))}
        </div>


    

      </div>
    </section>

  )
}

export default Home