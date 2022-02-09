import React from "react";
import {Link} from "react-router-dom";
import * as a from "atomize";
//import '../css/menu.css';


export default function MenuView() {
    return(
        <a.Container align="center" textAlign="left" d="inline-block">

            <section>
                <a.Div pos="fixed" minH="40px" bg="white" minW="100%" >
                    <Link to="/"><a.Icon name="LeftArrow" size="30px" m={{t:"1rem"}}/></Link>
                    <a.Text textSize="display1">Platillos </a.Text>
                </a.Div>
            </section>

           <section >
                <a.Div m={{t:"8rem"}} align="center">
                    {["Pasta Alfredo", "Fetuccini", "Calzone", "Lasssagna", "Champiñones al ajo", "Camarones"].map( (name, index)=>(
                            <a.Div bg="gray500" minH="180px" rounded="md"  maxW="350px" >
                                <a.Div m={{l:"1rem", t:"2rem"}} p="1rem">
                                    <Link to="/producto"><a.Text textSize="heading"textWeight="600" >{name}</a.Text></Link>
                                    <a.Tag bg="transparent" border="1px solid" borderColor="info600" textColor="info800" m={{ r: "0.5rem", b: "0.5rem", t:".5rem" }}>Pasta</a.Tag>
                                </a.Div>
                                <a.Div textAlign="right" m={{r:"2rem", t:"1rem"}}>
                                    <a.Text textSize="subheader" textWeight="600">$120</a.Text>
                                </a.Div>
                                
                            </a.Div>
                    ))}
                </a.Div>
           </section>

           
        </a.Container>
    );
}
