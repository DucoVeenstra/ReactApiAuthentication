import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as constants from '../constants';
import { fetchTasks } from '../actions';
import TaskList from './Task_List';

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks(); 
  }

  renderTasks = () => {
    return (
      <section>
        <header>
          <h1>Tasks</h1>
        </header>

        <TaskList />
      </section>
    )
  }

  renderLoading = () => {
    return <div>Loading...</div>
  }

  render() {
    return (
      this.props.tasks.loading ? this.renderLoading() : this.renderTasks()
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state[constants.Name]
  }
}

export default connect(mapStateToProps, { fetchTasks })(Tasks);