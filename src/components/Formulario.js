import React, { Component } from 'react';

class Formulario extends Component {
    state = {
        categoria :''
     }
     componentDidMount(){
         this.setState({
             categoria: 'general'
         })

         
     }
     handleCategory = e =>{
         this.setState({
            categoria : e.target.value
         },()=>{
            //Pasar a la App principal
            this.props.consultarNoticias(this.state.categoria);
         });
         
        }
    render() {
        return (
            <div className = 'buscador row'>
               <div className = 'col s12 m8 offset-m2'>
                   <form >
                       <h2>Tus noticias por categoría</h2>

                       <div className = 'input-field col s12'>
                            <select onChange = {this.handleCategory}>
                                <option value = 'general'>General</option>
                                <option value = 'technology'>Tecnología</option>
                                <option value = 'entertainment'>Entretenimiento</option>
                                <option value = 'sports'>Deportes</option>
                                <option value = 'business'>Negocios</option>
                                <option value = 'health'>Salud</option>
                                <option value = 'science'>Ciencias</option>
                            </select>
                       </div>
                   </form>
                </div> 
            </div>
        );
    }
}

export default Formulario;