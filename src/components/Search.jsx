import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";

function Search() {
    const { option, setOption } = useContext(Context);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    const handleToggle = () => {
        setOption(!option); // Toggle the option state
        console.log(option); // Log the updated option state
    };

    return (
        <SearchContainer>
            {/* Toggle button */}
            <ToggleButton onClick={handleToggle} option={option}>
                {option ? "Search by Recipe Name" : "Search by Ingredients"}{" "}
                Option
            </ToggleButton>
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
        </SearchContainer>
    );
}

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

const FormStyled = styled.form`
    width: 100%;
    max-width: 600px;
`;

const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 1rem;
    color: white;
    font-size: 1.3rem;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 6rem;
    outline: none;
    box-sizing: border-box;
`;

const ToggleButton = styled.button`
    width: 18rem;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${(props) => (props.option ? "green" : "black")};
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
`;

export default Search;
