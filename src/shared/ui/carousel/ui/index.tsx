import { useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import type { SwiperProps } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'
import s from './carousel.module.css'
import { useDomRefWithSetter } from '../lib/use-dom-ref-with-setter'
import { SlideBtn } from './slide-button'

interface CarouselProps<T> extends SwiperProps {
  items: T[] | undefined,
  renderElement: (item: T, index: number) => ReactNode
  classNames?: string,
  slideClassNames?: string,
  prevBtnClass?: string,
  nextBtnClass?: string,
  options?: SwiperOptions
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Carousel<T, _>(props: CarouselProps<T>) {
  const { 
    items,
    classNames,
    slideClassNames,
    renderElement,
    prevBtnClass,
    nextBtnClass,
    options,
    modules,
    navigation = true,
    ...otherProps
  } = props

  const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>()
  const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>()

  const renderSlides = useCallback(
    (slides: typeof items) => 
      slides?.map((item, inx) => (
        <SwiperSlide
          key={inx}
          className={clsx(s.slide, slideClassNames)}
        >
          {renderElement(item, inx)}
        </SwiperSlide>
      )),
    [renderElement, slideClassNames]
  )

  const swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      769: {
        spaceBetween: 15,
      },
      1401: {
        spaceBetween: 18,
      },
    },
    ...options
  }

  const defaultModules = [Navigation]

  return (
    <Swiper
      modules={[...(modules ?? defaultModules)]}
      className={clsx(s.slider, classNames)}
      navigation={{
        prevEl,
        nextEl,
      }}
      {...swiperOptions}
      {...otherProps}
    >
      {navigation && (
        <>
          <SlideBtn 
            ref={prevElRef}
            className={clsx(s.prev, prevBtnClass)}
          />
          <SlideBtn 
            ref={nextElRef}
            className={clsx(s.next, nextBtnClass)}
          />
        </>
      )}
      {renderSlides(items)}
    </Swiper>
  )
}