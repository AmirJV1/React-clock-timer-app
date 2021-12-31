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
					date.getHours() > 12 ? parseInt(date.getHours() - 12) : '0' + date.getHours()
				}:${date.getMinutes()}:${
					date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
				}`}{' '}
				<span>{date.getHours > 12 ? 'PM' : 'AM'}</span>
			</p>
		</div>
	);
};

export default Clock;

// const normalizeTime = (time) => (time < 0 ? `0${time}` : time);

// const getCurrentTime = () => {
// 	let h = date.getHours(); //0-23
// 	let m = date.getMinutes(); //0-59
// 	let s = date.getSeconds(); //0 -59
// 	let sesion = 'AM';
// 	if (h === 0) h = 12;
// 	if (h > 12) {
// 		h = h - 12;
// 		sesion = 'PM';
// 	}
// 	normalizeTime(h);
// 	normalizeTime(m);
// 	normalizeTime(s);
//     console.log(`${h}:${m}:${s}`)
//     return `${h}:${m}:${s}`
// };
