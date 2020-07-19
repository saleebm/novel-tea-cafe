import { CSSProperties } from '@material-ui/core/styles/withStyles'

declare module '@material-ui/core/styles/createMixins' {
  // ... use interface declaration merging to add custom mixins
  interface Mixins {
    visuallyHidden: CSSProperties
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  import { Mixins } from '@material-ui/core/styles/createMixins'

  interface Theme {
    mixins: Mixins
  }
}
