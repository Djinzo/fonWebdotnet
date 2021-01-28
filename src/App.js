import './App.css';
import {Component} from "react";
import Navbar from "./Compenents/navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Client from "./Pages/client";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Produit from "./Pages/produit";

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <div class="container">
                        <Switch>
                            <Route path="/client">
                                <Client/>
                            </Route>
                            <Route path="/produit">
                                <Produit/>
                            </Route>
                        </Switch>

                    </div>
                </Router>
            </div>
        );
    }


}

export default App;
