import React, { useMemo } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { KeyboardArrowUp } from '@material-ui/icons'
import { Fab as Button } from '@material-ui/core'
import { motion, Variants } from 'framer-motion'
import { useWindowScroll } from '@Utils/hooks/use-window-scroll'

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
    'width': '48px !important',
    'maxWidth': '48px',
    'maxHeight': '48px',
    'bottom': theme.spacing(8),
    'right': theme.spacing(2),
    'position': 'fixed',
    'zIndex': 2000020,
    'color': theme.palette.secondary.contrastText,
    'backgroundColor':
      theme.palette.secondary[
        theme.palette.type === 'dark' ? 'light' : 'dark'
      ],
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.main,
    },
    'transition': theme.transitions.create(
      ['transform', 'backgroundColor', 'color'],
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

  return useMemo(
    () => (
      <MotionButton
        className={anchor}
        onClick={() =>
          window?.scrollTo({
            top: 0,
            behavior: 'smooth',
            left: 0,
          })
        }
        href={'#top'}
        variants={variants}
        size={'medium'}
        type={'button'}
        initial={'hide'}
        animate={scrollbarState.y > 150 ? 'show' : 'hide'}
        exit={'hide'}
        role={'navigation'}
        title={'Back To Top'}
      >
        <KeyboardArrowUp elevation={5} fontSize={'large'} />
      </MotionButton>
    ),
    [scrollbarState.y, anchor],
  )
}
