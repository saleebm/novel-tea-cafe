import {
  AnimatePresence,
  motion,
  useReducedMotion,
  Variants,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { Children, ComponentProps, FC, useMemo } from 'react'

export const wrapVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { when: 'beforeChildren', staggerDirection: -1 },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delay: 0.03,
      when: 'beforeChildren',
    },
  },
}
export const childVariants: Variants = {
  hidden: {
    rotateX: '-70deg',
    opacity: 0,
  },
  show: {
    rotateX: '0deg',
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
}

/**
 * The IO children, must be wrapped with AnimatedInView first
 * https://codesandbox.io/s/framer-motion-intersection-observer-scale-qmtyb?from-embed
 */
export const AnimatedIOView: FC<
  ComponentProps<typeof motion.div> & {
    duration?: number
    delayOrder?: number
    disableScale?: boolean
    once?: boolean
  }
> = ({
  children,
  duration = 0.15,
  delayOrder = 0,
  disableScale = false,
  once,
  ...rest
}) => {
  const { inView, ref } = useInView({
    triggerOnce: once,
  })
  const shouldReduceMotion = useReducedMotion()
  const offset = 0.4

  const transition = useMemo(
    () => ({
      duration,
      delay:
        Math.min(delayOrder * offset, 0.15) /
        Math.min(Children.count(children) || 1, 3),
    }),
    [duration, delayOrder, children],
  )

  const variants = {
    hidden: {
      scale: disableScale ? 1 : 0,
      rotateX: '-70deg',
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      rotateX: '0deg',
      opacity: 1,
      transition,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? 'show' : 'hidden'}
      animate={inView ? 'show' : 'hidden'}
      exit={shouldReduceMotion ? 'show' : 'hidden'}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// variant of above
// without IO, uses AnimatePresence instead
// variant needs show and hidden keys
export const AnimatedInPlainViewParent: FC<
  ComponentProps<typeof motion.div> & { variant?: Variants }
> = ({ children, variant = wrapVariants, ...rest }) => {
  const shouldReduceMotion = useReducedMotion()
  return useMemo(
    () => (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={shouldReduceMotion ? 'show' : 'hidden'}
          animate={'show'}
          exit={shouldReduceMotion ? 'show' : 'hidden'}
          variants={wrapVariants}
          {...rest}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    ),
    [shouldReduceMotion, children, rest],
  )
}

// a child for the parent ^ that animates in accordion fashion
export const AnimatedInViewChildDiv: FC<ComponentProps<
  typeof motion.div
>> = ({ children, variants = childVariants, ...rest }) => (
  <motion.div variants={variants} {...rest}>
    {children}
  </motion.div>
)
