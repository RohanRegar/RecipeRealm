import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiForkAndKnife } from "react-icons/ci";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <CiForkAndKnife style={{
                        color: "#4e8129",
                        fontWeight: "bold",
                        fontSize: "3.2rem"
                    }}
                    />
                    <Logo to={"/"}>RecipeRealm</Logo>
                    <Search />
                </Nav>

                <Category />
                <Pages />
            </BrowserRouter>

        </div>
    );
}

const Logo = styled(Link)`
text-decoration: none ;
font-size: 1.5rem ;
font-family: "Dawning of a New Day", cursive;
font-weight: bold;
font-size : 2.8rem;
background: -webkit-linear-gradient(277deg, #34d6fb, #db2118);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
margin-right : auto;
`
const Nav = styled.div`
padding : 1rem 0rem;
display: flex;
justify-content : center;
align-items: center;

`

export default App;
