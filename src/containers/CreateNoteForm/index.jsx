import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { saveNote } from './actionCreators';
import './index.css';

class NoteCreator extends React.Component {
  state = {
    redirect: false,
  };

  onSubmit = values => {
    this.props.saveNote(values);
    this.setState({ redirect: true });
  };

  renderField = ({ input, label, type, textarea, meta: { touched, error, warning } }) => {
    const inputField = <input {...input} placeholder={label} type={type} />;
    const textareaField = <textarea {...input} placeholder={label} type={type} />;

    return (
      <div>
        <label>{label}</label>
        <div>
          { textarea ? textareaField : inputField }
          {touched && ((error && <span className="error">Required Field</span>))}
        </div>
      </div>
    );
  };


  render() {
    const required = value => value ? undefined : 'Required';
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Divider hidden />
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="field">
            <Field
              placeholder="Your Name"
              name="name"
              component={this.renderField}
              label="Name"
              validate={[required]}
              type="text"
            />
          </div>
          <div className="field">
            <Field
              placeholder="Note Title"
              name="title"
              component={this.renderField}
              label="Title"
              validate={[required]}
              type="text"
            />
          </div>
          <div className="field">
            <Field
              placeholder="Please enter your note"
              name="note"
              component={this.renderField}
              label="Note"
              validate={[required]}
              textarea={true}
              type="text"
            />
          </div>
          <button type="submit" className="ui button">Submit</button>
          {this.state.redirect ? <Redirect to="/notes" /> : null}
        </form>
      </Container>
    );
  }
}

NoteCreator.propTypes = {
  saveNote: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'NoteNewForm',
})(connect(null, { saveNote })(NoteCreator));
