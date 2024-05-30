import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<Register />} />
			</Routes>

			<Toaster />
		</div>
	);
}

export default App;
