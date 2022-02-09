import * as a from "atomize";
import { Link } from "react-router-dom";


function MenuHome() {
  return (
    <a.Container d="inline-block">

      <a.Div m="1rem" textAlign="center">
        <a.Text textSize="header" p={{l:"3rem", r: "3rem", y:"0rem"}}  textWeight="600" >El faro de Italia</a.Text>
        <a.Text textSize="body" textColor="gray600">Ristorante</a.Text>
      </a.Div>

      <a.Div bg="gray300" maxW="100%" minH="150px" maxH="170px" textAlign="center" >
        <a.Text textAlign="center" p="4rem">Anuncios ¡Próximamente!</a.Text>
      </a.Div>

      {["Paltillos", "Entradas", "Extras", "Postres","Especiales", "Bebidas"].map((name, index)=>(
        <Link to="/menu"> 
          <a.Button
            bg="transparent"
            textColor="black"
            maxW="360px"
            minW="100%"
            minH="80px"
            textWeight="600"
            m={{b:"1rem", t:"1rem", r:"1rem"}}
              suffix={
                <a.Icon
                  pos="absolute"
                  name="RightArrow"
                  size="30px"
                  color="black"
                  right="1rem"
                />
              }
            shadow="3"
            hoverShadow="3"
          >
            {name}
          </a.Button>
      </Link>
      ))}
      
    </a.Container>
  );
}

export default MenuHome;
