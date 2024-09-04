import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ListSlice from "./ListSlice";

const actions = {
  [ListSlice.name]: ListSlice.actions,
};

const reducer = combineReducers({
  [ListSlice.name]: ListSlice.reducer,
});

const setupStore = () =>
  configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

type RootState = ReturnType<typeof reducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppStore, AppDispatch };
export { actions, setupStore };
