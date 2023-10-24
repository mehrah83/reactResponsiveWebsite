import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Header = () => {
  const MainHeader = styled.header`
  padding: 0rem 3rem;
  position: fixed;
  width: 100%;
  z-index: 9999;
  height: 7rem;
  /* background-color: ${({theme}) => theme.colors.black}; */
  background-color: #302e2e;
  color: ${({theme}) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .logo{
    max-width: 60%;
    height: auto;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    padding: 0rem 5rem;
  }
  `;
  return (
    <>
     <MainHeader>
      <NavLink to="/">
        <img className="logo" src="https://real-estate-web.pages.dev/logo.png" alt="logo" />
      </NavLink>
        <Navbar/>
      </MainHeader> 
    </>
  )
}

export default Header;
