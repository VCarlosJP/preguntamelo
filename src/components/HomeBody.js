import React from 'react';
import "./styles/HomeBody.scss";

export default class HomeBody extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ultimasPreguntas:null,
            categorias:null
        };
    }

    componentWillMount(){
        this.getUltimasPreguntas();
        this.getCategorias();
    }

    getUltimasPreguntas(){
        console.log("Getting ultimas preguntas");
        /*fetch('http://127.0.0.1:8000/ultimas_preguntas',{
            method:"GET"
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            this.setState({
                ultimasPreguntas:data
            });
        })
        .catch((error)=>{
            console.log(error);
        })*/
    }

    getCategorias(){
        console.log("Getting categorias");
        /*fetch('http://127.0.0.1:8000/categorias',{
            method:"GET"
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            this.setState({
                categoria:data
            });
        })
        .catch((error)=>{
            console.log(error);
        })*/
    }

    render(){
        const preguntasMock = [
            {"id":1,"pregunta":"pregunta 1"},
            {"id":2,"pregunta":"pregunta 2"},
            {"id":3,"pregunta":"pregunta 3"}
        ];
        const categoriasMock = [
            {"id":1,"nombre":"Lengua"},
            {"id":2,"nombre":"Fisica"},
            {"id":3,"nombre":"Informatica"}
        ];
        return (
            <div className="home-body">
                <div>
                    <p>Bienvenido/a a preguntamelo!</p>
                </div>
                <div>
                    <p>El sitio donde puedes resolver tus dudas, con respuestas de los expertetos
                        mas capacitados del area.
                    </p>
                </div>
                <div>
                    <p>Hecha un vistazo a las ultimas preguntas realizadas.</p>
                </div>
                <hr style={{width:"100%"}}/>

                <div className="ultimas-preguntas">
                    {
                        preguntasMock.map((pregunta,id)=>{
                            return (<li key={id}>{pregunta.pregunta}</li>)
                        })
                    }
                </div>
                <hr style={{width:"100%"}}/>
                <div className="nuestras-categorias">
                    <p>Nuestras categorias</p>
                    {
                        categoriasMock.map((categoria,id)=>{
                            return(<li key={id}>{categoria.nombre}</li>)
                        })
                    }
                </div>
            </div>
        )
    }
}