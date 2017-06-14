import React from 'react';
import { shallow } from 'enzyme';
import CreateNoteForm from '../../CreateNoteForm';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<CreateNoteForm />);
});

describe('CreateNoteForm container', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.instance()).toBeInstanceOf(CreateNoteForm);
  });
});
