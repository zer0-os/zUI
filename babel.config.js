module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/react',
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  sourceMaps: true,
  plugins: [
    ...(process.env.NODE_ENV === 'production'
      ? [['transform-rename-import', { original: '^(.+?)\\.scss$', replacement: '$1.css' }]]
      : []), // Required to correctly order imports and jest.mocks
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-classes'
  ]
};
