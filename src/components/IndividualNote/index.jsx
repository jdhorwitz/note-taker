import React from 'react';

const Note = ( {name, title, note }) => {
  <div className="ui styled accordion">
    <div className="title">
      <i aria-hidden="true" className="dropdown icon"></i>{title} by {name}</div>
    <div class="content">{note}</div>
  </div> 
}

export default Note;