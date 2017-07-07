import React from 'react';
import PropTypes from 'prop-types';
import {Container, Header, Divider} from 'semantic-ui-react';
import {connect} from 'react-redux';
import _ from 'lodash';
import IndividualNote from '../../components/IndividualNote';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import './index.css';

const renderNotes = notes => {
  if (_.isEmpty(notes)) {
    return (
      <Link to="/create"><Button>No notes yet! Go make one!</Button></Link>
    );
  } else {
    return (
      <div>
        {notes.map(note => <IndividualNote key={note.title} note={note} />)}
        <Link to="/create"><Button>Add A Note</Button></Link>
      </div>
    );
  }
};

const Notes = ({notes}) =>
  <div className="notes-page">
    <div>
      <Divider hidden />
      <Container text textAlign="center" className="about-page">
        <Header as="h2">Your Notes</Header>
        {renderNotes(notes)}
      </Container>
    </div>
  </div>;

const mapStateToProps = state => ({notes: state.notes});

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Notes);
