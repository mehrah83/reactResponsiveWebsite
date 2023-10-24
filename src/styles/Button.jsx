import styled from "styled-components";

export const Button = styled.button`
background: ${({theme}) => theme.colors.blueGradient};
color: ${({theme}) => theme.colors.white};
font-weight: 500;
font-size: 1.5rem;
padding: 0.9rem 1.4rem;
border: none;
outline: none;
border-radius: 0.4rem;
transition: all .3s ease-in;
cursor: pointer;

&:hover,
&:active{
    transform: scale(1.1);
}
`;