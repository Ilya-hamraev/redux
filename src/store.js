import { createStore, compose, applyMiddleware } from "redux";
import { tvmazeFetchMiddleware } from "./middlewares";
import rootReducers from "./reducers";

const createAppStore = () => {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(tvmazeFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default createAppStore;
