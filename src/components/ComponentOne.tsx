import { observer } from 'mobx-react-lite'
import CounterStore from '../stores/CounterStore'

export const ComponentOne = observer((): JSX.Element => {
  return (
    <div>
      <span>
        Counter: {CounterStore.counter}
      </span>
      <br />

      <button
        onClick={() => CounterStore.increaseCounter()}
      >
        Increase 1
      </button>
      <br />

      <button
        onClick={() => CounterStore.decreaseCounter()}
      >
        Decrease 1
      </button>
    </div>
  )
})
