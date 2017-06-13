/* eslint-disable */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveNote } from './actionCreators';

class NoteCreator extends React.Component {
  state = {
    redirect: false,
  };

  onSubmit = values => {
    this.props.saveNote(values);
    this.setState({ redirect: true });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="field">
          <label>Name</label>
          <Field
            placeholder="First Name"
            name="name"
            component="input"
            type="text"
          />
        </div>
        <div className="field">
          <label>Title</label>
          <Field
            placeholder="Note Title"
            name="title"
            component="input"
            type="text"
          />
        </div>
        <div className="field">
          <label>Note</label>
          <Field
            placeholder="Please enter your note"
            name="note"
            component="textarea"
          />
        </div>
        <button type="submit" className="ui button">Submit</button>
        {this.state.redirect ? <Redirect to="/" /> : null}
      </form>
    );
  }
}

export default reduxForm({
  form: 'NoteNewForm',
})(connect(null, { saveNote })(NoteCreator));
