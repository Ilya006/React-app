import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import type { SwiperClass } from 'swiper/react'

import { genresList } from './config'
import s from './styles.module.scss'

export function Genres() {
  const [isStart, setIsStart] = useState<boolean>(false)
  const [isCenter, setIsCenter] = useState<boolean>(false)

  const slideChange = (swiper: SwiperClass) => {
    setIsStart(swiper.isEnd)
    setIsCenter(!swiper.isEnd && swiper.activeIndex > 0)
  }

  return (
    <section 
      className={clsx(s.section, {
        [s.isStart]: isStart,
        [s.isCenter]: isCenter
      })}
    >
      <div className='container'>
        <Swiper 
          freeMode
          mousewheel
          slidesPerView='auto'
          className={s.slider}
          modules={[Mousewheel, FreeMode]}
          onSlideChange={slideChange}
          onSliderMove={slideChange}
        >
          {genresList.map(({ href, icon, title }) => (
            <SwiperSlide className={s.item} key={title}>
              <Link to={href} className={s.link}>
                <span className={s.icon}>{icon}</span>
                <span className={s.ttile}>{title}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}