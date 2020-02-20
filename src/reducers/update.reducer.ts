/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { CrudoState, GenericAction } from "../types"

export const updateReducer = <State extends CrudoState<unknown> = any>() => ({
  updateRequest: (state: State, action: GenericAction) => {
    state.loading = true
    state.payload = action.payload
    state.status = "update_request"
    state.errors = undefined
  },
  updateSuccess: (state: State, action: GenericAction) => {
    state.loading = false
    state.item = action.payload
    state.status = "update_success"
    state.errors = undefined
  },
  updateFailure: (state: State, action: GenericAction) => {
    state.loading = false
    state.errors = action.payload
    state.status = "update_failure"
  },
})
