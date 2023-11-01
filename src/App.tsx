import { ComponentOne, ComponentTwo, ComponentThree } from './components'

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
