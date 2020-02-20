import { CrudoState, Method } from "../types"

import { createReducer } from "./create.reducer"
import { readReducer } from "./read.reducer"
import { updateReducer } from "./update.reducer"
import { deleteReducer } from "./delete.reducer"
import { listReducer } from "./list.reducer"
import { postReducer } from "./post.reducer"

export * from "./create.reducer"
export * from "./read.reducer"
export * from "./update.reducer"
export * from "./delete.reducer"
export * from "./list.reducer"
export * from "./post.reducer"

export const crudoReducer = <T extends CrudoState<unknown>>(method: Method) => {
  switch (method) {
    case "create":
      return createReducer<T>()
    case "read":
      return readReducer<T>()
    case "update":
      return updateReducer<T>()
    case "delete":
      return deleteReducer<T>()
    case "list":
      return listReducer<T>()
    case "post":
      return postReducer<T>()
    default:
      return undefined
  }
}
