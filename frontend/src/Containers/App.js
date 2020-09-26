import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "../Components/MenuBar";
import MenuBar from "../Components/MenuBar";
import Home from "../Components/Home/Home";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Distinctions from "../Components/Distinctions/Distinctions";
import Social from "../Components/Social/Social";
class App extends React.Component {
	componentDidMount() {
		document.title = "Agus Quintanar | Computer Systems Engineer";
	}

	render() {
		return (
			<div className="App">
				<Router>
					{/* <Route path="/" render={() => <MenuBar />} /> */}

					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<div>
									<Home />
									<Skills />
									<Projects />
									<Distinctions />
									<Social />
								</div>
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
