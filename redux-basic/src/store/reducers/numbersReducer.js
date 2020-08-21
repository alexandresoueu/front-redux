import { PUT_MIN_VALUE, PUT_MAX_VALUE } from "../actions/actionTypes"

const initialState = {
    min: 1,
    max: 10,

}

const numbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_MIN_VALUE:
      return {
        ...state,
        min: action.payload
      }
    case PUT_MAX_VALUE:
      return {
        ...state,
        max: action.payload
      }
    default:
      return state
  }
}

export default numbersReducer