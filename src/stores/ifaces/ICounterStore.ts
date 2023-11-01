export interface ICounterStore {
  counter: number

  decreaseCounter: () => void
  increaseCounter: () => void
}
