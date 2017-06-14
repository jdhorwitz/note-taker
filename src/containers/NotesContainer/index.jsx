import React from 'react';
import { connect } from 'react-redux';
import Notes from '../../components/Notes';

const currentNotes = store.getState();

console.log(store.getState());

const NotesContainer = () => {(
  <Notes notes={currentNotes} />
)};

export default NotesContainer;