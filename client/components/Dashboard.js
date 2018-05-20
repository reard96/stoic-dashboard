import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { saveDashboard } from '../store';
import style from '../../public/style.css';

// heatmap
import CalendarHeatmap from 'react-calendar-heatmap';

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
        <form onSubmit={ onUpdate } className={style.input}>
          <input value={ goal } onChange={ onChangeGoal } />
          <button>Update Goal</button>
        </form>
        <CalendarHeatmap
          startDate={new Date('2018-01-01')}
          endDate={new Date('2018-06-01')}
          values={[
            { date: '2016-01-01', count: 1 },
            { date: '2016-01-22', count: 3 },
            { date: '2016-01-30', count: 4 },
            // ...and so on
          ]}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />
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
