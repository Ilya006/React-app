import s from './Curtain.module.css'

export function Curtain() {
  return (
    <div className={ s.curtain }>
      <div className={ s.spinner } />
    </div>
  )
}