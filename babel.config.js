module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@helpers': './src/helpers',
          '@models': './src/models',
          '@modules': './src/modules',
          '@middlewares': './src/middlewares',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
  ],
}
