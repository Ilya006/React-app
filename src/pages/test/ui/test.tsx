// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from './slide'
import { heroMovies } from '../config.1';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import s from './test.module.scss'

export function TestPage() {
  return (
    <div className={s.container}>
      <Swiper
        loop
        initialSlide={2}
        centeredSlides
        autoHeight
        navigation
        effect='coverflow'
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 400,
        }}
        spaceBetween={20}
        className={s.slider}
        pagination={true}
        modules={[Pagination, EffectCoverflow]} 
      >
        {heroMovies.map(item => (
          <SwiperSlide className={s.slide} key={item.id}>
            <HeroSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}