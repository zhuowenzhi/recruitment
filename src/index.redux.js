const ADD_SHA = '加个小傻子观林'
const REMOVE_SHA = '加聪明智'
// reducer
export function counter(state=0, action) {
  switch(action.type) {
    case ADD_SHA: return state+1
    case REMOVE_SHA: return state-1
    default: return 10
  }
}

// action creator
export function addSHA() {
  return {type:ADD_SHA}
}

export function removeSHA() {
  return {type:REMOVE_SHA}
}