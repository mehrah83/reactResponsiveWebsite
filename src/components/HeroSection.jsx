import styled from "styled-components";
import { Button } from "../styles/Button";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const HeroSection = () => {
  const Wrapper = styled.section`
    padding: 12rem 0rem;
    background-color: ${({ theme }) => theme.colors.black};
    z-index: -1;
    position: relative;

    .container {
      max-width: 110rem;
    }

    .flex {
      align-items: flex-start;
      justify-content: space-between;
    }

    h1 {
      max-width: 36rem;
      position: relative;
      z-index: 9999;
      margin-bottom: 3rem;

      &::before {
        position: absolute;
        content: "";
        background: linear-gradient(270deg, #ffb978 0%, #ff922d 100%);
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        padding: 0.8rem;
        top: -18%;
        right: 26%;
        z-index: -1;
      }
    }

    .search-bar {
      background-color: ${({ theme }) => theme.colors.white};
      outline: none;
      padding: 0.5rem 1rem;
      border: 0.3rem solid rgba(120, 120, 120, 0.374);
      display: flex;
      max-width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-top: 3rem;
      margin-bottom: 3rem;
      border-radius: 0.5rem;

      input {
        border: none;
        outline: none;
      }

      i {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 2rem;
      }

      .noHover {
        pointer-events: none;
      }
    }

    .hero-image {
      width: 30rem;
      height: 42rem;
      border-radius: 15rem 15rem 0 0;
      border: 0.8rem solid rgba(255, 255, 255, 0.12);
      overflow: hidden;

      img {
        height: 100%;
        max-width: 100%;
      }
    }

    .product span:nth-child(1),
    .customer span:nth-child(1),
    .awards span:nth-child(1) {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3rem;
    }

    .product span:nth-child(2),
    .customer span:nth-child(2),
    .awards span:nth-child(2) {
      color: ${({ theme }) => theme.colors.orange};
      font-size: 2.5rem;
      margin-left: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.media.smallMobile}) {
      .flex {
        flex-direction: column;
        align-items: center;
        gap: 5rem;
      }

      h1 {
        max-width: 50rem;
      }

      .grid-three-column {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: ${({ theme }) => theme.media.moreSmallMobile}) {
      .hero-data {
        max-width: 40rem;
        text-align: center;

        h1::before {
          top: -6%;
          right: 60%;
        }
        .grid-three-column {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <div className="container flex">
          <div className="hero-data">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "string" }}
            >
              Discover Most Suitable Property
            </motion.h1>
            <p>Find a variety of properties that suit you very easilty</p>
            <p>Forget all difficulties in finding a residence for you</p>
            <div className="search-bar">
              <i className="fa-solid fa-location-dot"></i>
              <input type="search" />
              <Button className="noHover">Search</Button>
            </div>
            <div className="stats">
              <div className="container grid grid-three-column">
                <div className="product">
                  <span>
                    <CountUp start={8800} end={9000} duration={4} />
                  </span>
                  <span>+</span>
                  <p>Premium Product</p>
                </div>
                <div className="customer">
                  <span>
                    <CountUp start={1950} end={2000} duration={4} />
                  </span>
                  <span>+</span>
                  <p>Happy Customer</p>
                </div>
                <div className="awards">
                  <span>
                    <CountUp end={28} />
                  </span>
                  <span>+</span>
                  <p>Awards Winning</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: "0rem", opacity: 1 }}
            transition={{ duration: 2, type: "string" }}
            className="hero-image"
          >
            <img
              src="https://real-estate-web.pages.dev/hero-image.png"
              alt="hero image"
            />
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default HeroSection;
