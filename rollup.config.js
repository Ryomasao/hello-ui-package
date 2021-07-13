import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const PACKAGE_ROOT_PATH = process.cwd()

export default [
  {
    input: `${PACKAGE_ROOT_PATH}/src/index.ts`,
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
    ],
  },
]
