import { STATUS_TYPE } from '@/const/async-status'
import { BaseAction } from './interface'
import { LIST_DATA } from './constants'

export type State = {
  status: STATUS_TYPE
  error?: string
}

export const DEFAULT_STATE: State = {
  status: STATUS_TYPE.DEFAULT,
  error: ''
}

export default (state = DEFAULT_STATE, action: BaseAction<any>) => {
  let newState: State
  switch (action.type) {
    default:
      return state
  }
}
