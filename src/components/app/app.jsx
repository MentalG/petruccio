import React from 'react';

//components
import Navbar from '../navbar/navbar';
import Products from '../products/products';

//styles
import './app.css';

function App() {
	return (
		<div className='App'>
      	<Navbar />
			<Products />
		</div>
	);
}

export default App;
