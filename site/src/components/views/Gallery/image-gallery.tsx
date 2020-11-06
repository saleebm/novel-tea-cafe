import React, { useMemo, useState } from 'react'
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
} from 'framer-motion'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import styles from './image-gallery.mod.scss'

/**
 * todo extract to separate files
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
  Pick<GatsbyTypes.SanityMainImage, '_key' | 'alt' | 'caption'> & {
    readonly asset: GatsbyTypes.Maybe<{
      readonly fluid: GatsbyTypes.Maybe<
        GatsbyTypes.GatsbySanityImageFluidFragment
      >
    }>
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

// the props for the single image (opened up view)
interface SingleImageProps {
  image: GalleryImage
  setOpen: React.Dispatch<React.SetStateAction<false | string>>
}

interface GalleryCardProps {
  imageFluid: FluidObject | FluidObject[]
  onClick: () => void
  layoutId: string
}

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

const GalleryCard = ({
  imageFluid,
  onClick,
  layoutId,
}: GalleryCardProps) => {
  return useMemo(
    () => (
      <li onClick={onClick} className={styles.card}>
        <motion.div className={styles.cardContentContainer}>
          <motion.div
            className={styles.cardContent}
            layoutId={`card-container-${layoutId}`}
          >
            <motion.div
              className={styles.cardImageContainer}
              layoutId={`card-image-container-${layoutId}`}
            >
              <GatsbyImage
                imgStyle={{
                  objectFit: 'contain !important',
                  margin: '0 auto',
                }}
                fluid={imageFluid}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </li>
    ),
    [imageFluid, layoutId, onClick],
  )
}

const GalleryList = ({ images, setOpen }: GalleryListProps) => {
  return useMemo(
    () => (
      <ul className={styles.cardList}>
        {images?.map((node, index) => (
          <>
            {node?.image?.asset?.fluid ? (
              <GalleryCard
                key={node?.image?._key ?? index}
                layoutId={node.image._key ?? ''}
                imageFluid={node?.image?.asset?.fluid}
                onClick={() => setOpen(node?.image?._key as string)}
              />
            ) : null}
          </>
        ))}
      </ul>
    ),
    [images, setOpen],
  )
}

const SingleImage = ({ image, setOpen }: SingleImageProps) => {
  return <></>
}

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

  const selectedImageNode: GalleryImage | undefined = useMemo(
    () =>
      (openImageKey &&
        Array.isArray(images) &&
        images.find(
          (node: GatsbyTypes.Maybe<GalleryImageObject>) =>
            node?.image?._key === openImageKey,
        )) ??
      undefined,
    [openImageKey, images],
  )

  return useMemo(
    () => (
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
          <AnimatePresence>
            {!!selectedImageNode ? (
              <SingleImage
                image={selectedImageNode}
                setOpen={setOpenImageIndex}
              />
            ) : null}
          </AnimatePresence>
        </section>
      </AnimateSharedLayout>
    ),
    [selectedImageNode, images, openImageKey],
  )
}
