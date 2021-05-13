import React from 'react'
import styled from "styled-components";
import {
    Link,
  } from "react-router-dom";

export const AppLink = ({children, label, linkTo}) => {
    return (
        <AppLinkTag to={linkTo}>
          {children}
        </AppLinkTag>
    )
}

const AppLinkTag = styled(Link)`
    background: rgb(97 218 251 / 75%);
    color: #282c34;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    margin: 0 auto 30px;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
    text-decoration: none;

    &:hover {
        background: rgb(97 218 251 / 100%);
    }
`
  