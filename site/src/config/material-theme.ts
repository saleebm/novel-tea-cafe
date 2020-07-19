// Create a theme instance.
// todo mui v5
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { commonColors } from './common-colors'

const typography: TypographyOptions = {
  h1: {
    fontSize: '4.72rem',
    letterSpacing: '-0.037em',
    fontFamily: "'Jost', serif",
    textTransform: 'initial',
    fontVariant: 'small-caps',
    fontVariationSettings:
      '"wght" 400, "CONT" 1000, "MIDL" 0, "SALT" 1',
  },
  h2: {
    fontSize: '4.2rem',
    fontWeight: 300,
    letterSpacing: '-0.03em',
    fontFamily: "'Jost', serif",
    textTransform: 'initial',
    fontVariant: 'petite-caps',
    fontVariationSettings: '"wght" 300, "CONT" 0, "MIDL" 0, "SALT" 1',
  },
  h3: {
    fontSize: '3.75rem',
    letterSpacing: '-0.023em',
    fontFamily: "'Jost', serif",
    textTransform: 'initial',
    fontVariant: 'small-caps',
    fontVariationSettings: '"wght" 400, "CONT" 500, "MIDL" 0',
    fontStyle: 'oblique 2.25deg',
  },
  h4: {
    fontSize: '1.5rem',
    letterSpacing: '-0.019em',
    textTransform: 'initial',
    fontFamily: "'Jost', serif",
    fontVariationSettings:
      '"wght" 400, "CONT" 500, "MIDL" 0, "SALT" 1',
  },
  h5: {
    fontSize: '1.35rem',
    letterSpacing: '-0.018em',
    fontFamily: "'Jost', serif",
    fontVariationSettings:
      '"wght" 400, "CONT" 500, "MIDL" 0, "SALT" 1',
  },
  h6: {
    fontSize: '1.15rem',
    letterSpacing: '-0.021em',
    fontFamily: "'Jost', serif",
    fontVariationSettings:
      '"wght" 400, "CONT" 250, "MIDL" 0, "SALT" 1',
    lineHeight: 1.4,
  },
  body1: {
    fontFamily: "'Podkova', serif",
    fontSize: '1rem',
    letterSpacing: '-0.018em',
    lineHeight: 1.23,
    whiteSpace: 'pre-wrap',
    fontVariationSettings: '"wght" 400, "CONT" 0, "SALT" 1',
  },
  body2: {
    fontFamily: "'Podkova', serif",
    fontSize: '0.95rem',
    letterSpacing: 0,
    fontVariationSettings: '"wght" 400, "CONT" 500, "SALT" 1',
    lineHeight: 1.1,
  },
  subtitle1: {
    fontFamily: "'Jost', serif",
    fontSize: '1.025rem',
    letterSpacing: '-0.042em',
    lineHeight: 1.3,
    fontVariationSettings: '"wght" 400, "CONT" 0, "SALT" 1',
  },
  subtitle2: {
    fontFamily: "'Podkova', serif",
    fontSize: '1rem',
    letterSpacing: '-0.004em',
    lineHeight: 1.1,
    whiteSpace: 'pre-wrap',
    fontVariationSettings: '"wght" 400, "CONT" 0, "SALT" 1',
  },
}
export const createMaterialTheme = (isDarkMode: boolean) =>
  responsiveFontSizes(
    unstable_createMuiStrictModeTheme({
      palette: {
        common: {
          black: commonColors.black,
          white: commonColors.white,
        },
        background: {
          default: isDarkMode
            ? commonColors.black
            : commonColors.white,
          paper: isDarkMode
            ? commonColors.paperBlack
            : commonColors.paperWhite,
        },
        primary: {
          light: commonColors.primaryColorLight,
          main: commonColors.primaryColor,
          dark: commonColors.primaryColorDark,
        },
        secondary: {
          light: commonColors.secondaryColorLight,
          main: commonColors.secondaryColor,
          dark: commonColors.secondaryColorDark,
        },
        error: { light: '#e57373', main: '#f44336', dark: '#d32f2f' },
        type: isDarkMode ? 'dark' : 'light',
      },
      typography: {
        ...typography,
        button: {
          fontFamily: "'Podkova', serif",
          fontSize: '1rem',
          lineHeight: 1,
          letterSpacing: '-0.013em',
          fontVariationSettings: '"wght" 400, "CONT" 0, "SALT" 1',
        },
      },
      breakpoints: {
        /* adjusting small to 650 from 600 */
        values: { xs: 0, sm: 650, md: 960, lg: 1280, xl: 1920 },
      },
      mixins: {
        visuallyHidden: {
          clip: 'rect(1px, 1px, 1px, 1px) !important',
          visibility: 'hidden',
          position: 'absolute',
          insetBlockStart: 0,
          overflow: 'hidden !important',
          height: '1px',
          width: '1px',
          padding: 0,
          margin: 0,
        },
      },
    }),
  )
