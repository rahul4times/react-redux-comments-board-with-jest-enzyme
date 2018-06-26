import React from 'react';
import '../index';
import configureStore from '../redux/configureStore';

jest.mock('react-dom');
jest.mock('../redux/configureStore', () =>
  jest.fn(() => ({
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn()
  }))
);
describe('index', () => {
  test('should call configureStore', () => {
    expect(configureStore).toHaveBeenCalled();
  });
});
