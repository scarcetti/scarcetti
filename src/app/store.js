import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "./storage";

// RTK Query
import { authApi } from "./services/authApi";
import { userApi } from "./services/userAPi";
import { passApi } from "./services/passApi";

//Redux
import authReducer from "./persists/authSlice";
import userReducer from "./persists/userSlice";
import registerReducer from "./persists/registerSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  register: registerReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [passApi.reducerPath]: passApi.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [authApi.reducerPath, userApi.reducerPath, passApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, authApi.middleware, passApi.middleware),
});

setupListeners(store.dispatch);
