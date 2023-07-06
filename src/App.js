import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Zoo from './pages/zoo';

function App() {
  return (
    <Router>
		<Navbar />
		<div className='main-content'>
			<Routes>
				<Route path='/zoo' element={<Zoo/ >}></Route>			
				<Route path='/about' element={<About/ >}></Route>
				<Route path='/contact' element={<Contact/> }></Route>
			</Routes>
		</div>
	</Router>
  );
}

export default App;
