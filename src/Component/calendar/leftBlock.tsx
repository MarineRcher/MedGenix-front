import React, { Component } from 'react';

const arrDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

class LeftBlock extends Component {
	constructor(props) {
		super(props);
		this.state = { toggle: true, time: "", event: "" };
		this.handleToUpdate = this.props.handleToUpdate;
		this.handleToUpdateSubmit = this.props.handleToUpdateSubmit;
	}

	handleClick = () => {
		this.handleToUpdate(!this.state.toggle);
		this.setState((prevState) => ({
			toggle: !prevState.toggle
		}));
	};

	handleSubmit = (event) => {
		this.handleToUpdateSubmit(this.state.time, this.state.event);
		event.preventDefault();
	};

	handleTimeChange = (event) => {
		this.setState({ time: event.target.value });
	};

	handleEventChange = (event) => {
		this.setState({ event: event.target.value });
	};

	render() {
		let h =
			(this.props.date.getHours() < 10 ? "0" : "") + this.props.date.getHours();
		let m =
			(this.props.date.getMinutes() < 10 ? "0" : "") +
			this.props.date.getMinutes();

		return (
			<div className="flip-container-left">
				<div className={`flipper ${this.state.toggle ? "" : "toggle"}`}>
					<div className="front front-left">
						<h2>Today</h2>
						<h1>{this.props.date.getDate()}</h1>
						<h2>{arrDays[this.props.date.getDay()]}</h2>
						<button className="btn btn-flip" onClick={this.handleClick}>
							+
						</button>
					</div>
					<div className="back back-left">
						<form onSubmit={this.handleSubmit}>
							<div className="container-event">
								<input
									type="text"
									className="input-time"
									maxLength="5" // Corrected typo "maxlength" to "maxLength"
									placeholder="12:00"
									onChange={this.handleTimeChange}
								/>
								<button className="btn btn-submit" type="submit">
									→
								</button>
							</div>
							<input
								type="text"
								className="input-event"
								placeholder="Event"
								onChange={this.handleEventChange}
							/>
						</form>
						<button className="btn btn-flip" onClick={this.handleClick}>
							-
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default LeftBlock;
