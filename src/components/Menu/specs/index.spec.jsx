import React from 'react';
import { shallow } from 'enzyme';
import { Link, Menu } from 'semantic-ui-react';
import HeaderMenu from '../../Menu';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<HeaderMenu />);
});

describe('Menu Component', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should render a Menu component', () => {
    expect(enzymeWrapper.find(Menu).length).toBe(1);
  });

  it('should render 3 menu items', () => {
    expect(enzymeWrapper.find(Menu.Item).length).toBe(3);
  });
});
