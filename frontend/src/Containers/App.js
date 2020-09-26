import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "../Components/MenuBar";
import MenuBar from "../Components/MenuBar";
import Home from "../Components/Home/Home"

class App extends React.Component {

	componentDidMount() {
		document.title = "Agus Quintanar | Computer Systems Engineer";
	}

	render() {
		return (
			<div className="App">
				<Router>
					{/* <ProtectedRoute path="/" render={() => <MenuBar />} /> */}

					<Route path="/" render={() => <MenuBar />} />

					<Switch>

						<Route
							exact
							path="/"
							render={() => (
								<Home  />
							)}
						/>


						{/* Primer Render de la app */}
						<Route
							path="/"
							render={() => (
								<div>
									<div className="App-header">
										<h1>
											Pagina no
											<p className="red">Disponible</p>
										</h1>
									</div>
								</div>
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

