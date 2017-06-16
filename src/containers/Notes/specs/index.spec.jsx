import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react';
import Notes from '../../Notes';

let enzymeWrapper;
const props = {
  notes: [
    {
      name: 'Rich Hickey',
      title: 'Simple not Easy',
      note: 'Please use datomic',
    },
    {
      name: 'Haskell Curry',
      title: 'You are welcome',
      note: 'Do not forget to Curry!',
    },
  ],
};

beforeEach(() => {
  enzymeWrapper = shallow(<Notes {...props} />);
});

describe('NotesContainer', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  })
})