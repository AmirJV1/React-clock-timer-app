import React, { useState } from 'react';
import '../timer.css';

const Timer = () => {
	const [showTimer, setShowtimer] = useState(false);
	const [startingTime, setStartingTime] = useState(null);
	const [timerTime, setTimerTime] = useState(null);
	const [isPause, setIsPause] = useState(false);

	const addTime = (code) => {
		switch (code) {
			case 'hr':
				setTimerTime(parseInt(timerTime + 3600));
				break;
			case 's':
				setTimerTime(parseInt(timerTime + 10));
				break;
			case 'm':
				setTimerTime(parseInt(timerTime + 60));
				break;
			default:
				console.error('No code for add time button avalaible.');
		}
	};

	const timeToSecconds = (time) => {
		time = time.toString();
		let a = time.split(':'); // split it at the colons
		let seconds = 0;
		switch (a.length) {
			case 3:
				seconds = parseInt(a[0] * 3600) + parseInt(a[1] * 60) + parseInt(a[2]);
				setTimerTime(seconds);
				break;

			case 2:
				seconds = parseInt(a[0] * 60) + parseInt(a[1]);
				setTimerTime(seconds);
				break;
			case 1:
				seconds = parseInt(a[0]);
				setTimerTime(seconds);
				break;
			default:
				alert('Please insert a valid value!');
				break;
		}
	};
	React.useEffect(() => {
		if (showTimer && !isPause) {
			var timerID = setInterval(() => tick(), 1000);
			return function cleanup() {
				clearInterval(timerID);
			};
		}
	});

	function tick() {
		if (timerTime !== null && timerTime !== 0) setTimerTime(timerTime - 1);
	}

	return (
		<>
			{!showTimer && (
				<button onClick={() => setShowtimer(!showTimer)} className="timerBtn">
					Open Timer
				</button>
			)}
			{showTimer && (
				<div className="timerSetUp">
					<div className="timerInputContainer">
						<input
							type="text"
							placeholder="00:12:00"
							onChange={(e) => {
								setStartingTime(e.target.value.toString());
							}}
						/>
						<button
							onClick={() => {
								addTime('hr');
							}}
						>
							{' '}
							+1 Hr
						</button>
						<button
							onClick={() => {
								addTime('m');
							}}
						>
							{' '}
							+1 Min
						</button>
						<button
							onClick={() => {
								addTime('s');
							}}
						>
							{' '}
							+10 Secs
						</button>
					</div>
					<div className="btns">
						<button onClick={() => timeToSecconds(startingTime)}>Start</button>
						<button onClick={() => setIsPause(!isPause)}>
							{isPause ? 'Continue' : 'Pause'}
						</button>
						<button onClick={() => setTimerTime(null)}>Reset</button>
					</div>
					<div className={`contdown ${timerTime === 0 && 'finished'}`}>
						{timerTime < 3600
							? `${new Date(timerTime * 1000).toISOString().substr(11, 8)}`
							: `${new Date(timerTime * 1000).toISOString().substr(11, 8)}`}
					</div>
					<button onClick={() => setShowtimer(!showTimer)}>Close timer</button>
				</div>
			)}
		</>
	);
};

export default Timer;
