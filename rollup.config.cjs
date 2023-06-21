// const peerDepsExternal = require('rollup-plugin-peer-deps-external');
// const resolve = require('@rollup/plugin-node-resolve');
// const image = require('@rollup/plugin-image');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const json = require('@rollup/plugin-json');

const dts = require('rollup-plugin-dts').default;

// const terser = require('@rollup/plugin-terser');
// const cp = require('rollup-plugin-copy');

const packageJson = require('./package.json');

console.log('Rollup config loaded!');

//////////////////////
// Rollup Functions //
//////////////////////

/**
 * Logs warnings to console
 * Ignores:
 * - THIS_IS_UNDEFINED
 * - UNRESOLVED_IMPORT
 * @param warning - warning from Rollup
 */
const onWarn = (warning) => {
    if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
    }
    if (warning.code === 'UNRESOLVED_IMPORT') {
        return;
    }
    console.warn(warning.message);
}

///////////////////////////
// Default Configuration //
///////////////////////////

/**
 * Returns output configuration for Rollup
 * @param dir - directory name
 * @returns object with output configuration
 */
const getOutput = (dir) => {
    return [
        {

            file: `build/${dir}.js`,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: `build/${dir}.es.js`,
            format: 'esm',
            sourcemap: true
        }
    ]
}

const DEFAULT_PLUGINS = [
    // peerDepsExternal(),
    // resolve(),
    json(),
    // image(),
    postcss({extensions: ['.css', '.scss']}),
    typescript(),
    // cp({
    //     targets:
    //         [
    //             { src: "src/styles", dest: "build/" },
    //         ]
    // }),
    // terser()
]

const DEFAULT_DECLARATION_OPTIONS = {
    external: [/\.scss$/], // ignore .scss file
    plugins: [dts()],
}

const DEFAULT_BUNDLE_OPTIONS = {
    plugins: DEFAULT_PLUGINS,
    onwarn: onWarn
}

//////////////////////
// Configure Bundle //
//////////////////////

module.exports = [
    // components
    {
        input: 'src/components/index.ts',
        output: getOutput('components'),
        ...DEFAULT_BUNDLE_OPTIONS

    },
    {
        input: './build/components/index.d.ts',
        output: [{file: './build/components.d.ts', format: 'es'}],
        ...DEFAULT_DECLARATION_OPTIONS
    },
    // icons
    {
        input: 'src/components/Icons/index.ts',
        output: getOutput('icons'),
        ...DEFAULT_BUNDLE_OPTIONS
    },
    {
        // path to your declaration files root
        input: './build/components/icons/index.d.ts',
        output: [{file: './build/icons.d.ts', format: 'es'}],
        ...DEFAULT_DECLARATION_OPTIONS
    },
];
