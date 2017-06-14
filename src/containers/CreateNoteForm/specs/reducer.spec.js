import reducer from '../reducer';
import { SAVE_NOTE } from '../actionTypes';

describe('notes-container-reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle SAVE_NOTE', () => {
    expect(
      reducer([], {
        type: SAVE_NOTE,
        payload: { name: 'Josh', title: 'Farmlogs', note: 'Farmlogs Rules' },
      }),
    ).toEqual([{ name: 'Josh', title: 'Farmlogs', note: 'Farmlogs Rules' }]);
  });
});
