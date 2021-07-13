import * as ReactDOM from 'react-dom'
import { Button } from '@ryomasao/hello-ui-package'

const App = () => {
  return (
    <div>
      <Button color={'yellow'}></Button>
      <p>hello react</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
