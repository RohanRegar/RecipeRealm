import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiIndianPalace } from "react-icons/gi";
import homeimage from "../images/home-image.jpg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <div>
            <img
                src={homeimage}
                style={{
                    width: "100%",
                    height: "35vh",
                    objectFit: "cover",
                    borderRadius: "2rem",
                }}
            />
            <List>
                <SLink to={"/cuisine/Italian"}>
                    {/* <div> */}
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                    {/* </div> */}
                </SLink>
                <SLink to={"/cuisine/American"}>
                    {/* <div> */}
                    <FaHamburger />
                    <h4>American</h4>
                    {/* </div> */}
                </SLink>
                <SLink to={"/cuisine/Thai"}>
                    {/* <div> */}
                    <GiNoodles />
                    <h4>Thai</h4>
                    {/* </div> */}
                </SLink>
                <SLink to={"/cuisine/Japanese"}>
                    {/* <div> */}
                    <GiChopsticks />
                    <h4>Japaneese</h4>
                    {/* </div> */}
                </SLink>
                <SLink to={"/cuisine/Indian"}>
                    {/* <div> */}
                    <GiIndianPalace />
                    <h4>Indian</h4>
                    {/* </div> */}
                </SLink>
            </List>
        </div>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 10rem;
    height: 7.5rem;
    cursor: pointer;
    transform: scale(0.8);
    margin: 1rem 1.7rem 0rem 1.7rem;
    border: 4px solid transparent;
    h4 {
        margin-top: 0.7rem;
        color: white;
        font-size: 1.3rem;
    }
    svg {
        color: white;
        font-size: 1.9rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
    &:hover {
        border-color: #d68910;
        background: linear-gradient(35deg, #494949, #85929e);
    }
`;

export default Category;
