import React, {
  createContext,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useIntersectionObserver } from '@Utils/hooks/use-intersection-observer'

export const IntersectionContext = createContext({ inView: true })

export const IntersectionObserver: FC<{
  reset?: boolean
  threshold?: number
}> = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen,
  threshold = 0,
  ...rest
}) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = useRef(null)
  const { intersecting: intersection } = useIntersectionObserver(
    intersectionRef,
    {
      threshold: threshold,
      once: true,
    },
  )

  useEffect(() => {
    if (intersection) {
      return setInView(intersection)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div {...rest} ref={intersectionRef}>
        {children}
      </div>
    </IntersectionContext.Provider>
  )
}
