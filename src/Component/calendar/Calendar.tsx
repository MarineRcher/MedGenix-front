import React from 'react';
import RightBlock from './rightBlock';
import LeftBlock from './leftBlock';

function Calendar() {
	constructor(props) {
		super(props);
		let date = new Date();
		this.state = {
			date: date,
			toggle: true,
			eventList: [],
			selectedDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` // Adjust month index
		};
	}

	handleToUpdate = (isToggle) => {
		this.setState({ toggle: isToggle });
	};

	handleToUpdateSubmit = (time, event) => {
		this.setState((prevState) => {
			const list = [...prevState.eventList, [this.state.selectedDate, time, event]];
			return {
				eventList: list
			};
		});
	};

	handleToUpdateDate = (date) => {
		this.setState({
			selectedDate: date
		});
	};

	componentDidMount() {
		this.timerID = setInterval(this.tick, 1000); // refresh each second
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({
			date: new Date()
		});
	};

	render() {
		return (
			<div className="wrapper">
				<LeftBlock date={this.state.date} handleToUpdate={this.handleToUpdate} handleToUpdateSubmit={this.handleToUpdateSubmit} />
				<RightBlock date={this.state.date} toggle={this.state.toggle} handleToUpdateDate={this.handleToUpdateDate} eventList={this.state.eventList} />
			</div>
		);
	}
}

export default Calendar;
