import React from 'react';
import PropTypes from 'prop-types';

const IndividualNote = ({ note }) =>
  <div role="list" className="ui celled list">
    <div role="listitem" className="item">
      <div className="content">
        <div className="header">
          {note.title} by {note.name}
        </div>
        {note.note}
      </div>
    </div>
  </div>;

IndividualNote.propTypes = {
  note: PropTypes.object.isRequired,
};

export default IndividualNote;
