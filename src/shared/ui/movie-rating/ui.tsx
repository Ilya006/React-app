import s from './styles.module.scss'
import clsx from 'clsx'

interface MovieRatingProps {
  rating: number,
  className?: string
}

export function MovieRating(props: MovieRatingProps) {
  const { rating, className } = props
  return (
    <span className={clsx(s.rating, className)}>{rating}</span>
  )
}