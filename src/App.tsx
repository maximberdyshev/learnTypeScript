import { ComponentOne } from './components/ComponentOne'
import { ComponentThree } from './components/ComponentThree'
import { ComponentTwo } from './components/ComponentTwo'

export const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello world!</h1>

      <ComponentOne />
      <br />

      <ComponentTwo />
      <br />

      <ComponentThree />
    </div>
  )
}
