import { action, makeObservable, observable } from 'mobx'
import { ICounterStore } from './ifaces/ICounterStore'

class CounterStore implements ICounterStore {
  counter: number = 0

  constructor () {
    makeObservable(this, {
      counter: observable,

      increaseCounter: action,
      decreaseCounter: action
    })
  }

  increaseCounter (): void {
    this.counter += 1
  }

  decreaseCounter (): void {
    this.counter -= 1
  }
}

export default new CounterStore()
