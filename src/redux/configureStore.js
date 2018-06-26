import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import commentsReducer from './reducers/commentsReducer';

export default function configureStore(initialState){
  const reducers = combineReducers({
    comments: commentsReducer
  });
  const storeEnhancer = applyMiddleware(thunk);
  return createStore(
    reducers,
    initialState,
    compose(
      storeEnhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
