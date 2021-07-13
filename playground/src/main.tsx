import * as ReactDOM from 'react-dom'
import { Button, useNoEffect } from '@ryomasao/hello-ui-package'

const App = () => {
  useNoEffect()
  
  return (
    <div>
      <Button color={'yellow'}></Button>
      <p>hello react</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
