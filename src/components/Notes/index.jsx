import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import IndividualNote from '../IndividualNote';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './index.css';

class Notes extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <div className="notes-page">
        <div>
          <Divider hidden />
          <Container text textAlign="center" className="about-page">
            <Header as="h2">Your Notes</Header>
            {notes.map(note => <IndividualNote key={note.title} note={note} />)}
            <Link to="/create"><Button>Add A Note</Button></Link>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ notes: state.notes });

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(Notes);
