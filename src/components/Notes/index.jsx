import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import IndividualNote from '../IndividualNote';
import './index.css';

const Notes = ({ notes }) =>
  <div className="notes-page">
    {console.log(notes)}
    <div>
      <Divider hidden />
      <Container text textAlign="center" className="about-page">
        <Header as="h2">Your Notes</Header>
        {notes.map(note => (
          <IndividualNote note={note} />
        ))}
      </Container>
    </div>
  </div>;

export default Notes;
