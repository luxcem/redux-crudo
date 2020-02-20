/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { CrudoState, GenericAction } from "../types"

export const createReducer = <State extends CrudoState<unknown> = any>() => ({
  createRequest: (state: State, action: GenericAction) => {
    state.loading = true
    state.payload = action.payload
    state.status = "create_request"
    state.errors = undefined
  },
  createSuccess: (state: State, action: GenericAction) => {
    state.loading = false
    state.item = action.payload
    state.status = "create_success"
    state.errors = undefined
  },
  createFailure: (state: State, action: GenericAction) => {
    state.loading = false
    state.errors = action.payload
    state.status = "create_failure"
  },
})
