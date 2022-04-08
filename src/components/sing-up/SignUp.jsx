import React from 'react';
import {singUp} from '../RegisterForm/RegisterForm';


export default class Scotto extends React.Component {
  // creazione della classe RegisterForm, con i suoi parametri
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      lastname: "",
      error: null,
      resultText: ""
    };
  }

  change = (e) => {
    // metodo change: rileva l'evento, identificato con (e). è in arrow function perché, altrimenti, in fase di render non accede alla proprietà this. questa è la soluzione più immediata
    this.setState({
      // setState è una delle cose che non ho capito e devo riguardarmi, avevo scritto solo this.state. Questo metodo permette di immagazzinare in un nuovo oggetto le informazioni ottenute durante l'evento cambiamento
      [e.target.name]: e.target.value, // in seguito all'evento, prendiamo il nome del target (cioè di ciascun input) : il valore di ciascun input
    });
  };

  submit = (e) => {
    // metodo submit (legato all'evento, in arrow function per caso durante le varie soluzioni agli errori, ma dovrebbe funzionare anche scritto normalmente)
    e.preventDefault(); // impediamo al form (e non al singolo bottone) di procedere con l'invio, perché dovrà invece fare la chiamata fetch
    //console.log(this.state); // verifica che legge gli input

    fetch("https://reqres.in/api/register", {
      // chiamata fetch
      method: "POST", // metodo post perché stiamo inviando ad un server fittizio
      body: JSON.stringify({
        // il corpo della nostra chiamata va confertito in json
        /* email: this.state.email,          // normalmente comprende tutti gli elementi della classe
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm,
                name: this.state.name,
                lastname: this.state.lastname,*/

        //...this.state,                    // e se i nomi coincidono tutti a quelli del database, si può semplicemente scrivere questo e passare così l'intero state della classe

        email: this.state.email, // ma passiamo solo questi due campi per far funzionare la chiamata fetch all'url fittizio
        password: this.state.password,
      }),
      headers: {
        // informazioni per impostare al file json il tipo di caratteri
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ resultText: data })
        if (!data.error) {
          this.setState({ error: true });
          return;
        }
      });


      const utenti = JSON.parse(localStorage.getItem("utenti"));

        if (utenti) {
          utenti.push(this.state);
          localStorage.setItem("utenti", JSON.stringify(utenti));
        } else {
          localStorage.setItem("utenti", JSON.stringify([this.state]));
        }

      this.setState({
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        lastname: "",
        resultText: "",
        error: null
      });
  };

  render() {
    return (
      // tutto l'html
      <div className="register-form col-6 text-center">
        <form className="form-group" onSubmit={this.submit}>
          {" "}
          {/*onSubmit va ad intercettare l'evento submit del form (quello su cui facciamo prevent default*/}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.change}
            className="form-control"
          ></input>
          {/*onChange va a rilevare il cambiamento per ogni singolo input*/}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.change}
            className="form-control"
          ></input>
          <label htmlFor="password-confirm">Confirm password:</label>
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.change}
            className="form-control"
          ></input>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.change}
            className="form-control"
          ></input>
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.change}
            className="form-control"
          ></input>
          <button className="btn btn-success mt-4" id="register-btn">
            Register
          </button>
        </form>
        {this.state.error?<div className='bg-danger text-white p-2 m-1 rounded'>{`${this.state.resultText.error}`}</div> : null}
      </div>
    );
  }
}