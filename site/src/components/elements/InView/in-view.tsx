import {
  AnimatePresence,
  motion,
  useReducedMotion,
  Variants,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { Children, ComponentProps, FC, useMemo } from 'react'

const wrapVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

// simple float up animation
export const childVariants: Variants = {
  hidden: {
    translateY: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.35,
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

  const transition = useMemo(
    () => ({
      duration,
      delay:
        Math.min(delayOrder * 0.04, 0.15) /
        Math.min(Children.count(children) || 1, 3),
    }),
    [duration, delayOrder, children],
  )

  const variants = {
    hidden: {
      scale: disableScale ? 1 : 0,
      translateY: -100,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      translateY: 0,
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
  ComponentProps<typeof motion.div> & {
    exitBeforeEnter?: boolean
  }
> = ({ children, exitBeforeEnter = false, ...rest }) => {
  const shouldReduceMotion = useReducedMotion()
  return useMemo(
    () => (
      <AnimatePresence exitBeforeEnter={exitBeforeEnter}>
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
    [shouldReduceMotion, children, exitBeforeEnter, rest],
  )
}

// a child for the parent ^ that animates in accordion fashion
export const AnimatedInViewChildDiv: FC<
  ComponentProps<typeof motion.div>
> = ({ children, variants = childVariants, ...rest }) => (
  <motion.div variants={variants} {...rest}>
    {children}
  </motion.div>
)
