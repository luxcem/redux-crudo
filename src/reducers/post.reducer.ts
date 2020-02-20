/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { CrudoState, GenericAction } from "../types"

export const postReducer = <State extends CrudoState<unknown> = any>() => ({
  postRequest: (state: State, action: GenericAction) => {
    state.loading = true
    state.payload = action.payload
    state.status = "post_request"
    state.errors = undefined
  },
  postSuccess: (state: State, action: GenericAction) => {
    state.loading = false
    state.item = action.payload
    state.status = "post_success"
    state.errors = undefined
  },
  postFailure: (state: State, action: GenericAction) => {
    state.loading = false
    state.errors = action.payload
    state.status = "post_failure"
  },
})
