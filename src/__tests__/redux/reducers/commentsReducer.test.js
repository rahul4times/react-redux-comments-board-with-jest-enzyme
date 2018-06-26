import {shallow} from 'enzyme';
import {COMMENTS_LOADING, COMMENTS_LOADED} from '../../../redux/actionTypes/actionTypes';
import commentsReducer from '../../../redux/reducers/commentsReducer';

describe('commentsReducer', () => {
  describe('COMMENTS_LOADING', () => {
    const state = {comments: ['comment']};
    const action = {type: COMMENTS_LOADING};
    test('sets an empty comments array', () => {
      expect(commentsReducer(state, action)).toEqual({comments: []});
    });
  });
  describe('COMMENTS_LOADED', () => {
    const state = {comments: []};
    const action = {type: COMMENTS_LOADED, comments: ['comment']};
    test('sets values in comments array', () => {
      expect(commentsReducer(state, action)).toEqual({comments: ['comment']});
    });
  });
});
