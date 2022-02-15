import React from 'react';
import { useGlobalContext } from './screens/Cart/StateContext';

// components
import Navbar from './Components/Navbar/index';
import CartContainer from './Components/CartContainer/index';
// items

const App = () => {
	const { loading } = useGlobalContext();
	if (loading) {
		return (
			<div className='loading'>
				<h1>Loading...</h1>
			</div>
		)
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	)
}

export default App;
