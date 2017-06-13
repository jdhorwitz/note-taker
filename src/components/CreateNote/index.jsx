import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NoteForm from '../../containers/CreateNoteForm';

class CreateNote extends React.Component {
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Add A Note</h1>
        <NoteForm onSubmit={handleSubmit} />
        <Button><Link to="/">Back Home</Link></Button>
      </div>
    );
  }
}

export default connect()(CreateNote);
