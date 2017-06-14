import { saveNote } from '../actionCreators';
import { SAVE_NOTE } from '../actionTypes';

describe('note-container actions', () => {
  it('should dispatch a saveNote action', () => {
    expect(saveNote().type).toEqual(SAVE_NOTE);
  });
});
