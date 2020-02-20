/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import { CrudoState, GenericAction } from "../types"

export const listReducer = <State extends CrudoState<unknown> = any>() => ({
  listRequest: (state: State, action: GenericAction) => {
    state.loading = true
    state.payload = action.payload.req
    state.status = "list_request"
    state.errors = undefined
  },
  listSuccess: (state: State, action: GenericAction) => {
    state.loading = false
    state.items = action.payload.res
    state.status = "list_success"
    state.errors = undefined
  },
  listFailure: (state: State, action: GenericAction) => {
    state.loading = false
    state.errors = action.payload.res
    state.status = "list_failure"
  },
})
