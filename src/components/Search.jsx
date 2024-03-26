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
            <div>
                <FaSearch />
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Enter the name of dish"
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    div {
        position: relative;
        width: 100%;
        // margin-right: 30vw;
    }
    input {
        position: absolute;
        right: 0rem;
        top: -2rem;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 25vw;
        // margin-right: auto;
    }

    svg {
        position: absolute;
        top: 50%;
        right: 45rem;
        transform: translate(100%, -50%);
        color: white;
        z-index: 2;
    }
`;

export default Search;
