import { Link } from 'react-router-dom'
import { pathKeys } from '~/shared/lib/react-router'
import { MovieRating } from '~ui/movie-rating'
import type { SlideProps } from '../config'

import s from './styles.module.scss'

export function HeroSlide(props: SlideProps) {
  const { id, hang, rating, year, genre, title, ageRating, image } = props
  const info = `${year} ${genre} ${title} ${ageRating}+`

  return (
    <div className={s.slide}>
      <Link className={s.link} to={pathKeys.movie.byId({ movieId: id })} />
      <span className={s.hang}>{hang}</span>
      <div className={s.content}>
        <div className={s.info}>
          <MovieRating className={s.rating} rating={rating} />
          <span>{info}</span>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className={s.img}
      />
    </div>
  )
}