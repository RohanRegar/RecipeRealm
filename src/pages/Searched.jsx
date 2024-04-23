import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Context } from "../context/context";
function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const { option } = useContext(Context);
    let params = useParams();
    const getSearched = async (name) => {
        try {
            let data;
            if (!option) {
                // Ingredients
                const items = params.search.split(",");
                const modifiedName = items
                    .map((item, index) => (index === 0 ? item : `+${item}`))
                    .join("");
                data = await fetch(
                    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${modifiedName}&number=15`
                );
                const recipes = await data.json();
                setSearchedRecipes(recipes);
            } else {
                // Name
                data = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
                );
                const recipes = await data.json();
                setSearchedRecipes(recipes.results);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {searchedRecipes?.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
            {searchedRecipes?.length === 0 && <div>No results found</div>}
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin-top: 3.5rem;
`;
const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
        max-width: 18rem;
        -webkit-line-clamp: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
export default Searched;
