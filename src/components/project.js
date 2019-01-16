import React from 'react'

export default props => (
  <div className="project">
    <h3>
      <a target="_blank noopener noreferrer" href={props.link}>
        {props.name}
      </a>
    </h3>
    <p>{props.summary}</p>
  </div>
)
