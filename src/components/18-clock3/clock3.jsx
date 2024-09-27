import React, { useEffect, useState } from "react";
import "../../assets/sass/clock.scss";
import moment from "moment";

export const Clock3 = (props) => {
	const { textColor, bgColor, hideTime } = props;
	const [dateTime, setDateTime] = useState(moment());

	const dateStr = dateTime.format("LL");
	const dayStr = dateTime.format("dddd");
	const hour = dateTime.format("HH");
	const minute = dateTime.format("mm");
	const second = dateTime.format("ss");

	let message = "";
	if (hour >= 5 && hour < 11) {
		message = "Morning";
	} else if (hour >= 11 && hour < 14) {
		message = "Noon";
	} else if (hour >= 14 && hour < 18) {
		message = "Afternoon";
	} else if (hour >= 18 && hour < 22) {
		message = "Evening";
	} else {
		message = "Night";
	}

	const style = { color: textColor, backgroundColor: bgColor };

	useEffect(() => {
		const timer = setInterval(() => {
			setDateTime(moment());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="clock-container" style={style}>
			{!!hideTime || (
				<div className="time">
					{hour}
					<span style={{ opacity: second % 2 }}>:</span>

					{minute}
				</div>
			)}
			<div>
				<div className="date">{dateStr}</div>
				<div className="day">
					{dayStr} {message}
				</div>
			</div>
		</div>
	);
};