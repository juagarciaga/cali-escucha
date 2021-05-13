import React from "react";
import { AppLink } from "./AppLink";
import styled from "styled-components";

export const Menu = ({ isHome }) => {
  return (
    <WrappLinks>
      {!isHome ? (
        <WrapperLink>
          <AppLink label="Inicio" linkTo="/">
            Inicio
          </AppLink>
        </WrapperLink>
      ) : (
        ""
      )}
      <WrapperLink>
        <AppLink label="Envia tu historia" linkTo="/tu-historia">
          Envia tu historia
        </AppLink>
      </WrapperLink>
      <WrapperLink>
        <AppLink label="Leer tu historia" linkTo="/historias">
          Leer Historias
        </AppLink>
      </WrapperLink>
    </WrappLinks>
  );
};

const WrapperLink = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const WrappLinks = styled.div`
  display: flex;
  flex: 0 0 100%;
  gap: 20px;
`;
