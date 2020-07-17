import { motion, useAnimation } from 'framer-motion'
import React, { useCallback, useEffect } from 'react'
import { useMouseTrap } from '@Utils/hooks/use-mouse-trap'
import styled from 'styled-components'
import styles from './cursor.mod.scss'
import { useDebouncedCallback } from '@Utils/hooks/use-debounced-callback'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'

interface CursorProps {
  x: number
  y: number
  mouseUp: boolean
}

interface FlowerProps {
  size: number
  dotSize: number
  animationDuration: number
}

const Flower = styled.div<FlowerProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;

  * {
    box-sizing: border-box;
  }

  .dots-container {
    height: ${(props) => props.dotSize}px;
    width: ${(props) => props.dotSize}px;
  }

  .smaller-dot {
    background-color: rgba(0, 255, 0, 1);
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 128, 0, 0.72);
  }
  .bigger-dot {
    background-color: rgba(0, 255, 0, 1);
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 128, 0, 0.72);
  }
`

export function Cursor({ x, y, mouseUp }: CursorProps) {
  const SIZE = 50
  const DOT_SIZE = SIZE / 7

  const controls = useAnimation()

  const {
    activeArea,
    activeContainer,
    // todo perhaps for text
    additionalProps,
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
      rotate: `${i * 360}deg`,
      scaleX: 1.13,
      scaleY: 1.13,
      filter: 'opacity(1)',
    }),
    [INITIAL_BOX_SHADOW],
  )

  const DO_FLOWER = useCallback(
    (i: number) => ({
      rotate: `${i * 180}deg`,
      boxShadow: i === 0 ? SMALL_DOTS_SHADOW : BIG_DOTS_SHADOW,
      scaleX: 1,
      scaleY: 1,
    }),
    [BIG_DOTS_SHADOW, SMALL_DOTS_SHADOW],
  )

  const [debouncedAnimateBoundingBox] = useDebouncedCallback(
    async (box: DOMRect) => {
      await controls.start((i) => ({
        filter: 'opacity(0.1)',
        scaleX: i * (Math.max(100, box.width) / 3),
        scaleY: i * (Math.max(100, box.height) / 3),
      }))
    },
    420,
  )

  useEffect(() => {
    if (activeArea === ActiveAreaTypes.notSet) {
      //  reset back to default controls
      controls.start(RESET_CONTROLS)
    } else if (
      activeContainer &&
      typeof activeContainer === 'object' &&
      'getBoundingClientRect' in activeContainer &&
      typeof activeContainer.getBoundingClientRect === 'function'
    ) {
      const boundingBox2D = (activeContainer as HTMLElement).getBoundingClientRect()
      debouncedAnimateBoundingBox(boundingBox2D)
    }
  }, [
    activeArea,
    activeContainer,
    RESET_CONTROLS,
    controls,
    debouncedAnimateBoundingBox,
  ])

  useEffect(() => {
    controls.start(RESET_CONTROLS).then(async () => {
      await controls.start(DO_FLOWER)
      return await controls.start(RESET_CONTROLS)
    })
  }, [mouseUp, controls, DO_FLOWER, RESET_CONTROLS])

  return (
    <div className={styles.cursorWrap}>
      <motion.div
        initial={{
          y: 0,
          x: 0,
        }}
        animate={{
          y: y - SIZE / 2,
          x: x - SIZE / 2,
        }}
        transition={{
          type: 'spring',
          damping: 50,
        }}
      >
        <Flower
          size={SIZE}
          dotSize={DOT_SIZE}
          animationDuration={1000}
          className={styles.cursor}
        >
          <div className='dots-container'>
            <motion.div
              custom={1}
              transition={{
                type: 'spring',
                mass: 0.1,
              }}
              animate={controls}
              className={'bigger-dot'}
            >
              <motion.div
                transition={{
                  type: 'spring',
                  mass: 0.5,
                }}
                custom={0}
                animate={controls}
                className={'smaller-dot'}
              />
            </motion.div>
          </div>
        </Flower>
      </motion.div>
    </div>
  )
}
