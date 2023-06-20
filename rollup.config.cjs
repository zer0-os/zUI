// const peerDepsExternal = require('rollup-plugin-peer-deps-external');
// const resolve = require('@rollup/plugin-node-resolve');
// const commonjs = require('@rollup/plugin-commonjs');
// const image = require('@rollup/plugin-image');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const json = require('@rollup/plugin-json');
// const terser = require('@rollup/plugin-terser');
// const cp = require('rollup-plugin-copy');

const packageJson = require('./package.json');

console.log('Rollup config loaded!');

module.exports = [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'build/components.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'build/components.es.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      // peerDepsExternal(),
      // resolve(),
      // commonjs(),
      json(),
      // image(),
      postcss({ extensions: ['.css', '.scss'] }),
      typescript(),
      // cp({
      //     targets:
      //         [
      //             { src: "src/styles", dest: "build/" },
      //         ]
      // }),
      // terser()
    ],
    onwarn: function (warning) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.warn(warning.message);
    }
  }
];
