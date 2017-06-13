import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { Entrance } from 'animate-components';
import './index.css';

const Notes = ({ notes }) =>
  <div className="notes-page">
    <Entrance duration="1s">
      <Divider hidden />
      <Container text textAlign="center" className="about-page">
        <Header as="h2">Your Notes</Header>
        <p>This is where notes will go</p>
      </Container>
    </Entrance>
  </div>;

export default Notes;
