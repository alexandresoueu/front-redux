import { PUT_MIN_VALUE, PUT_MAX_VALUE } from './actionTypes'

const putNumberMin = newNumber => {
  return {
    type: PUT_MIN_VALUE,
    payload: newNumber,
  }
}

const putNumberMax = newNumber => {
  return {
    type: PUT_MAX_VALUE,
    payload: newNumber,
  }
}

export {
  putNumberMin,
  putNumberMax
}