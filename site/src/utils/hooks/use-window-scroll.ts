import { useEffect } from 'react'
import { useRefState } from './use-ref-state'

export interface State {
  x: number
  y: number
}

export const useWindowScroll = (): State => {
  const isServer = () => typeof window === 'undefined'
  const [state, setState] = useRefState<State>({
    x: !isServer() ? window.pageXOffset : 0,
    y: !isServer() ? window.pageYOffset : 0,
  })

  useEffect(() => {
    const handler = () => {
      setState({
        x: window.pageXOffset,
        y: window.pageYOffset,
      })
    }

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [setState])

  return state
}
