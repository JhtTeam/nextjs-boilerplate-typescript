import rootReducer from "../reducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
