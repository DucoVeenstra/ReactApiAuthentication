import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as constants from '../constants';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.data.map((task, index) => {
          return (<div key={index}>{task}</div>)
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state[constants.Name]
  }
}

export default connect(mapStateToProps)(TaskList)