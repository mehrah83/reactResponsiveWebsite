import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    overflow-x: hidden;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

a,button,img,input,select{
    display: inline-block;
}

h1{
    font-size: 5.2rem;
    font-weight: 600;
    line-height: 5.5rem;
    color: ${({theme}) =>theme.colors.white};
}

.common-heading{
font-weight: 700;
font-size: 3.2rem;
color: ${({theme}) =>theme.colors.primary};
}

h3{
    font-size: 2.3rem;
    font-weight: 600;
    color: ${({theme}) =>theme.colors.orange};
}

p{
    font-size: 1.4rem;
    color: ${({theme}) =>theme.colors.para};
}


.container{
    max-width: 120rem;
    margin: 0rem auto;
}

.section{
    padding: 10rem 0rem;
}

.flex{
    display: flex;
}

.grid{
    display: grid;
    gap: 5rem;
}

.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
    grid-template-columns: repeat(4, 1fr);
}


// Media-Query Start
// 1100px
@media (max-width: ${({theme}) => theme.media.laptop}){
    .container{
        padding: 0rem 5rem;
    }

    .grid-three-column{
        grid-template-columns: repeat(2,1fr);
    }
} 

// 998px
@media (max-width: ${({theme}) => theme.media.tab}){
    html{
        font-size: 56.25%;
    }
    .container{
        padding: 0rem 5rem;
    }
} 

// 768px
@media (max-width: ${({theme}) => theme.media.mobile}){
    html{
        font-size: 50%;
    }
} 

// 650px
@media (max-width: ${({theme}) => theme.media.smallMobile}){
    html{
        font-size: 43.75%;
    }
} 
// Media-Query End
`;
