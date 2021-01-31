import React, { useMemo, useState } from 'react'
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
} from 'framer-motion'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import styles from './image-gallery.mod.scss'
import clsx from 'clsx'
import {
  AnimatedInPlainViewParent,
  AnimatedInViewChildDiv,
} from '@Components/elements/InView/in-view'
import { Typography } from '@material-ui/core'

/**
 *todo:
 * 1. improve gallery animation
 * 2. reduce complexity of styles
 */

// the main component props
interface ImageGalleryProps {
  readonly sanityGalleryImages: GalleryImages | null | undefined
}

// The single image in the query data as an object
interface GalleryImageObject {
  readonly image: GalleryImage
}

type GalleryImage = GatsbyTypes.Maybe<
  Pick<GatsbyTypes.SanityMainImage, 'alt' | 'caption'> & {
    readonly asset: GatsbyTypes.Maybe<
      Pick<GatsbyTypes.SanityImageAsset, 'assetId'> & {
        readonly fluid: GatsbyTypes.Maybe<GatsbyTypes.GatsbySanityImageFluidFragment>
      }
    >
  }
>

interface GalleryImages {
  readonly images: GatsbyTypes.Maybe<
    ReadonlyArray<GatsbyTypes.Maybe<GalleryImageObject>>
  >
}

// the list component
interface GalleryListProps extends GalleryImages {
  setOpen: React.Dispatch<React.SetStateAction<false | string>>
  keyOpen: string | false
}

interface GalleryCardProps {
  imageFluid: FluidObject | FluidObject[]
  onClick: () => void
  layoutId: string
}

// the props for the single image (opened up view)
interface SingleImageProps {
  imageNode: GalleryImageObject
  setOpen: React.Dispatch<React.SetStateAction<false | string>>
  openImageKey: string
}

/**
 * card in the gallery
 * @param imageFluid
 * @param onClick
 * @param layoutId
 */
const GalleryCard = ({
  imageFluid,
  onClick,
  layoutId,
}: GalleryCardProps) =>
  useMemo(
    () => (
      <li onClick={onClick} className={styles.card}>
        <motion.div
          className={styles.cardContentContainer}
          layoutId={`card-content-container-${layoutId}`}
        >
          <motion.div
            className={styles.cardContent}
            layoutId={`card-container-${layoutId}`}
          >
            <motion.div
              className={styles.cardImageContainer}
              layoutId={`card-image-container-${layoutId}`}
            >
              <GatsbyImage
                className={styles.gatsbyImageWrapper}
                fluid={imageFluid}
                imgStyle={{
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </li>
    ),
    [imageFluid, layoutId, onClick],
  )

const GalleryList = ({ images, setOpen }: GalleryListProps) =>
  useMemo(
    () => (
      <ul className={styles.cardList}>
        {images?.map(
          (node, index) =>
            node?.image?.asset?.fluid && (
              <GalleryCard
                key={node?.image?.asset?.assetId ?? index}
                layoutId={node.image.asset?.assetId ?? ''}
                imageFluid={node?.image?.asset?.fluid}
                onClick={() =>
                  setOpen(`${node?.image?.asset?.assetId}`)
                }
              />
            ),
        )}
      </ul>
    ),
    [images, setOpen],
  )

const SingleImage = ({
  imageNode,
  setOpen,
  openImageKey,
}: SingleImageProps) =>
  useMemo(
    () => (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{
            duration: 0.3,
            delay: 0.15,
            ease: 'easeInOut',
          }}
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
        <motion.div
          className={clsx(styles.cardContentContainer, styles.open)}
          layoutId={`card-content-container-${openImageKey}`}
        >
          <motion.div
            className={styles.cardContent}
            layoutId={`card-container-${openImageKey}`}
          >
            <motion.div
              className={styles.cardImageContainer}
              layoutId={`card-image-container-${openImageKey}`}
            >
              <GatsbyImage
                className={styles.gatsbyImageWrapper}
                fluid={imageNode?.image?.asset?.fluid!}
                imgStyle={{
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </>
    ),
    [openImageKey, imageNode, setOpen],
  )

/**
 * @param allFile The image nodes from the gallery folder
 */
export function ImageGallery({
  sanityGalleryImages,
}: ImageGalleryProps) {
  const { images } = sanityGalleryImages || {}
  const [openImageKey, setOpenImageIndex] = useState<false | string>(
    false,
  )

  const selectedImageNode = useMemo(
    () =>
      openImageKey &&
      Array.isArray(images) &&
      images.find(
        (node: GatsbyTypes.Maybe<GalleryImageObject>) =>
          node?.image?.asset?.assetId === openImageKey,
      ),
    [openImageKey, images],
  )

  return useMemo(
    () => (
      <>
        <AnimatedInPlainViewParent>
          <AnimatedInViewChildDiv>
            <Typography
              className={styles.pageTitle}
              variant={'h1'}
              color={'textSecondary'}
              gutterBottom
            >
              Gallery
            </Typography>
          </AnimatedInViewChildDiv>
        </AnimatedInPlainViewParent>
        <AnimateSharedLayout
          type={'crossfade'}
          _transition={{ duration: 2 }}
        >
          <section className={styles.container}>
            <GalleryList
              keyOpen={openImageKey}
              images={images}
              setOpen={setOpenImageIndex}
            />
            <AnimatePresence
              initial={false}
              exitBeforeEnter
              presenceAffectsLayout={false}
            >
              {openImageKey && (
                <SingleImage
                  openImageKey={openImageKey}
                  imageNode={selectedImageNode as any}
                  setOpen={setOpenImageIndex}
                />
              )}
            </AnimatePresence>
          </section>
        </AnimateSharedLayout>
      </>
    ),
    [selectedImageNode, images, openImageKey],
  )
}
