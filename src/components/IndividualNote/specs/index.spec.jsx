import React from 'react';
import { shallow } from 'enzyme';
import IndividualNote from '../../IndividualNote';

let enzymeWrapper;
const props = {
  note: {
    name: 'Richard Stallman',
    title: 'Free Software',
    note: 'Remember to use free software',
  },
};

beforeEach(() => {
  enzymeWrapper = shallow(<IndividualNote {...props} />);
});

describe('IndivdualNote component', () => {
  it('should render itself and any subcomponents', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should display the name for the note that is passed in on props', () => {
    expect(enzymeWrapper.contains('Richard Stallman')).toBeTruthy();
  });

  it('should display the title for the note that is passed in on props', () => {
    expect(enzymeWrapper.contains('Free Software')).toBeTruthy();
  });

  it('should display the body of the note that is passed in on props', () => {
    expect(enzymeWrapper.contains('Remember to use free software')).toBeTruthy();
  });
})
