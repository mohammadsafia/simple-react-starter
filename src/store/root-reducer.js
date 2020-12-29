import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import fakeReducer from './sub-store/sub.reducer'
const persistConfig = {
  key: "AppName",
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  fakeReducer
});

export default persistReducer(persistConfig, rootReducer);
