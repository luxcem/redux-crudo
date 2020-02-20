/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { createSlice } from "@reduxjs/toolkit"

import { CrudoState, Effects, Method, Options } from "./types"
import { crudoReducer } from "./reducers"
import { createAsyncAction } from "./actions"

const initialState = {
  loading: false,
  status: "idle",
}

export const createCrudoSlice = <T extends Method, DataType = any>(
  name: string,
  options: Options<T>
) => {
  type State = CrudoState<DataType>

  const extraReducers = Object.keys(options).reduce((acc, curr: string) => {
    return { ...acc, ...crudoReducer<State>(curr as Method) }
  }, {})

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      clearErrors: (state: State) => {
        state.errors = undefined
      },
      ...extraReducers,
    },
  })

  const actions: any = slice.actions // FIXME: Forces any since actions are not dynamically assigned

  const effects: Partial<Effects<T>> = Object.keys(options).reduce(
    (acc, curr: string) => {
      const fetcher = options[curr as T]
      // guard for undefined as Fetcher
      if (!fetcher) return acc
      return {
        ...acc,
        [curr]: createAsyncAction(
          fetcher,
          actions[`${curr}Request`],
          actions[`${curr}Success`],
          actions[`${curr}Failure`]
        ),
      }
    },
    {}
  )

  return {
    ...slice,
    effects: effects as Effects<T>,
  }
}
