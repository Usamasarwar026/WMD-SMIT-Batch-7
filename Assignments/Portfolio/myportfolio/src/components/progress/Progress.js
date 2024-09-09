import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress(props) {
  return (
    <div>
       <ProgressBar variant="success" style={{opacity: 0.5}} animated now={props.value} striped />
    </div>
  )
}

export default Progress
