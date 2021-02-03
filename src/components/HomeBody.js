import React from 'react';
import HomeCategories from './HomeCategories';
import "./styles/HomeBody.scss";
import quimica from "../assets/icons/quimica.png";
import biologia from "../assets/icons/biologia.png";
import musica from "../assets/icons/notas-musicales.png";
import ciencia from "../assets/icons/tubo-de-ensayo.png";
import informatica from "../assets/icons/chip.png";
import arquitectura from "../assets/icons/medida.png";

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
            {"id":1,"nombre":"Arquitectura","img":arquitectura},
            {"id":2,"nombre":"Ciencia","img":ciencia},
            {"id":3,"nombre":"Informatica","img":informatica},
            {"id":4,"nombre":"Biologia","img":biologia},
            {"id":4,"nombre":"Musica","img":musica},
            {"id":5,"nombre":"Quimica","img":quimica}

        ];
        return (
            <div className="home-body">
                <div style={{padding:"5%"}}>
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
                </div>
                <hr style={{width:"100%",color:"#FD6F4F"}}/>

                <div className="ultimas-preguntas">
                    {
                        preguntasMock.map((pregunta,id)=>{
                            return (<li key={id}>{pregunta.pregunta}</li>)
                        })
                    }
                </div>
                <hr style={{width:"100%",color:"#FD6F4F"}}/>
                <div className="nuestras-categorias">
                    {/*
                        <p>Nuestras categorias</p>
                        {
                            categoriasMock.map((categoria,id)=>{
                                return(<li key={id}>{categoria.nombre}</li>)
                            })
                        }
                    */}
                    <HomeCategories categories={categoriasMock}/>
                </div>
            </div>
        )
    }
}