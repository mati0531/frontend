
import React, { Component } from 'react'

class Buscardor extends Component {

   


    busquedaRef= React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();

       
        const termino = this.busquedaRef.current.value;
        console.log(termino)
        this.props.datosBusqueda(termino);
    }
    render() {
       

        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row" style={{'margin-top': '100px'}}>
                   
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control 
                        form-control-lg" placeholder="Buscar productos. Ejemplo: Remeras" />
                    </div>


                    <div className="form-group col-md-4 ">
                        <input type="submit" className="btn-buscador" value="Buscar" />
                    </div>
                </div>
            </form>
        )
    }
}


export default Buscardor;