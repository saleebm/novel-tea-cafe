import {
  AnimatePresence,
  motion,
  useReducedMotion,
  Variants,
} from 'framer-motion'
import React, {
  ComponentProps,
  FC,
  memo,
  useContext,
  useMemo,
  Children,
} from 'react'
import { easeInOut } from '@popmotion/easing'
import {
  IntersectionContext,
  IntersectionObserver,
} from '@Components/context/IntersectionObserver'

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
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

/**
 * For intersection observer context wrap
 * https://shakuro.com/blog/framer-motion-tutorials-make-more-advanced-animations
 *
 * Requires a key on top, not as prop
 */
export const AnimatedInView: FC<
  ComponentProps<'div'> & {
    reset?: boolean
    threshold?: number
  }
> = ({ children, ...rest }) => (
  <IntersectionObserver {...rest}>{children}</IntersectionObserver>
)

/**
 * The IO children, must be wrapped with AnimatedInView first
 * https://codesandbox.io/s/framer-motion-intersection-observer-scale-qmtyb?from-embed
 */
export const AnimatedIOView: FC<
  ComponentProps<typeof motion.div> & {
    duration?: number
    delayOrder?: number
    disableScale?: boolean
  }
> = ({
  children,
  duration = 0.15,
  delayOrder = 0,
  disableScale = false,
  ...rest
}) => {
  const shouldReduceMotion = useReducedMotion()
  const { inView } = useContext(IntersectionContext)
  const transition = useMemo(
    () => ({
      duration,
      delay:
        Math.min(delayOrder, 0.15) /
        Math.min(Children.count(children) || 1, 3),
      ease: easeInOut,
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
export const AnimatedInPlainViewParent: FC<ComponentProps<
  typeof motion.div
>> = memo(({ children, ...rest }) => {
  const shouldReduceMotion = useReducedMotion()
  return (
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
  )
})
// a child for the parent ^ that animates in accordion fashion
export const AnimatedInViewChildDiv: FC<ComponentProps<
  typeof motion.div
>> = ({ children, variants = childVariants, ...rest }) => (
  <motion.div variants={variants} {...rest}>
    {children}
  </motion.div>
)
