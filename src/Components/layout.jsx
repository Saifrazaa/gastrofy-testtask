import React, { Fragment } from "react";
import styled from "styled-components";
import AppBar from "./Appbar/appbar";
import GlobalStyles from "../shared-components/global-styles";
import GroceryPage from "./GroceryPage/groceryPage";
const Layout = ({ children }) => {
    return (
        <Wrapper>
            <GlobalStyles />
            <AppBar />
            <GroceryPage />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color:#eef2f3;
    height:100vh;
    // width:100vw;
`;
export default Layout;