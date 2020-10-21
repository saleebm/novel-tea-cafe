import { motion, useAnimation } from 'framer-motion'
import React, { useCallback, useEffect } from 'react'
import { useMouseTrap } from '@Utils/hooks/use-mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import clsx from 'clsx'
import styles from './cursor.mod.scss'
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'

// import { useDebouncedCallback } from '@Utils/hooks/use-debounced-callback'

interface CursorProps {
  x: number
  y: number
  mouseUp: boolean
}

interface FlowerProps {
  size: number
  dotSize: number
}

const useStyles = makeStyles<Theme, FlowerProps>((theme) =>
  createStyles({
    flowerRoot: {
      'height': (props) => `${props.size}px`,
      'width': (props) => `${props.size}px`,
      'borderRadius': '49%',
      'border': `1px solid ${fade(
        theme.palette.secondary.light,
        0.69,
      )}`,
      'willChange': 'box-shadow',
      '& *': {
        boxSizing: 'border-box',
      },
    },
    dotsContainer: {
      height: (props) => `${props.dotSize}px`,
      width: (props) => `${props.dotSize}px`,
    },
    smallerDot: {
      borderRadius: '49%',
      backgroundColor: theme.palette.secondary.main,
      height: '100%',
      width: '100%',
      willChange: 'transform, box-shadow',
    },
    biggerDot: {
      backgroundColor:
        theme.palette.secondary[
          theme.palette.type === 'dark' ? 'light' : 'dark'
        ],
      height: '100%',
      width: '100%',
      padding: '10%',
      borderRadius: '49%',
      border: `1px solid ${
        theme.palette.secondary[
          theme.palette.type === 'dark' ? 'light' : 'dark'
        ]
      }`,
      willChange: 'transform, box-shadow',
    },
  }),
)

export function Cursor({ x, y, mouseUp }: CursorProps) {
  const SIZE = 50
  const DOT_SIZE = SIZE / 7
  const classes = useStyles({ dotSize: DOT_SIZE, size: SIZE })
  const controls = useAnimation()

  const controlFlowerPower = useAnimation()

  const {
    activeArea,
    // activeContainer,
    // todo perhaps for text
    // additionalProps,
  } = useMouseTrap()

  const INITIAL_BOX_SHADOW = `0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1), 0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1), 0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1), 0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1)`

  const SMALL_DOTS_SHADOW = `${DOT_SIZE * 1.4}px 0 0
          rgba(0, 255, 0, 1),
        -${DOT_SIZE * 1.4}px 0 0 rgba(0, 255, 0, 1),
        0 ${DOT_SIZE * 1.4}px 0 rgba(0, 255, 0, 1),
        0 -${DOT_SIZE * 1.4}px 0 rgba(0, 255, 0, 1),
        ${DOT_SIZE}px -${DOT_SIZE}px 0
          rgba(0, 255, 0, 1),
        ${DOT_SIZE}px ${DOT_SIZE}px 0
          rgba(0, 255, 0, 1),
        -${DOT_SIZE}px -${DOT_SIZE}px
          0 rgba(0, 255, 0, 1),
        -${DOT_SIZE}px ${DOT_SIZE}px 0
          rgba(0, 255, 0, 1)`

  const BIG_DOTS_SHADOW = `${DOT_SIZE * 2.6}px 0 0 rgba(0, 255, 0, 1),
        -${DOT_SIZE * 2.6}px 0 0 rgba(0, 255, 0, 1),
        0 ${DOT_SIZE * 2.6}px 0 rgba(0, 255, 0, 1),
        0 -${DOT_SIZE * 2.6}px 0 rgba(0, 255, 0, 1),
        ${DOT_SIZE * 1.9}px -${DOT_SIZE * 1.9}px 0 rgba(0, 255, 0, 1),
        ${DOT_SIZE * 1.9}px ${DOT_SIZE * 1.9}px 0 rgba(0, 255, 0, 1),
        -${DOT_SIZE * 1.9}px -${DOT_SIZE * 1.9}px 0
          rgba(0, 255, 0, 1),
        -${DOT_SIZE * 1.9}px ${DOT_SIZE * 1.9}px 0 rgba(0, 255, 0, 1)`

  const RESET_CONTROLS = useCallback(
    (i: number) => ({
      boxShadow: INITIAL_BOX_SHADOW,
      rotate: i * 360,
    }),
    [INITIAL_BOX_SHADOW],
  )

  const DO_FLOWER = useCallback(
    (i: number) => ({
      rotate: i * 180,
      boxShadow: i === 0 ? SMALL_DOTS_SHADOW : BIG_DOTS_SHADOW,
    }),
    [BIG_DOTS_SHADOW, SMALL_DOTS_SHADOW],
  )

  // on active area change, if set, scale up
  useEffect(() => {
    if (activeArea !== ActiveAreaTypes.notSet) {
      // const boundingBox2D = (activeContainer as HTMLElement).getBoundingClientRect()
      controlFlowerPower.start({
        scale: 1.2,
      })
    }
    return () => {
      controlFlowerPower.start({
        scale: 1,
      })
    }
  }, [activeArea, controlFlowerPower])

  useEffect(() => {
    controls.start(RESET_CONTROLS).then(async () => {
      await controls.start(DO_FLOWER)
      await controls.start(RESET_CONTROLS)
    })
  }, [mouseUp, controls, DO_FLOWER, RESET_CONTROLS])

  return (
    <div className={styles.cursorWrap}>
      <motion.div
        initial={{
          translateY: y - SIZE / 2,
          translateX: x - SIZE / 2,
        }}
        animate={{
          translateY: y - SIZE / 2,
          translateX: x - SIZE / 2,
        }}
        transition={{
          type: 'spring',
          damping: 20,
        }}
      >
        <motion.div
          className={clsx(styles.cursor, classes.flowerRoot)}
          animate={controlFlowerPower}
          initial={{
            scale: 1,
          }}
        >
          <div className={classes.dotsContainer}>
            <motion.div
              custom={1}
              animate={controls}
              className={classes.biggerDot}
            >
              <motion.div
                custom={0}
                animate={controls}
                className={classes.smallerDot}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
