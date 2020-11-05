import React, { useState } from 'react'
import GatsbyImage from 'gatsby-image'
import styles from './image-gallery.mod.scss'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

type AllFile = Pick<GatsbyTypes.FileConnection, 'totalCount'> & {
  readonly nodes: ReadonlyArray<
    Pick<GatsbyTypes.File, 'id' | 'publicURL'> & {
      readonly childImageSharp: GatsbyTypes.Maybe<{
        readonly fluid: GatsbyTypes.Maybe<
          GatsbyTypes.GatsbyImageSharpFluidFragment
        >
      }>
    }
  >
}

interface ImageGalleryProps {
  readonly allFile: AllFile | null | undefined
}

/**
 * @param allFile The image nodes from the gallery folder
 */
export function ImageGallery({ allFile }: ImageGalleryProps) {
  const [openImageId, setOpenImageId] = useState<false | string>(
    false,
  )

  const openSpring = {
    type: 'spring',
    stiffness: 200,
    damping: 30,
  }

  const closeSpring = {
    type: 'spring',
    stiffness: 300,
    damping: 35,
  }

  return (
    <AnimateSharedLayout
      type='crossfade'
      _transition={{ duration: 2 }}
    >
      <section className={styles.container}>
        <AnimatePresence>
          <ul>
            {allFile?.nodes?.map((node, index) =>
              node?.childImageSharp?.fluid ? (
                <div key={node?.id ?? index}>
                  <GatsbyImage fluid={node.childImageSharp.fluid} />
                </div>
              ) : null,
            )}
          </ul>
        </AnimatePresence>
      </section>
    </AnimateSharedLayout>
  )
}
