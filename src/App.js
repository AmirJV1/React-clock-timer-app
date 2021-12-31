import './App.css';
import Clock from './components/Clock';
import Timer from './components/Timer';
function App() {
	return (
		<>
			<h1>Clock & Timer app</h1>
			<div className="App">
				<Clock />
				<Timer />
				<footer>
					<a href="https://www.linkedin.com/in/amirvelasquez1/" rel="noreferrer" target="_blank">
						By <span>Amir Velasquez</span>{' '}
					</a>
				</footer>
			</div>
		</>
	);
}

export default App;
