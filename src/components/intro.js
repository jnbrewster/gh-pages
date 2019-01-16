import React from 'react'
export default props => (
  <section>
    <div className="container-top">
      <h1>{props.headerText}</h1>
    </div>
    <div className="copy">
      <p>{props.introTop}</p>
      <p>{props.introMiddle}</p>
      <p>
        {props.introBottom}
        <span id="swap">{props.introLove}</span>.
      </p>
    </div>
  </section>
)
