import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { saveDashboard } from '../store';

class CreateDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 'What is the habit you\'d like to build?'
    };
    this.onChangeGoal = this.onChangeGoal.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onChangeGoal(ev) {
    this.setState({ goal: ev.target.value });
  }
  onUpdate(ev) {
    ev.preventDefault();
    const dashboard = { id: this.props.id, goal: this.state.goal };
    this.props.saveDashboard(dashboard);
  }

  render() {
    const { goal } = this.state;
    const { onChangeGoal, onUpdate } = this;

    return (
      <div className="wrapper">
        <PageHeader>Create a Dashboard</PageHeader>
        <form className="input" onSubmit={ onUpdate }>
          <input value={ goal } onChange={ onChangeGoal } />
          <button className="btn btn-success">Create Goal</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveDashboard: (dashboard) => dispatch(saveDashboard(dashboard, history))
  };
};

export default connect(null, mapDispatchToProps)(CreateDashboard);
