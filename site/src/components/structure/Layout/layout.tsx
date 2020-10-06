import React, {
  ReactNode,
  ReactNodeArray,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Helmet } from 'react-helmet-async'
import useEventListener from '@use-it/event-listener'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import withStyles from '@material-ui/core/styles/withStyles'
import { Container, CssBaseline, Theme } from '@material-ui/core'
import { LocalBusinessJsonLd } from 'gatsby-plugin-next-seo/lib'
import { graphql, useStaticQuery } from 'gatsby'

import { Header } from '@Components/structure/Layout/header'
import { Cursor } from '@Components/elements/Cursor/cursor'
import { useCursorPosition } from '@Utils/hooks/use-cursor-pos'
import { useDarkMode } from '@Utils/hooks/use-dark-mode'
import { BackToTop } from '@Components/elements/BackToTop/back-to-top'
import { createMaterialTheme } from '@Config/material-theme'
import { Footer } from '@Components/structure/Layout/footer'

import styles from './layout.mod.scss'
import '@Styles/index.global.scss'

interface Layout {
  children: ReactNode | ReactNodeArray
}

const GlobalStyles = withStyles((theme: Theme) => ({
  '@global': {
    '::-webkit-scrollbar': {
      width: '7px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '3px',
      boxShadow: `inset -1px 3px 5px 1px ${theme.palette.background.paper}`,
      backgroundColor: theme.palette.background.paper,
    },
    '::-webkit-scrollbar-thumb': {
      borderLeft: `1px solid ${
        theme.palette.primary[theme.palette.type]
      }`,
      borderRadius: '3px',
      backgroundColor: theme.palette.grey['300'],
      boxShadow: `3px 0px 4px 6px ${theme.palette.text.hint}`,
    },
    ':root': {
      // firefox
      'scrollbar-width': 'thin',
      'scrollbar-color': `${theme.palette.primary.main} ${theme.palette.grey['300']}`,
      '--herb-text-color': theme.palette.text.primary,
    },
  },
}))(() => null)

export function Layout({ children }: Layout) {
  const [x, y] = useCursorPosition()
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const [isCursorDown, setCursorDown] = useState(false)

  const handleMouseClick = useCallback(() => {
    setCursorDown((prevState) => !prevState)
  }, [])

  useEventListener(
    'mouseup',
    handleMouseClick,
    mainContainerRef?.current ?? undefined,
  )
  const {
    themeMode: { isDarkMode },
  } = useDarkMode()

  const materialTheme = useMemo(
    () => createMaterialTheme(isDarkMode),
    [isDarkMode],
  )
  const { file } = useStaticQuery(graphql`
    query LOGO_IMG {
      file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)

  const currentDate = new Date()

  return (
    <ThemeProvider theme={materialTheme}>
      <Helmet>
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap'
          }
          rel={'stylesheet'}
        />
      </Helmet>
      <LocalBusinessJsonLd
        type={'CafeOrCoffeeShop'}
        id={'https://www.novelteaorlando.com'}
        name={'NovelTea Cafe'}
        description={
          'Gather for fresh kava and kratom tea, fresh brewed kombucha, and daily social events in Orlando, Florida. What could be better? Answer: Nothing!'
        }
        url={'https://www.novelteaorlando.com'}
        telephone={'+14088717984'}
        priceRange={'$'}
        defer={true}
        openingHours={{
          dayOfWeek: [
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat',
            'Sun',
          ],
          closes: '12am',
          opens: '12pm',
          validFrom: currentDate.toLocaleString(),
          validThrough: new Date(
            currentDate.setMonth(currentDate.getMonth() + 4),
          ).toLocaleString(),
        }}
        address={{
          streetAddress: '157 Lake Howell Ln',
          addressLocality: 'Maitland',
          addressRegion: 'FL',
          postalCode: '32751',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '28.6329066',
          longitude: '-81.3230062',
        }}
        images={[
          //todo add more
          file.publicURL,
        ]}
        overrides={{
          '@type': 'CafeOrCoffeeShop',
          'hasMenu': 'https://novelteaorlando.com/menu',
        }}
      />
      <div className={styles.wrapper} ref={mainContainerRef}>
        <Container
          className={styles.mainContainer}
          maxWidth={false}
          disableGutters
        >
          <Cursor x={x} y={y} mouseUp={isCursorDown} />
          <Header />
          <main
            style={{
              minHeight: '60vh',
              position: 'relative',
            }}
            id={'herb-main'}
          >
            {children}
          </main>
          <Footer />
          <BackToTop />
          <GlobalStyles />
          <CssBaseline />
        </Container>
      </div>
    </ThemeProvider>
  )
}
