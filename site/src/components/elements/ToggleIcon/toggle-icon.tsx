import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '@material-ui/core'
import classes from 'clsx'
import styles from './togglewrap.module.scss'

interface ToggleIcon {
  isToggled: boolean
  onToggleClicked: () => void
  purpose: string
  title: string
  shouldReduceMotion: boolean
  IconClosed?: ReactNode
  IconOpen?: ReactNode
  iconPosition?: 'left' | 'right'
  children?: ReactNode
  classNames?: string
}

const toggleIconClosed = {
  rotate: 180,
  scale: 0,
  opacity: 0,
  transition: {
    duration: 0.15,
  },
}

const toggleIconOpen = {
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    duration: 0.2,
  },
}
// children should be a Font Awesome Icon
// but can also be used for other things
export const ToggleIcon = ({
  children, // can be used to add text to toggle
  isToggled,
  onToggleClicked,
  purpose,
  title,
  shouldReduceMotion,
  IconClosed,
  IconOpen,
  iconPosition = 'right',
  classNames = undefined,
}: ToggleIcon) => (
  <>
    {!!children && iconPosition === 'right' && children}
    <div
      key={'toggle-icon-wrap'}
      tabIndex={0}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
        event.key === 'Enter' && onToggleClicked()
      }
      aria-label={`Open ${purpose}`}
      aria-keyshortcuts={'Enter'}
      onClick={onToggleClicked}
      title={title}
      className={
        !!classNames
          ? classes(classNames, styles.toggle_wrap)
          : styles.toggle_wrap
      }
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {!isToggled ? (
          <motion.span
            key={'toggle-icon-closed'}
            initial={toggleIconClosed}
            animate={
              !shouldReduceMotion ? toggleIconOpen : toggleIconClosed
            }
            exit={toggleIconClosed}
            aria-current={!isToggled}
            className={styles.closed}
          >
            {IconClosed}
          </motion.span>
        ) : (
          <motion.span
            key={'toggle-icon-open'}
            initial={toggleIconClosed}
            animate={
              !shouldReduceMotion ? toggleIconOpen : toggleIconClosed
            }
            exit={toggleIconClosed}
            aria-current={isToggled}
            className={styles.open}
          >
            {IconOpen}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    {!!children && iconPosition === 'left' && children}
  </>
)
