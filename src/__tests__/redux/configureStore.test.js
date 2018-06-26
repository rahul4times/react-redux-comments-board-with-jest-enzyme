import configureStore from '../../redux/configureStore';

describe('configureStore', () => {
  test('should return a store', () => {
    const store = configureStore({});
    expect(store).toEqual(
      expect.objectContaining({
        dispatch: expect.any(Function),
        getState: expect.any(Function),
        subscribe: expect.any(Function)
      })
    );
  });
});
