import GatsbyImage, { FixedObject } from 'gatsby-image'
import React, { memo } from 'react'
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link'
import { AnimatedInViewChildDiv } from '@Components/elements/InView/in-view'
import { MouseTrap } from '@Components/elements/MouseTrap/mouse-trap'
import { ActiveAreaTypes } from '@Components/context/MousePosition/mouse-position-provider'
import styles from '@Components/structure/Layout/header.mod.scss'

export const Logo = memo(
  ({
    file,
    ...linkProps
  }: { file: FixedObject } & Omit<
    GatsbyLinkProps<{}>,
    'to' | 'className' | 'href' | 'ref'
  >) => (
    <figure className={styles.logo_wrap}>
      <GatsbyLink
        className={styles.logo_link}
        to={'/'}
        {...linkProps}
      >
        <AnimatedInViewChildDiv>
          <MouseTrap
            additionalProps={{}}
            area={ActiveAreaTypes.anchor}
          >
            <GatsbyImage
              className={styles.logoImg}
              fixed={file}
              alt={
                'bucket with two leaves, noveltea written with kava bar on second line'
              }
            />
          </MouseTrap>
        </AnimatedInViewChildDiv>
      </GatsbyLink>
    </figure>
  ),
)
