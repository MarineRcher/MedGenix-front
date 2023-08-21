import React from 'react';
import Styles from "./../../styles/Component/calendar.module.css"

const arrDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const arrMonth = {
	January: 31,
	February: 28,
	March: 31,
	April: 30,
	May: 31,
	June: 30,
	July: 31,
	August: 31,
	September: 30,
	October: 31,
	November: 30,
	December: 31
};

function RightBlock() {
	constructor(props) {
		super(props);
		this.state = {
			firstDay: new Date(
				this.props.date.getFullYear() +
				'-' +
				(this.props.date.getMonth() + 1) +
				'-01'
			).getDay(),
			selectedYear: this.props.date.getFullYear(),
			selectedMonth: this.props.date.getMonth(),
			selectedDay: this.props.date.getDate()
		};
		this.handleToUpdateDate = this.props.handleToUpdateDate; // Moved this assignment to the constructor
	}

	updateMonth = (event) => {
		let newMonth = Object.keys(arrMonth).indexOf(event.target.value);
		this.handleToUpdateDate(
			this.state.selectedDay + '/' + newMonth + '/' + this.state.selectedYear
		);
		this.setState({
			selectedMonth: newMonth,
			firstDay: new Date(
				this.state.selectedYear + '-' + (newMonth + 1) + '-01'
			).getDay()
		});
	};

	// ... Other methods ...

	render() {
		const monthOptions = Object.keys(arrMonth).map((month) => (
			<option
				className={styles.option-month}
				selected={
					month === Object.keys(arrMonth)[this.state.selectedMonth]
						? 'selected'
						: ''
				}
				key={month} // Added key attribute
			>
				{month}
			</option>
		));

		return (
			<div className="flip-container-right">
				<div className={`flipper ${this.props.toggle ? '' : 'toggle'}`}>
					<div className="front front-right">
						<div className="container-date-picker">
							<button className="btn btn-prev" onClick={this.prevMonth}>
								&lt;
							</button>
							<select className="select-month" onChange={this.updateMonth}>
								{monthOptions}
							</select>
							<input
								type="text"
								className="input-year"
								onChange={this.updateYear}
								value={this.state.selectedYear}
								maxLength="4" // Corrected typo "maxlength" to "maxLength"
							/>
							<button className="btn btn-next" onClick={this.nextMonth}>
								&gt;
							</button>
						</div>
						<div className="container-day">
							{arrDays.map((day, index) => (
								<div className="weekday" key={index}>
									{day.substring(0, 3)}
								</div>
							))}
							{this.getDayBlocks()}
						</div>
					</div>
					<div className="back back-right">
						<div className="container-events">{this.getEvents()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RightBlock;
