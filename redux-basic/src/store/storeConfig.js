import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case 'PUT_MIN_VALUE':
        return {
          ...state,
          min: action.payload
        }
      case 'PUT_MAX_VALUE':
        return {
          ...state,
          max: action.payload
        }
      default:
        return {
          min: 1,
          max: 99,
        }
    }
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig
