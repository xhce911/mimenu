import React from "react";
import * as a from "atomize";
import "../../css/home.css";
import QRCode from 'react-qr-code';


export default function Home() {
  return (
    <a.Div d="space-around">
      <a.Row>
        <a.Col size="2">
          <a.Text textSize="title" m="3rem" textWeight="800">
            MiMenu.org
          </a.Text>
          <a.Input
            m="1rem"
            placeholder="Search"
            suffix={
              <a.Button
                pos="absolute"
                onClick={() => console.log("clicked")}
                bg="transparent"
                hoverBg="gray300"
                w="3rem"
                top="0"
                right="0"
                rounded={{ r: "md" }}
              >
                <a.Icon
                  name="Search"
                  size="20px"
                  color="gray800"
                  cursor="pointer"
                />
              </a.Button>
            }
          />
          <ul>
            <li>
              <a.Anchor textWeight="800" textSize="subheader">
                Inicio
              </a.Anchor>
            </li>
            <li>
              <a.Anchor textWeight="800" textSize="subheader">
                MiMenu
              </a.Anchor>
            </li>
            <li>
              <a.Anchor textWeight="800" textSize="subheader">
                Historial
              </a.Anchor>
            </li>
            <li>
              <a.Anchor textWeight="800" textSize="subheader">
                Ventas
              </a.Anchor>
            </li>
          </ul>
        </a.Col>
        <a.Col size="8">
          <a.Container d="space-around" m="3rem">
            <a.Text textSize="title" textWeight="800">
              Mimenú
            </a.Text>
            <a.Button
              m={{ r:"3rem", y:"3rem"}}
              minH="40px"
              textSize="subheader"
              textColor="white"
              hoverTextColor="white"
              bg="success600"
              hoverBg="success700"
              p={{l:"2rem", r:"1rem"}}              
              suffix={
                <a.Icon 
                  name="Add" 
                  size="20px" 
                  color="white" 
                  pos="absolute"
                  transform="translateX(-100%)"
                  m={{r:"2.5rem"}}
                  
                />
                  
              }
            >
               Nuevo
            </a.Button>
            <a.Row>
              <a.Col size="4" align="center">
              <a.Text textSize="heading" m={{b:"1rem"}}>Secciones</a.Text>
                <a.Div 
                  textAlign="center"
                  maxW="350px"
                  p="4rem"
                  minH="180px" 
                  bg="success200"
                  align="center"
                  rounded="md"
                  >
                  <a.Text>Subir mis anuncios</a.Text>
                </a.Div>
                <a.Button
                  bg="transparent"
                  textColor="black"
                  minW="300px"
                  minH="80px"
                  textWeight="600"
                  m={{b:"1rem", t:"1rem", r:"1rem"}}
                    suffix={
                      <a.Icon
                        pos="absolute"
                        name="OptionsVertical"  
                        size="30px"
                        color="black"
                        right="1rem"
                      />
                    }
                  shadow="3"
                  hoverShadow="3"
                >
                  Platillos
                </a.Button>
              </a.Col>
              <a.Col size="4">
              <a.Text textSize="heading" m={{b:"1rem"}}>Productos</a.Text>
                <a.Div bg="gray500" minH="180px" rounded="md"  maxW="350px" >
                  <a.Div  p="1rem">
                      <a.Text textSize="heading">Pasta Alfredo</a.Text>
                      <a.Tag bg="transparent" border="1px solid" borderColor="info600" textColor="info800" m={{ r: "0.5rem", b: "0.5rem", t:".5rem" }}>Pasta</a.Tag>
                  </a.Div>
                  <a.Div textAlign="right" m={{r:"2rem", t:"1rem"}}>
                      <a.Text textSize="subheader" textWeight="600">$120</a.Text>
                  </a.Div>
                </a.Div>
              </a.Col>

            </a.Row>
            

            <a.Div maxW="300px"> 
              
            </a.Div>

          </a.Container>
        </a.Col>
        <a.Col size="2">
          
          <a.Container m={{t:"4rem"}}>
          <a.Row>
            <a.Text textSize="display" m={{b:"1rem"}}>Nuevo producto</a.Text>
            <a.Input m={{b:"1rem"}} placeholder="Nombre del platillo" />
             <a.Col>
                <a.Input placeholder="Precio" />
             </a.Col>
             <a.Col>
                <a.Input placeholder="I.V.A" />
             </a.Col>
             <a.Div w="100%" h="120px" border="2px dashed" borderColor="gray" rounded="lg" m={{t:"1rem"}} align="center" textAlign="center " p="3rem">
                  <a.Text  textSize="body">Subir Foto</a.Text>
             </a.Div>
          </a.Row>
           <a.Row  m={{t:"1rem"}}> 
             <a.Label

                align="center"
                textWeight="600"
                m={{ b: "1rem", t:"1rem" }}
                >
                  <a.Switch
                    
                  />
                  Descripción
             </a.Label>
            </a.Row>
            <a.Row> 
              <a.Textarea w="100%">
              </a.Textarea>
            </a.Row>
            <a.Row>
              <a.Label
                align="center"
                textWeight="600"
                m={{ b: "1rem", t:"1rem" }}
                >
                  <a.Switch
                    
                  />
                  Ingredientes 
                </a.Label>
            </a.Row>
            <a.Row>
              <a.Col>
                <a.Input m={{b:"1rem"}} placeholder="Nombre" />
              </a.Col>
              <a.Col>
                <a.Input m={{b:"1rem"}} placeholder="Cont." />
              </a.Col>
            </a.Row>
            <a.Row>
              <a.Button size="lg" w="100%"
                suffix={
                <a.Icon
                  name="Plus"
                  size="16px"
                  color="white"
                  m={{ l: "1rem" }}
                />
                  }>Añadir</a.Button>
            </a.Row>
           <a.Row>
            <a.Label
                  align="center"
                  textWeight="600"
                  m={{ b: "1rem", t:"1rem" }}
                  >
                    <a.Switch
                      
                    />
                    Info Nutricional 
              </a.Label>
             <a.Row>
              <a.Col>
                  <a.Input m={{b:"1rem"}} placeholder="Nombre" />
                </a.Col>
                <a.Col>
                  <a.Input m={{b:"1rem"}} placeholder="Cont." />
                </a.Col>
             </a.Row>
             <a.Button size="lg" w="100%"
              suffix={
              <a.Icon
                name="Plus"
                size="16px"
                color="white"
                m={{ l: "1rem" }}
              />
                }>Añadir</a.Button>
           </a.Row>
          </a.Container>
        </a.Col>
      </a.Row>
    </a.Div>
  );
}
