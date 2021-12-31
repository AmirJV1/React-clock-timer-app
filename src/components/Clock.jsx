import React, { useState } from 'react';

const Clock = () => {
	const [date, setDate] = useState(new Date());

	React.useEffect(() => {
		var timerID = setInterval(() => tick(), 1000);
		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		setDate(new Date());
	}

	return (
		<div className="clockContainer">
			<p>
				{`${
					date.getHours() > 12
						? parseInt(date.getHours() - 12)
						: date.getHours() < 10
						? '0' + date.getHours()
						: date.getHours()
				}:${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()}:${
					date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
				}`}{' '}
				<span>{date.getHours() > 12 ? 'PM' : 'AM'}</span>
			</p>
		</div>
	);
};


export default Clock;


