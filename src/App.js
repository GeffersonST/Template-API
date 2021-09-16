import React, { Component } from "react";
//https://sujeitoprogramador.com/rn-api/?api=posts
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: [],
    };
  }

  componentDidMount() {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
        // console.log(json);
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.nutri.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt="" />
              <p>{item.subtitulo}</p>
              <a className="botao" href="#">
                Acessar
              </a>
            </article>
          );
        })}
      </div>
    );
  }
}
export default App;
