import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';

describe('App Component', () => {
  const shallowWrapper = shallow(<App/>);
  test('renders correctly', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
})
