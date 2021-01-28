const axios = require("axios");


export default class Store {
    static host = "http://localhost:5000/api";
    static clients = this.host + "/clients";
    static pagenumber = this.clients + "/pagenubmer";
    static produit = this.host + '/produit';
    static catigorise = this.host + '/categories';

    static getClients() {
        return axios.get(this.clients);
    }

    static deleteClients(id) {
        console.log(this.clients + "/" + id);
        return axios.delete(this.clients + "/" + id);
    }


    static dothat() {
        axios.get(this.clients).then(value => console.log(value.data));
    }

    static addClient(data) {
        return axios.post(this.clients, data);
    }

    static getPageNumber() {
        return axios.get(this.pagenumber);
    }

    static getProduits() {
        return axios.get(this.produit);
    }

    static getCatigorise() {
        return axios.get(this.catigorise);
    }

    static addProduit(values) {
        return axios.post(this.produit, values)
    }

    static deletProduit(id) {
        return axios.delete(this.produit + '/' + id);
    }
}
