import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { saveDashboard } from '../store';
import style from '../../public/style.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: this.props.dashboard ? this.props.dashboard.goal : 'New goal here'
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

  componentWillReceiveProps(nextProps) {
    this.setState({ goal: nextProps.dashboard ? nextProps.dashboard.goal : '' });
  }

  render() {
    const { dashboard } = this.props;
    const { goal } = this.state;
    const { onChangeGoal, onUpdate } = this;

    if (!dashboard) {
      return (
        <div className={ style.wrapper }>
          <PageHeader>We don't have that dashboard!</PageHeader>
        </div>
      );
    }
    return (
      <div className={ style.wrapper }>
        <PageHeader>{ dashboard.goal }</PageHeader>
        <form onSubmit={ onUpdate }>
          <input value={ goal } onChange={ onChangeGoal } />
          <button>Update Goal</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ dashboards }, { id }) => {
  const dashboard = dashboards.find(dashboard => dashboard.id === id);
  return {
    dashboard
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveDashboard: (dashboard) => dispatch(saveDashboard(dashboard, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
