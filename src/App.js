import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    noticias : []
  };

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=${process.env.REACT_APP_APIKEY}`;

    const res = await fetch(url);
    const noticias = await res.json();
    this.setState({
      noticias : noticias.articles
    })
  }

  render() {
    return (
      <Fragment>
        
        <Header 
          titulo = 'El Quisquilloso'
        />
        <div className='container white contenedor-noticias'>
        <Formulario 
          consultarNoticias = {this.consultarNoticias}
        ></Formulario>
          <ListaNoticias noticias = {this.state.noticias}/>
        </div>
      </Fragment>
      
    );
  }
}

export default App;

