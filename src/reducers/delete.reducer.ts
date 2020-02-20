/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { CrudoState, GenericAction } from "../types"

export const deleteReducer = <State extends CrudoState<unknown> = any>() => ({
  deleteRequest: (state: State, action: GenericAction) => {
    state.loading = true
    state.payload = action.payload
    state.status = "delete_request"
    state.errors = undefined
  },
  deleteSuccess: (state: State, action: GenericAction) => {
    state.loading = false
    state.item = action.payload
    state.status = "delete_success"
    state.errors = undefined
  },
  deleteFailure: (state: State, action: GenericAction) => {
    state.loading = false
    state.errors = action.payload
    state.status = "delete_failure"
  },
})
