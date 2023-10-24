import styled from "styled-components";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
  const swiper = useSwiper();

  const Wrapper = styled.section`
    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      button {
        font-size: 1.5rem;
        color: #00f;
        padding: 0.5rem 1.8rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        cursor: pointer;
        box-shadow: 0 0 5px 1px #00000040;
      }
      .nextBtn {
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  `;
  return (
    <Wrapper>
      <div className="buttons">
        <button className="prevBtn" onClick={() => swiper.slidePrev()}>
          &lt;
        </button>
        <button className="nextBtn" onClick={() => swiper.slideNext()}>
          &gt;
        </button>
      </div>
    </Wrapper>
  );
};
export default SliderButtons;
