import {COMMENTS_LOADING, COMMENTS_LOADED} from '../actionTypes/actionTypes';

export function commentsList(){
  return dispatch => {
    dispatch({type: COMMENTS_LOADING});
    setTimeout(() => {
      const comments = [{
        name: 'John',
        comment: 'You are awesome!'
      }];
      dispatch({type: COMMENTS_LOADED, comments: comments});
    }, 1000);
  }
}
