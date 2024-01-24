import styled from "styled-components"

export const Container = styled.section`
    display: none;
    position: absolute;
    left: 10px;
    top: 250px;
    > svg {
        color: var(--color-letter-secondary);
    }
    > ul{
        width: 500px;
        position: absolute;
        list-style: none;
        left: 30px;
        top: 70px;
        text-align: start;
        z-index: 4;
        
        >li {
            background: var(--main-color);
            cursor: pointer;
            >a {
                display: block;
                height: 100%;
                width: 100%;
                text-decoration: none;
                color: var(--color-letter-secondary);
                padding: 16px;
            }
        }
    }
    @media screen and (max-width: 1200px){
        display: block;
    }
    @media screen and (max-width: 500px){
        >ul{
            width: 250px;
            >li {
                >a{
                    text-align: center;
                }
            }
        }
    }
    
`