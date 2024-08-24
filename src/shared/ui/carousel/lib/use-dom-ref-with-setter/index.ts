import { useEffect, useRef, useState } from 'react'
import type { Ref } from 'react'

export function useDomRefWithSetter<T extends HTMLElement>(): [
  T | null,
  Ref<T>
] {
  const ref = useRef<T>(null)
  const [DOMRef, setStateRef] = useState<T | null>(null)

  useEffect(() => {
    if(ref.current) {
      setStateRef(ref.current)
    }
  }, [])

  return [DOMRef, ref]
}