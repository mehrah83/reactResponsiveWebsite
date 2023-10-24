import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () => {

    const Wrapper = styled.section`
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;

       picture{
        text-align: center;
       }

       .btn{
        margin-top: 1rem;
       }
    `;
  return (
    <>
      <Wrapper className="section">
         <picture>
            <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="Error page" />
            </picture>
            <NavLink to="/">
                <Button className="btn">Go Back</Button>
                </NavLink>   
      </Wrapper>
    </>
  )
}

export default Error;
