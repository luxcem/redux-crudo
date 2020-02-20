import { ActionCreator, Fetcher } from "./types"

export function createAsyncAction(
  fetcher: Fetcher,
  requestAction: ActionCreator,
  successAction: ActionCreator,
  failureAction: ActionCreator
) {
  const fetchMethod = (req?: any) => async (dispatch: any) => {
    dispatch(requestAction({ req }))
    try {
      const data = await fetcher(req)
      dispatch(successAction({ req, res: data }))
    } catch (err) {
      dispatch(failureAction({ req, res: err.toString() }))
    }
  }
  return fetchMethod
}
