import { useRef } from 'react'
import { useEffectOnce } from './use-effect-once'

export const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn)

  // update the ref each render so if it changes the newest callback will be invoked
  fnRef.current = fn

  useEffectOnce(() => () => fnRef.current())
}
