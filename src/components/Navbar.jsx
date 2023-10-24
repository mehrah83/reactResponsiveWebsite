import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavItems } from "./NavItems";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Nav = styled.nav`
    .navbarList {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 5rem;

      .navbar-link {
        &:link,
        &:visited {
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 1.6rem;
        }
      }
    }

    .mobile-nav-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-nav-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-nav-btn {
        display: inline-block;
        z-index: 9999;

        .mobile-nav-icon {
          font-size: 2rem;
        }
      }

      .navbarList {
        position: absolute;
        top: 0;
        right: 0;
        background: ${({ theme }) => theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 21rem;
        border-radius: 1rem;
        height: 40rem;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;

        .navbar-link {
          color: ${({ theme }) => theme.colors.black} !important;
          font-weight: 500 !important;
        }
      }

      .active .navbarList {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        position: absolute;
        top: 8rem;
        right: 5rem;
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 2rem;
        position: absolute;
        top: 30%;
        right: 5%;
        z-index: 9999;
      }

      .active .close-outline {
        display: block;
      }
    }
  `;

  return (
    <>
      <Nav>
        <div className={openMenu && "active"}>
          <ul className="navbarList">
            {NavItems.map((currElem) => {
              return (
                <>
                  <li key={currElem.id}>
                    <NavLink
                      to={currElem.path}
                      className="navbar-link"
                      onClick={() => setOpenMenu(false)}
                    >
                      {currElem.text}
                    </NavLink>
                  </li>
                </>
              );
            })}
            <li>
              <NavLink to="/contact" className="navbar-link">
                <Button>Contact</Button>
              </NavLink>
            </li>
          </ul>
          <div className="mobile-nav-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name="close-outline"
              className="close-outline mobile-nav-icon"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
