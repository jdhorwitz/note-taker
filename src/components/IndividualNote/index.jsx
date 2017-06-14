import React from 'react';
import { Link } from 'react-router-dom';

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

export default IndividualNote;
