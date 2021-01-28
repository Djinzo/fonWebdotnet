import {Component} from "react";
import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a className="navbar-brand" href="#">MyApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/produit">Produit</Link>
                        <Link className="nav-item nav-link" to="/client">Client</Link>
                    </div>
                </div>
            </nav>
        );
    }


}

export default Navbar;

