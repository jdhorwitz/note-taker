import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../Home';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<Home />);
});

describe('Home component', () => {
  it('should render itself and any subcomponents', () => {
    expect(
      enzymeWrapper.find('div').first().hasClass('home-page'),
    ).toBeTruthy();
  });
});
