import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit"

import { createAsyncAction } from "./actions"

export interface CrudoState<T> {
  loading: boolean
  item?: T
  items?: T[]
  errors?: any
  payload?: any
  status: string
}

export type CrudoActionPayload = {
  req: any
  res?: any
}

export type GenericAction = PayloadAction<CrudoActionPayload>
export type ActionCreator = ActionCreatorWithPayload<CrudoActionPayload>

export type Method = "create" | "read" | "update" | "delete" | "list" | "post"

export type Fetcher = (...args: any[]) => Promise<any>
export type Options<T extends Method> = Record<T, Fetcher>
export type Effects<T extends Method> = Record<
  T,
  ReturnType<typeof createAsyncAction>
>
