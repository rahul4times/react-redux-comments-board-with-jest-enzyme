import {shallow} from 'enzyme';
import {COMMENTS_LOADING, COMMENTS_LOADED} from '../../../redux/actionTypes/actionTypes';
import commentsReducer from '../../../redux/reducers/commentsReducer';

describe('commentsReducer', () => {
  describe('COMMENTS_LOADING', () => {
    test('sets comments as an empty array', () => {
      const action = {type: COMMENTS_LOADING};
      const state = {comments: ['comment']};
      expect(commentsReducer(state, action)).toEqual({comments: []});
    });
  });
  describe('COMMENTS_LOADED', () => {
    test('sets values in comments array', () => {
      const state = {comments: []};
      const action = {type: COMMENTS_LOADED, comments: ['comment']};
      expect(commentsReducer(state, action)).toEqual({comments: ['comment']});
    });
  });
});
