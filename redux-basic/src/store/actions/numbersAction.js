
const putNumberMin = newNumber => {
  return {
    type: 'PUT_MIN_VALUE',
    payload: newNumber,
  }
}

export default putNumberMin