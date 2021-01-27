import React from 'react';
import "./styles/HomeBody.scss";

export default class HomeBody extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const preguntasMock = [
            {"id":1,"pregunta":"pregunta 1"},
            {"id":2,"pregunta":"pregunta 2"},
            {"id":3,"pregunta":"pregunta 3"}
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
                        preguntasMock.map((item)=>{
                            return (<li>{item.pregunta}</li>)
                        })
                    }
                </div>
            </div>
        )
    }
}