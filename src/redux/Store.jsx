import { configureStore } from '@reduxjs/toolkit';
import reducers from './Reducer/index';

const store = configureStore({
  reducer: reducers,
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
