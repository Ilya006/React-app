import { useRouteError } from 'react-router-dom'

export function BubbleError() {
  const error = useRouteError()
  console.error(error)

  if (error) throw error
  return null
}