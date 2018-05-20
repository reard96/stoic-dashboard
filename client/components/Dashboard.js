import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { saveDashboard } from '../store';
//import style from '../../public/style.css';
import moment from 'moment';

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

  // helpers to visualize data
  // getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // getDates(startDate, stopDate) {
  //   const dateArray = [];
  //   let currentDate = moment(startDate);
  //   const endDate = moment(stopDate);
  //   while (currentDate <= endDate) {
  //     let newDate = Object.assign({

  //     })
  //     dateArray.push({
  //       moment(currentDate).format('YYYY-MM-DD'),
  //       getRandomInt(1, 3)
  //     });
  //     currentDate = moment(currentDate).add(1, 'days');
  //   }
  //   return dateArray;
  // }

  render() {
    const { dashboard } = this.props;
    const { goal } = this.state;
    const { onChangeGoal, onUpdate } = this;

    if (!dashboard) {
      return (
        <div className="wrapper">
          <PageHeader>We don't have that dashboard!</PageHeader>
        </div>
      );
    }
    return (
      <div className="wrapper">
        <PageHeader>{ dashboard.goal }</PageHeader>
        <form onSubmit={ onUpdate } className="input">
          <input value={ goal } onChange={ onChangeGoal } />
          <button>Update Goal</button>
        </form>
        <CalendarHeatmap
          startDate={new Date('2018-01-01')}
          endDate={new Date('2018-06-01')}
          values={[
            { date: '2018-01-01', count: 1 },
            { date: '2018-01-22', count: 3 },
            { date: '2018-01-30', count: 2 },
            { date: '2018-02-02', count: 1 },
            { date: '2018-02-20', count: 3 },
            { date: '2018-02-28', count: 2 },
            { date: '2018-04-03', count: 1 },
            { date: '2018-04-22', count: 3 },
            { date: '2018-05-09', count: 2 }
            // ...and so on
          ]}
          showOutOfRangeDays={true}
          classForValue={(value) => {
            if (!value) {
              return 'react-calendar-heatmap color-empty';
            }
            return `react-calendar-heatmap color-github-${value.count}`;
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
