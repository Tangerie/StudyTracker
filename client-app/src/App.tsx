import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';

function App() {
	return (
		<div className="min-h-screen min-w-full bg-black">
			<Router>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
			</Router>
		</div>
	);
}

export default App;
