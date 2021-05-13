import React from "react";
import { Menu } from "./Menu";
import { historias } from "./constants";
import styled from "styled-components";

export const Stories = () => {
  return (
    <div>
      <h1>Historias</h1>

      <BoxWrapper>
        {historias.map((story) => {
          const {
            nombre,
            edad,
            genero,
            fecha,
            lugar,
            emocion,
            tema,
            sentimiento,
            cambio,
          } = story;
          return (
            <Box>
              <h4>
                {nombre}, {edad}, {genero}
              </h4>
              <p>{fecha}</p>
              <p>{lugar}</p>
              <ul>
                {emocion.map((i) => (
                  <li>{i},</li>
                ))}
              </ul>
              <p>{cambio}</p>
              <p>{sentimiento}</p>
              <p>{tema}</p>
            </Box>
          );
        })}
      </BoxWrapper>

      <Menu />
    </div>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;

const Box = styled.div`
  background: white;
  color: #282c34;
  padding: 5px 15px;
  position: relative;
  box-shadow: 5px 5px;
  font-size: 15px;
  margin: 15px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 0 0 0 20px;
    }
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 20%;
    max-width: 20%;
  }
`;
