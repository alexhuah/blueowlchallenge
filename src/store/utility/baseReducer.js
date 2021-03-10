export default function baseReducer(initialState, methods) {
  return function (state, action) {
    const currState =
      !state || Object.keys(state).length === 0 ? initialState : state
    const method = methods[action.type]
    if (!method || action.error) {
      return currState
    }

    return method(currState, action)
  }
}
