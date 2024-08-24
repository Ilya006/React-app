import { Carousel } from '~ui/carousel'
import s from './styles.module.scss'
import { HeroSlide } from './slide'
import { heroMovies } from './config'

export function Hero() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Carousel
          classNames={s.slider}
          slideClassNames={s.slide}
          items={heroMovies}
          renderElement={HeroSlide}
          options={{
            loop: true
          }}
        />
      </div>
    </section>
  )
}
