import React from "react";
import {Link} from "react-router-dom";
import * as a from "atomize";

export default function ItemView() {
    return(
        <a.Container align="center" textAlign="left" d="inline-block">
            <a.Div pos="fixed" minH="40px" bg="white" minW="100%" >
                <Link to="/menu"><a.Icon name="LeftArrow" size="30px" m={{y:"1rem"}}/></Link>
                <a.Text textSize="display1">Pasta a la Bolognesa </a.Text>
            </a.Div>

            <a.Div bgImg="https://saboryestilo.com.mx/wp-content/uploads/2020/12/espagueti-a-la-bolonesa.jpg" minH="250px" minW="100%"  bgSize="cover" bgPos="center" m={{y:"3rem"}}>
            </a.Div>

            <a.Div m={{y:"2rem"}}>
                <a.Text textSize="heading">Descripción</a.Text>
                <a.Text textAlign="justify" m={{y:"1rem"}}>Es una receta muy sencilla de elaborar y perfecta para la dieta de los niños, ya que combina los hidratos de carbono presentes en la pasta, lo que les aporta energía, la proteína de la carne, un nutriente fundamental para el buen funcionamiento del cuerpo y las vitaminas y minerales del tomate. ¿Quieres saber como se hace la receta tradicional italiana de espaguetis a la boloñesa? Toma nota de la elaboración de este plato que tendrás listo en 20 minutos.</a.Text>
            </a.Div>
            
            <a.Div m={{y:"1rem"}}>
                <a.Text textSize="heading" m={{y:"1rem"}}>Ingredientes</a.Text>
                <a.Row>
                    <a.Col size="8">
                        <b>Nombre</b>
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        <b>Contenido</b>
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Pasta No. 12
                    </a.Col>
                    <a.Col size="4" textAlign="center"> 
                        20g
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Salsa de Carne
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        120g
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Aceíte de olivo
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        50ml
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Carne Molida 
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        300g
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Ajo y especias
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        60g
                    </a.Col>
                </a.Row>
            </a.Div>

            <a.Div m={{y:"1rem"}}>
                <a.Text textSize="heading" m={{y:"1rem"}}>Contenido Nutricional</a.Text>
                <a.Row>
                    <a.Col size="8">
                        Calorías
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        359kcal /100gr
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Proteína
                    </a.Col>
                    <a.Col size="4" textAlign="center"> 
                        12.7 gr / 100gr
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Grasa
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        1.5 gr / 100gr
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Hidratos de carbono	
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        72.3 gr / 100gr
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Índice glucémico	
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        40
                    </a.Col>
                </a.Row>
                <a.Row >
                    <a.Col size="8">
                        Ajo y especias
                    </a.Col>
                    <a.Col size="4" textAlign="center">
                        60g
                    </a.Col>
                </a.Row>
            </a.Div>

        </a.Container>
    );
}