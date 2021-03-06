module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@Components': './src/components',
          '@Config': './src/config',
          '@Containers': './src/containers',
          '@Graphql': './src/graphql',
          '@Services': './src/services',
          '@Static': './static',
          '@Styles': './src/styles',
          '@Types': './src/models',
          '@Utils': './src/utils',
        },
      },
    ],
    "babel-plugin-optimize-clsx",
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-object-rest-spread',
    'babel-plugin-object-to-json-parse',
    [
      'import',
      {
        libraryName: '@material-ui/core',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'import',
      {
        libraryName: '@material-ui/lab',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lab',
    ],
    [
      'import',
      {
        libraryName: '@material-ui/icons',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'icons',
    ],
  ],
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'not ie <= 11',
            'not android 4.4.3',
          ],
          node: 'current',
        },
      },
    ],
  ],
}
