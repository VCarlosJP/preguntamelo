import React from 'react';
import {Col, Row} from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

export default class HomeCategories extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <p style={{textAlign:"center"}}>Categorias</p>
                <div style={{display:"flex", alignContent:"center", alignItems:"center"}}>
                <Row gutter={40}>
                    {this.props.categories.map((elem,id)=>
                        <Col 
                            xs={{span:6}} sm={{span:4}} md={{span:3}}
                            lg={{span:3}} xl={{span:1}}
                        ><img alt={elem.nombre} src={elem.img} width="100%"></img>
                        </Col>
                    )}
                </Row>
            </div>
            </div>
        )
    }
}