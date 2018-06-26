import {shallow} from 'enzyme';
import {COMMENTS_LOADING, COMMENTS_LOADED} from '../../../redux/actionTypes/actionTypes';
import {commentsList} from '../../../redux/actionCreators/commentsAction';

describe('commentsAction', () => {
  describe('commentsList', () => {
    test('dispatches COMMENTS_LOADING', () => {
      const dispatch = jest.fn();
      commentsList()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({type: COMMENTS_LOADING});
    });
  });
});
