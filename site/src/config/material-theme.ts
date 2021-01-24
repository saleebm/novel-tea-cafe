// Create a theme instance.
// todo mui v5
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { commonColors } from './common-colors'

const typography: TypographyOptions = {
  h1: {
    fontFamily: "'Recursive', sans-serif",
    textTransform: 'initial',
    fontVariant: 'small-caps',
    fontVariationSettings:
      '"MONO" 0, "CASL" 1, "wght" 400, "CRSV" 0.5',
  },
  h2: {
    fontFamily: "'Recursive', sans-serif",
    textTransform: 'initial',
    fontVariant: 'petite-caps',
    fontVariationSettings:
      '"MONO" 0, "CASL" 1, "wght" 400, "CRSV" 0.5',
  },
  h3: {
    fontFamily: "'Recursive', sans-serif",
    textTransform: 'initial',
    fontVariant: 'small-caps',
    fontVariationSettings:
      '"MONO" 0, "CASL" 1, "wght" 400, "CRSV" 0.5',
    fontStyle: 'oblique 2.25deg',
  },
  h4: {
    textTransform: 'initial',
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings:
      '"wght" 400, "CONT" 500, "MIDL" 0, "SALT" 1, "MONO" 0',
  },
  h5: {
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings:
      '"wght" 500, "CONT" 500, "MIDL" 0, "SALT" 1, "MONO" 0',
  },
  h6: {
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings:
      '"wght" 400, "CONT" 250, "MIDL" 0, "SALT" 1, "MONO" 0',
    lineHeight: 1.4,
  },
  body1: {
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings:
      '"MONO" 0, "CASL" 1, "wght" 400, "CRSV" 0.5',
  },
  body2: {
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings:
      '"wght" 400, "CONT" 500, "SALT" 1, "MONO" 0',
  },
  subtitle1: {
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings:
      '"MONO" 0, "CASL" 1, "wght" 400, "CRSV" 0.5',
  },
  subtitle2: {
    fontFamily: "'Recursive', sans-serif",
    fontVariationSettings: '"wght" 400, "CONT" 0, "SALT" 1, "MONO" 0',
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
          fontFamily: "'Recursive', sans-serif",
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
