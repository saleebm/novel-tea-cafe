import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ArrowDropUp } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { motion, Variants } from 'framer-motion'
import clsx from 'clsx'
import { useWindowScroll } from '@Utils/hooks/use-window-scroll'

import styles from './back-to-top.mod.scss'

const variants: Variants = {
  show: {
    scaleY: 1,
    scaleX: 1,
  },
  hide: {
    scaleY: 0,
    scaleX: 1,
  },
}

const MotionButton = motion.custom(Button)

const useStyles = makeStyles((theme: Theme) => ({
  anchor: {
    position: 'fixed',
    transition: theme.transitions.create(
      ['transform, backgroundColor'],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      },
    ),
  },
}))

export const BackToTop = () => {
  const { anchor } = useStyles()
  const scrollbarState = useWindowScroll()

  return (
    <MotionButton
      className={clsx(anchor, styles.anchor)}
      onClick={() =>
        window?.scrollTo({
          top: 0,
          behavior: 'smooth',
          left: 0,
        })
      }
      variants={variants}
      size={'small'}
      type={'button'}
      initial={'hide'}
      animate={scrollbarState.y > 150 ? 'show' : 'hide'}
      role={'navigation'}
      title={'Back To Top'}
    >
      <ArrowDropUp fontSize={'large'} />
    </MotionButton>
  )
}
