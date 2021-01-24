import { motion, useAnimation } from 'framer-motion'
import React, { useCallback, useEffect } from 'react'
import clsx from 'clsx'
import {
  createStyles,
  fade,
  makeStyles,
} from '@material-ui/core/styles'
import { useMouseTrap } from '@Utils/hooks/use-mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import styles from './cursor.mod.scss'

// import { useDebouncedCallback } from '@Utils/hooks/use-debounced-callback'

interface CursorProps {
  x: number
  y: number
  mouseUp: boolean
}

const SIZE = 50
const DOT_SIZE = SIZE / 7

const useStyles = makeStyles((theme) =>
  createStyles({
    flowerRoot: {
      'height': `${SIZE}px`,
      'width': `${SIZE}px`,
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
      height: `${DOT_SIZE}px`,
      width: `${DOT_SIZE}px`,
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

export function Cursor({ x, y, mouseUp }: CursorProps) {
  const classes = useStyles()
  const flowerControls = useAnimation()

  const activeAreaControls = useAnimation()

  const {
    activeArea,
    // activeContainer,
    // todo perhaps for text
    // additionalProps,
  } = useMouseTrap()

  const resetControls = useCallback(
    (i: number) => ({
      boxShadow: INITIAL_BOX_SHADOW,
      rotate: i * 360,
    }),
    [],
  )

  const doFlower = useCallback(
    (i: number) => ({
      rotate: i * 180,
      boxShadow: i === 0 ? SMALL_DOTS_SHADOW : BIG_DOTS_SHADOW,
    }),
    [],
  )

  // on active area change, if set, scale up
  useEffect(() => {
    if (activeArea !== ActiveAreaTypes.notSet) {
      // const boundingBox2D = (activeContainer as HTMLElement).getBoundingClientRect()
      activeAreaControls.start({
        scale: 1.2,
      })
      flowerControls.start(resetControls).then(async () => {
        await flowerControls.start(doFlower)
        await flowerControls.start(resetControls)
      })
    }
    return () => {
      activeAreaControls.start({
        scale: 1,
      })
    }
  }, [
    activeArea,
    activeAreaControls,
    flowerControls,
    doFlower,
    resetControls,
  ])

  useEffect(() => {
    flowerControls.start(resetControls).then(async () => {
      await flowerControls.start(doFlower)
      await flowerControls.start(resetControls)
    })
  }, [mouseUp, flowerControls, doFlower, resetControls])

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
          animate={activeAreaControls}
          initial={{
            scale: 1,
          }}
        >
          <div className={classes.dotsContainer}>
            <motion.div
              custom={1}
              animate={flowerControls}
              className={classes.biggerDot}
            >
              <motion.div
                custom={0}
                animate={flowerControls}
                className={classes.smallerDot}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
