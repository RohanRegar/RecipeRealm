import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function Recipe() {
    let params = useParams();
    const [recipe, setRecipe] = useState([]);
    const [activeTab, setActiveTab] = useState("instructions");
    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );

        const detailData = await data.json();
        setRecipe(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <RecipeWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Intructions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{ __html: recipe.summary }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: recipe.instructions,
                            }}
                        ></h3>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        {recipe.extendedIngredients?.map((ingredient) => (
                            <li key={ingredient?.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </RecipeWrapper>
    );
}
const RecipeWrapper = styled.div`
    margin-top: 8rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2 rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;
export default Recipe;
