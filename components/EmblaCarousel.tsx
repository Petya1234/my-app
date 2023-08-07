import './styles.css'
import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imgCarousel1 from '@/public/photos/boots-photo.jpg'
import imgCarousel2 from '@/public/photos/boys-photo.jpg'
import imgCarousel3 from '@/public/photos/gym-photo.jpg'
import imgCarousel4 from '@/public/photos/cat-photo.jpg'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><Image height={1000} width={1000} src={imgCarousel1} alt=''></Image>
        <p>Мои новые кроссики</p></div>
        <div className="embla__slide"><Image height={1000} width={1000} src={imgCarousel2} alt=''></Image>
        <p>Лагерь</p></div>
        <div className="embla__slide"><Image height={1000} width={1000} src={imgCarousel3} alt=''></Image>
        <p>Любимый зал</p></div>
        <div className="embla__slide"><Image height={1000} width={1000} src={imgCarousel4} alt=''></Image>
        <p>Кошка???</p></div>
      </div>
    </div>
  )
}