import { SAVE_NOTE } from './actionTypes';

const saveNote = values => ({
  type: SAVE_NOTE,
  payload: values,
});

export { saveNote };
