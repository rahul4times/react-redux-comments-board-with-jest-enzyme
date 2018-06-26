import {COMMENTS_LOADING, COMMENTS_LOADED} from '../actionTypes/actionTypes';

export default function commentsReducer(state={}, action={}){
  switch(action.type){
    case COMMENTS_LOADING:
      return {...state, comments: []};
    case COMMENTS_LOADED:
      return {...state, comments: action.comments};
    default:
      return state;
  }
};
