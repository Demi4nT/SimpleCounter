//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import PropTypes from "prop-types";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					fill="currentColor"
					className="bi bi-clock"
					viewBox="0 0 16 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
				</svg>
			</div>
			<div className="oneDigit">{props.digitSix % 10}</div>
			<div className="twoDigits">{props.digitFive % 10}</div>
			<div className="threeDigits">{props.digitFour % 10}</div>
			<div className="fourDigits">{props.digitThree % 10}</div>
			<div className="fiveDigits">{props.digitTwo % 10}</div>
			<div className="sixDigits">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
let counter = 0;
setInterval(function () {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
