import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderButtons from "./components/SliderButtons";
import { sliderSettings } from "./components/Common";

const Residencies = () => {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://mocki.io/v1/8bd995da-5306-4ca2-ad88-f5c03cdde7c2"
      );
      //  console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Wrapper = styled.section`
    .card {
      display: inline-block;
      transition: all 0.3s ease-in;
      padding: 1rem;
      border-radius: 1rem;
      position: relative;

      &:hover,
      &:active {
        cursor: pointer;
        transform: scale(1.025);
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(136, 160, 255, 0.46) 217.91%
        );
        box-shadow: 0rem 7.2rem 4.9rem -5.1rem rgba(136, 160, 255, 0.21);
      }
      img {
        max-width: 25rem;
        margin-bottom: 0.5rem;
      }

      .price {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        span {
          color: ${({ theme }) => theme.colors.orange};
          font-weight: 500;
          font-size: 2rem;
        }
      }
      .common-heading {
        font-size: 2.4rem;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1.2rem;
        max-width: 25rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.smallMobile}) {
      text-align: center;
      .buttons {
        justify-content: center;
      }
      .card  {
          img{
            max-width: 100%;
          }
      }
    }
  `;
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <h3>Best Choices</h3>
          <h2 className="common-heading">Popular Residencies</h2>
          <Swiper {...sliderSettings}>
            <SliderButtons />
            <div className="flex">
              {userData.map((currElem, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="card">
                        <img src={currElem.image} alt="residencies image" />
                        <p className="price">
                          <span>$</span>
                          {currElem.price}
                        </p>
                        <h2 className="common-heading">{currElem.name}</h2>
                        <p>{currElem.detail}</p>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </div>
          </Swiper>
        </div>
      </Wrapper>
    </>
  );
};
export default Residencies;
