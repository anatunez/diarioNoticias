import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {

  state = {
    noticias : []
  };

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=767209fff7ca448c8016950cb48fa6dd`;

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
          <ListaNoticias noticias = {this.state.noticias}/>
        </div>
      </Fragment>
      
    );
  }
}

export default App;

