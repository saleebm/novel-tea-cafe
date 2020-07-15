import React, { useRef, useState, useEffect, RefObject } from 'react'
import shallowEqual from 'shallowequal'

export type IntersectionChangeHandler = (
  entry: IntersectionObserverEntry,
) => void
//https://github.com/cats-oss/use-intersection
export type IntersectionOptions = {
  root?: React.RefObject<Element>
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
  defaultIntersecting?: boolean
}

const getScrollThresholds = (maxIterations: number) => {
  let thresholdList = []
  for (let step = 0; step <= 1; step = step + maxIterations) {
    thresholdList.push(step)
  }
  return thresholdList
}

const multiThresholdArray = getScrollThresholds(0.001)

export function useIntersectionObserver(
  target: RefObject<Element> | Element | null,
  options: IntersectionOptions = {},
  callback?: IntersectionChangeHandler,
) {
  const { defaultIntersecting, once, threshold, ...opts } = options
  const optsRef = useRef(opts)
  const [intersecting, setIntersecting] = useState(
    defaultIntersecting === true,
  )
  const [getThreshold, setThreshold] = useState(0)
  const intersectedRef = useRef(false)

  useEffect(() => {
    if (!shallowEqual(optsRef.current, opts)) {
      optsRef.current = opts
    }
  })

  useEffect(() => {
    if (target == null) {
      return
    }

    const element =
      target instanceof Element ? target : target.current
    if (element == null) {
      return
    }

    if (once && intersectedRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
        setThreshold(entry.intersectionRatio)

        if (callback != null) {
          callback(entry)
        }

        if (entry.isIntersecting) {
          intersectedRef.current = true
        }

        if (once && entry.isIntersecting && element != null) {
          observer.unobserve(element)
        }
      },
      {
        ...optsRef.current,
        root:
          optsRef.current.root != null
            ? optsRef.current.root.current
            : null,
        threshold: threshold ? threshold : multiThresholdArray,
      },
    )

    observer.observe(element)

    return () => {
      if (once && intersectedRef.current) {
        return
      }

      if (element != null) {
        observer.unobserve(element)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optsRef.current, target])

  return { intersecting, threshold: getThreshold }
}
