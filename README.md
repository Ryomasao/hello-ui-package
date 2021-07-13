# Dead Simple React UI Package with typescript

React + Typescriptのパッケージ作成記録

## React設定

```
yarn init -y
```

パッケージ名について。

- パッケージ名は@組織名 or アカウント名/パッケージ名 とすることscoped packageにできる。
- scoped packageであれば、他のパッケージと名前衝突の問題が回避できる。


<b>package.json</b>

```json
  "name": "@ryomasao/hello-ui-package"
```

scoped packageを公開する場合、明示的にpublicにしていいよっていう設定をする必要がある。

<b>package.json</b>

```json
  "publishConfig": {
    "access": "public"
  },
```

reactをつっこむ。peerDependenciesで。

```
yarn add -P react react-dom 
```

ts環境準備。

```
yarn add -D typescript @types/react @types/react-dom
```

```
yarn tsc --init
```

<b>tsconfig.json</b>

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

サンプルコンポーネント準備。

```
mkdir -p src/components
touch src/components/Button.tsx
```

<b>Button.tsx</b>

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
## バンドル設定

```
yarn add -D rollup rollup-plugin-peer-deps-external rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-terser
```

<b>rollup.config.js</b>

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

ビルドスクリプト追加

<b>package.json</b>

```json
  "scripts": {
    "build": "rollup -c rollup.config.js"
  },
```

```
yarn build
```

`dist`配下に出力される。

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

`files`に配布するファイルを記載。省略したら、`dist/bundle.cjs.js`のみ配布されてた。

<b>package.json</b>

```json
  "files": [
    "dist"
  ],
```

型定義の名前が`index.d.ts`で、配布するディレクトリのrootにある場合、以下はいらないんだけど、一応書いとく。


<b>package.json</b>

```json
  "typings": "dist/index.d.ts",
```


## Publish

- npmjsのアカウントを作成。
- npm login でログインして、publish。

```
npm login
yarn publish
```

