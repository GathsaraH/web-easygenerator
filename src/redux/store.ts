import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReduce";
import rootSaga from "./rootSaga";

const configureAppStore = () => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middlewareList = getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware);
      if (process.env.NODE_ENV === "development") {
        middlewareList.concat(logger);
      }
      return middlewareList;
    },
  });

  sagaMiddleware.run(rootSaga);

  return { store };
};

export const { store } = configureAppStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
