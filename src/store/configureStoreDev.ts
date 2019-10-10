import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas";

import { persistedReducer } from "./configurePersist";

export default function configureStore(initialState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
