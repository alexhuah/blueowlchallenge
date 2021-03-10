import * as CardAction from './CardAction'
import baseReducer from '../utility/baseReducer'

const initialState = {
  numbers: [],
}

export default baseReducer(initialState, {
  [CardAction.ADD_CARD](state, action) {
    const prevNumbers = [...state.numbers]
    prevNumbers.push(action.payload.number)
    return {
      ...state,
      numbers: prevNumbers,
    }
  },
  [CardAction.SORT_CARDS](state, action) {
    const prevNumbers = [...state.numbers]
    return {
      ...state,
      numbers: prevNumbers.sort((a, b) => a - b),
    }
  },
  [CardAction.DELETE_CARD](state, action) {
    const prevNumbers = [...state.numbers]
    let index = prevNumbers.indexOf(action.payload.number)
    prevNumbers.splice(index, 1)
    return {
      ...state,
      numbers: prevNumbers,
    }
  },
})
