import { action, makeObservable, observable } from 'mobx'
import { ITimerStore } from './ifaces/ITimerStore'

class TimerStore implements ITimerStore {
  seconds: number = 0

  constructor () {
    makeObservable(this, {
      seconds: observable,

      countSeconds: action
    })
  }

  countSeconds (): void {
    this.seconds += 1
  }

  // foo foo foo
  private foo = setInterval (() => this.countSeconds(), 1000)
}

export default new TimerStore()
