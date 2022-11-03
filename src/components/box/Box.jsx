import React from 'react'
import './box.css';

function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
  }

export default Box