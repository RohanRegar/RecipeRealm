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
                <h1>{recipe.title}</h1>
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
                        <h2>About this recipe</h2>
                        <h4
                            dangerouslySetInnerHTML={{ __html: recipe.summary }}
                        ></h4>
                        <h2>Instruction</h2>
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: recipe.instructions,
                            }}
                        ></h4>
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
    h1 {
        margin: 0rem 0rem 2rem 1rem;
        background: -webkit-linear-gradient(269deg, #000000, #d5b65f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h2 {
        margin: 2rem 0rem;
    }
    li {
        font-size: 1.2 rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
    img {
        border-radius: 4rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    &:hover {
        cursor: pointer;
    }
`;

const Info = styled.div`
    margin-left: 10rem;
`;
export default Recipe;
