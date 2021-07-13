# Dead Simple React UI Package with typescript

## Set up React.

```
yarn init -y
```

```
yarn add -P react react-dom 
```

```
yarn add -D typescript @types/react @types/react-dom
```

```
yarn tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "declaration": true,
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
  },
  "include": [
    "src/**/*"
  ]
}
```

```
mkdir -p src/components
touch src/components/Button.tsx
```

```tsx
type Props = {
  color:string
}

const Button = (props:Props) => {
  return (
    <button style={{ color:props.color }}>from pure-react-package</button>
  )
}

export default Button
```

## Preparing the UI package bundle

```
yarn add -D rollup rollup-plugin-peer-deps-external rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-terser
```

```js
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

```

```json
  "scripts": {
    "build": "rollup -c rollup.config.js"
  },
```

```
yarn build
```

```
> tree
.
├── bundle.cjs.js
├── bundle.cjs.js.map
├── bundle.esm.js
├── bundle.esm.js.map
├── components
│   └── Button.d.ts
└── index.d.ts
```


## Publish

```
npm login
yarn publish
```

