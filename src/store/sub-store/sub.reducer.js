import { FakeActionTypes } from "./sub.types";

const INITIAL_STATE = {
  firstAction:false
};
const fakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FakeActionTypes.FAKE_TYPE:
      return {
        ...state,
        firstAction:!state.firstAction
      };
    default:
      return state;
  }
};

export default fakeReducer;
