/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import { CrudoState, GenericAction } from "../types"

export const readReducer = <State extends CrudoState<unknown> = any>() => ({
  readRequest: (state: State, action: GenericAction) => {
    state.loading = true
    state.payload = action.payload.req
    state.status = "read_request"
    state.errors = undefined
  },
  readSuccess: (state: State, action: GenericAction) => {
    state.loading = false
    state.item = action.payload.res
    state.status = "read_success"
    state.errors = undefined
  },
  readFailure: (state: State, action: GenericAction) => {
    state.loading = false
    state.errors = action.payload.res
    state.status = "read_failure"
  },
})
