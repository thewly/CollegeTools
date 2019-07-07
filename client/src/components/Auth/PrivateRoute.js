import React, { Component } from 'react'

import withAuth from './withAuth'

class PrivateRoute extends Component {
  render(){
    return (
      <div>
        <h1>This is a private route</h1>
      </div>
    )
  }
}

export default withAuth(PrivateRoute)
