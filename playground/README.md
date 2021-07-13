# React + Typescript


```
touch package.json
```

<b>package.json</b>

```json
{
  "name": "playground",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Ryomasao",
  "license": "ISC",
}

```

```
yarn add react react-dom
```

```
yarn add -D typescript @types/react @types/react-dom webpack webpack-dev-server webpack-cli ts-loader
```

```
touch tsconfig.json
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



<b>main.tsx</b>

```tsx
import * as ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <p>hello react</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

```

<b>webpack.config.js</b>

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888,
    host: '0.0.0.0',
  },
}

```

<b>package.json</b>

```json
{
  "name": "playground",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "serve": 
  },
  "keywords": [],
  "author": "Ryomasao",
  "license": "ISC",
}
```