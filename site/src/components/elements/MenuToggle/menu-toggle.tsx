import React, { useMemo } from 'react'
import {
  motion,
  Transition,
  useReducedMotion,
  Variants,
} from 'framer-motion'
import classNames from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core'

import { MouseTrap } from '@Components/elements/MouseTrap/mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import styles from './menutoggle.mod.scss'

interface ToggleIcon {
  isToggled: boolean
  onToggleClicked: () => void
}

const MenuBarMotion = motion.custom(Box)

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.text.primary,
  },
  button: {
    width: '80px',
    height: '80px',
    borderRadius: theme.shape.borderRadius,
  },
}))
export const MenuToggle = ({
  onToggleClicked,
  isToggled,
}: ToggleIcon) => {
  const classes = useStyles()
  const shouldReduceMotion = useReducedMotion()

  const transition: Transition = {
    duration: shouldReduceMotion ? 0 : 0.15,
  }
  const spanOne: Variants = {
    open: {
      translateY: -4,
      rotate: 0,
      transition,
    },
    close: {
      translateY: 0,
      rotate: 225,
      transition,
    },
    initial: {
      translateY: -300,
      transition,
    },
  }

  const spanTwo: Variants = {
    open: {
      translateY: 4,
      rotate: 0,
      width: '23px',
      transition,
    },
    close: {
      translateY: 0,
      rotate: 135,
      width: '45px',
      transition,
    },
    initial: {
      translateY: -300,
      transition,
    },
  }

  return useMemo(
    () => (
      <motion.div
        initial={'close'}
        animate={isToggled ? 'close' : 'open'}
        className={styles.mainMenuTriggerWrapper}
        title={isToggled ? 'close menu' : 'open menu'}
        aria-label={isToggled ? 'close menu' : 'open menu'}
      >
        <MouseTrap area={ActiveAreaTypes.anchor} additionalProps={{}}>
          <Button
            aria-label={'menu button'}
            variant={'text'}
            title={isToggled ? 'close menu' : 'open menu'}
            onClick={onToggleClicked}
            className={classNames(
              classes.button,
              styles.mainMenuTrigger,
            )}
          >
            <MenuBarMotion
              component={'span'}
              variants={spanOne}
              className={classNames(styles.span, classes.root)}
            />
            <MenuBarMotion
              component={'span'}
              variants={spanTwo}
              className={classNames(styles.span, classes.root)}
            />
          </Button>
        </MouseTrap>
      </motion.div>
    ),
    [isToggled, classes, onToggleClicked, spanOne, spanTwo],
  )
}
