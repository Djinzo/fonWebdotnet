import {Component} from "react";
import Store from "../Connexion/store";


export default class Client extends Component {
    state = {
        clients: [],
        values: {
            nom: '',
            prenom: '',
            email: ''
        },
        pages: []
    }

    componentDidMount() {
        this.loadClients();
        Store.getPageNumber().then(data => {
            console.log(data);
            this.setState({pages: data.data})
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return <div>
            <h1>add Client</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nameInput"
                           onChange={(e) => {
                               this.state.values.nom = e.target.value;
                           }} placeholder="jhone"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenomInput" className="form-label">prenom </label>
                    <input type="text" onChange={(e) => {
                        this.state.values.prenom = e.target.value;
                    }}
                           className="form-control" id="prenomInput" placeholder="dow"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Example textarea</label>
                    <input type="email" onChange={(e) => {
                        this.state.values.email = e.target.value;
                    }}
                           placeholder="email@email.skm" className="form-control" id="emailInput"/>
                </div>
                <button className="btn btn-success" onClick={(e) => this.sandData()}>add</button>
            </form>
            <h1>Clients List</h1>
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Options</th>
                </tr>
                </thead>
                <tbody>
                {this.state.clients.map(c => <tr>
                    <th>{c.id}</th>
                    <td>{c.nom}</td>
                    <td>{c.prenom}</td>
                    <td>{c.email}</td>
                    <td><a class="btn btn-danger" onClick={(e) => {
                        this.deleteClient(c.id)
                    }}>delete</a></td>
                </tr>)}
                </tbody>
            </table>
            <nav aria-label="...">
                <ul className="pagination pagination-lg">
                    {this.state.pages.forEach(n => {
                        <li className="page-item" id={n}>
                            <a className="page-link" onClick={(e) => this.loadClients()}>{n}</a>
                        </li>
                    })}
                </ul>
            </nav>
        </div>
    }

    loadClients = () => {
        Store.getClients().then(data => {
            this.setState({clients: data.data});
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }

    deleteClient = (id) => {
        Store.deleteClients(id).then(data => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
    }

    sandData() {
        Store.addClient(this.state.values).then(data => {
            this.state.clients.push(data.data);
        }).catch(err => {
            console.log(err);
        });
    }
}
