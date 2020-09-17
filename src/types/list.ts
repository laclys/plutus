export interface ResData {
  data: Data
  operationState: string
  success: boolean
  reason?: string
}

export interface Data {
  status: number
}

