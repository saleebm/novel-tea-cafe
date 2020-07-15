import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import styles from './cursor.mod.scss'

interface CursorProps {
  x: number
  y: number
  mouseUp: boolean
}

interface Flower {
  size: number
  dotSize: number
  animationDuration: number
}

const Flower = styled.div<Flower>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 1px rgba(0, 255, 0, 0.7));

  * {
    box-sizing: border-box;
  }

  .dots-container {
    height: ${(props) => props.dotSize}px;
    width: ${(props) => props.dotSize}px;
  }

  .smaller-dot {
    background: rgba(0, 255, 0, 1);
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .bigger-dot {
    background: rgba(0, 255, 0, 1);
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
  }
`

export function Cursor({ x, y, mouseUp }: CursorProps) {
  const size = 42
  const dotSize = size / 7

  const controls = useAnimation()

  const INITIAL_BOX_SHADOW = `0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1), 0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1), 0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1), 0px 0px 0px rgba(0, 255, 0, 1),
        0px 0px 0px rgba(0, 255, 0, 1)`

  const SMALL_DOTS_SHADOW = `${dotSize * 1.4}px 0 0
          rgba(0, 255, 0, 1),
        -${dotSize * 1.4}px 0 0 rgba(0, 255, 0, 1),
        0 ${dotSize * 1.4}px 0 rgba(0, 255, 0, 1),
        0 -${dotSize * 1.4}px 0 rgba(0, 255, 0, 1),
        ${dotSize}px -${dotSize}px 0
          rgba(0, 255, 0, 1),
        ${dotSize}px ${dotSize}px 0
          rgba(0, 255, 0, 1),
        -${dotSize}px -${dotSize}px
          0 rgba(0, 255, 0, 1),
        -${dotSize}px ${dotSize}px 0
          rgba(0, 255, 0, 1)`

  const BIG_DOTS_SHADOW = `${dotSize * 2.6}px 0 0 rgba(0, 255, 0, 1),
        -${dotSize * 2.6}px 0 0 rgba(0, 255, 0, 1),
        0 ${dotSize * 2.6}px 0 rgba(0, 255, 0, 1),
        0 -${dotSize * 2.6}px 0 rgba(0, 255, 0, 1),
        ${dotSize * 1.9}px -${dotSize * 1.9}px 0 rgba(0, 255, 0, 1),
        ${dotSize * 1.9}px ${dotSize * 1.9}px 0 rgba(0, 255, 0, 1),
        -${dotSize * 1.9}px -${dotSize * 1.9}px 0
          rgba(0, 255, 0, 1),
        -${dotSize * 1.9}px ${dotSize * 1.9}px 0 rgba(0, 255, 0, 1)`

  useEffect(() => {
    controls
      .start((i) => ({
        boxShadow: INITIAL_BOX_SHADOW,
        rotate: `${i * 360}deg`,
        scale: 1.3,
      }))
      .then(async () => {
        await controls.start((i) => ({
          rotate: `${i * 180}deg`,
          boxShadow: i === 0 ? SMALL_DOTS_SHADOW : BIG_DOTS_SHADOW,
          scale: 1,
        }))
        return await controls.start((i) => ({
          boxShadow: INITIAL_BOX_SHADOW,
          rotate: `${i * 360}deg`,
          scale: 1.3,
        }))
      })
  }, [
    mouseUp,
    controls,
    INITIAL_BOX_SHADOW,
    SMALL_DOTS_SHADOW,
    BIG_DOTS_SHADOW,
  ])

  return (
    <div className={styles.cursorWrap}>
      <motion.div
        initial={{
          y: '50%',
          x: '50%',
        }}
        animate={{
          y: y - size / 2,
          x: x - size / 2,
        }}
        transition={{
          type: 'spring',
          damping: 50,
        }}
        className={styles.cursor}
      >
        <Flower
          size={size}
          dotSize={dotSize}
          animationDuration={1000}
          className={'flower-spinner'}
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
