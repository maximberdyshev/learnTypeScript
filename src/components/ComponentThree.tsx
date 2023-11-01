import { observer } from 'mobx-react-lite'
import TimerStore from '../stores/TimerStore'

export const ComponentThree = observer((): JSX.Element => {
  return (
    <div>
      <span>Timer: </span>

      {TimerStore.seconds} sec
    </div>
  )
})
