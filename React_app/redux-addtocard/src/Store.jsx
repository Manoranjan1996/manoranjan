import { createStore } from "redux";
import rootReducer from "./redux/reducers/work";

// Create Redux store with DevTools integration
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
