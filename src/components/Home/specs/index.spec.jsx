import React from 'react';
import { shallow } from 'enzyme';
import { Header, Button, Container } from 'semantic-ui-react';
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

  it('should render a container which contains the entire component', () => {
    expect(enzymeWrapper.find(Container).length).toBe(1);
  });

  it('should render two header elements  for welcome message and thoughts message', () => {
    expect(enzymeWrapper.find(Header).length).toBe(2);
  });

  it('should render 2 button elements for Create Note and View Notes', () => {
    expect(enzymeWrapper.find(Button).length).toBe(2);
  });
});
