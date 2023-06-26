import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import PokeCreate from './components/PokeCreate/PokeCreate';
import LandingPage from './components/LandingPage/LandingPage';
import Error from './components/Error/Error';
import Detail from './components/Detail/Detail';

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route path='/home' element={<Home />} />
					<Route path='/create' element={<PokeCreate />} />
					<Route path='/pokemons/:id' element={<Detail />} />
					<Route element={<Error />}/>
				</Routes>
			</div >
		</Router>
	);
}

export default App;