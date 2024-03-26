import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return (
        <FormStyled onSubmit={submitHandler}>
            <SearchWrapper>
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
                <SearchInput
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Enter the name of the dish"
                />
            </SearchWrapper>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    width: 100%;
    max-width: 600px; /* Limiting maximum width of the search bar */
`;

const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 1rem; /* Adjust the distance of the search icon from the left */
    color: white;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 2.5rem; /* Adjust padding to provide space for the search icon */
    border-radius: 1rem;
    outline: none;
    box-sizing: border-box; /* Ensure padding doesn't add to the width */
`;

export default Search;
