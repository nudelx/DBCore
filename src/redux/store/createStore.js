import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
// console.log('red', reducers)
export default (initialState = {}, history) => {
  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(
      routerMiddleware(history)
    ),
    // Required! Enable Redux DevTools with the monitors you chose
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  // const middlewares = []
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('redux/store/reducers', () => {
      const nextRootReducer = reducers.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
