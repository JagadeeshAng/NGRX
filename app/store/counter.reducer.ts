import { createReducer, on } from "@ngrx/store"
import { incrementalCounter, decrementalCounter } from "./counter.action"
import { state } from "@angular/animations"


export interface CounterState {
  count: number
}

export const initialCount: CounterState = {
  count: 0
}

export const reducer = createReducer(
  initialCount,
  on(incrementalCounter, state => ({...state, count: state.count + 1})),
  on(decrementalCounter, state => ({... state, count: state.count -1}))
)
