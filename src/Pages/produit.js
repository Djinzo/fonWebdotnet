import {Component} from "react";

import Store from "../Connexion/store";


export default class Produit extends Component {
    state = {
        produit: [],
        categoris: [],
        values: {
            label: '',
            prix: 0.0,
            categorieId: 0
        }
    }


    componentDidMount() {
        this.loadCategorise();
        this.loadProduit();

    }

    render() {

        return (<div>

            <h1>add produit</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Nom de produit</label>
                    <input type="text" className="form-control" id="nameInput"
                           onChange={(e) => {
                               this.state.values.label = e.target.value;
                           }} placeholder="label"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenomInput" className="form-label">prix </label>
                    <input type="text" onChange={(e) => {
                        this.state.values.prix = e.target.value;
                    }}
                           className="form-control" id="prenomInput" placeholder="dow"/>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-10">
                            <label htmlFor="emailInput" className="form-label">Catigorie</label>
                            <select class="custom-select" aria-label="Default select example" id="emailInput"
                                    onChange={(e) => {
                                        this.state.values.categorieId = e.target.value
                                        console.log(this.state);
                                    }}>
                                <option selected>chouse one</option>
                                {this.state.categoris.map(c =>
                                    <option value={c.categorieId}>{c.catName}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-2 mt-4">
                            <button className="btn btn-success" >add categorie</button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success" onClick={(e) => this.sandproduit()}>add</button>
            </form>
            <h1>produit List</h1>
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Label</th>
                    <th scope="col">Prix</th>
                    <th scope="col">categorie</th>
                    <th scope="col">Options</th>
                </tr>
                </thead>
                <tbody>
                {this.state.produit.map(c => <tr>
                    <th>{c.produitId}</th>
                    <td>{c.label}</td>
                    <td>{c.prix}</td>
                    <td>{c.categorie.catName}</td>
                    <td><a className="btn btn-danger" onClick={(e) => {
                        this.deleteProdect(c.produitId)
                    }}>delete</a></td>
                </tr>)}
                </tbody>
            </table>
        </div>);
    }


    loadProduit() {
        Store.getProduits().then(data => {
            this.setState({produit: data.data});
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    loadCategorise() {
        Store.getCatigorise().then(data => {
            this.setState({categoris: data.data});
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    sandproduit() {
        return Store.addProduit(this.state.values).then(data => {
            this.state.produit.push(data.data);
        }).catch(err => {
            console.log(err);
        });
    }

    deleteProdect(id) {
        Store.deletProduit(id).then(data=>{
            console.log(data.data);
            window.location.reload();
        }).catch(err=>{
            console.log(err);
        })
    }
}
