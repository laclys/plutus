import { STATUS_TYPE } from '@/const/async-status'

export interface BaseAction<T> {
  type: string
  payload?: T
}
