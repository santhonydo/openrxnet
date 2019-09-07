import { LOGIN } from '../Actions/index';

const initialState = {
  userLoggedIn: false,
  jobs: []
};

function projectx(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { userLoggedIn : true })
    default:
      return state
  }
}

export default projectx;