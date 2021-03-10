import * as ActionUtility from '../utility/ActionUtility'

export const ADD_CARD = 'CardAction.ADD_CARD'
export function addCard(number) {
  return ActionUtility.createAction(ADD_CARD, { number })
}

export const SORT_CARDS = 'CardAction.SORT_CARD'
export function sortCards() {
  return ActionUtility.createAction(SORT_CARDS)
}

export const DELETE_CARD = 'CardAction.DELETE_CARD'
export function deleteCard(number) {
  return ActionUtility.createAction(DELETE_CARD, { number })
}
