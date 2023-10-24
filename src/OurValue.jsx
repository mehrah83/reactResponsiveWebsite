import styled from "styled-components";
import { ValueItems } from "./components/ValueItems";

const OurValue = () => {
  const Wrapper = styled.section`
    .flex {
      align-items: flex-start;
      justify-content: space-between;

      .grid-two-column {
        gap: 0rem;
      }
    }
    p {
      max-width: 45rem;
      margin-top: 1rem;
    }
    .value-image {
      width: 30rem;
      height: 53rem;
      border-radius: 15rem 15rem 0 0;
      border: 8px solid rgb(232 232 232 / 93%);
      overflow: hidden;

      img {
        height: 100%;
        max-width: 100%;
      }
    }
    .card {
      background-color: ${({ theme }) => theme.colors.white};
      border: 0.8px solid rgba(128, 128, 128, 0.143);
      border-radius: 0.8rem;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      padding: 1rem;
      margin-top: 2rem;

      h3 {
        font-size: 1.8rem;
        text-align: center;
      }
      p {
        font-size: 1.2rem;
        text-align: center;
      }
    }

    @media (max-width: ${({theme}) => theme.media.smallMobile}){
      text-align: center;
      .flex{
        flex-direction: column-reverse;
        align-items: center;
        gap: 5rem;
      }
    }
  `;
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <div className="value-image">
            <img src="https://real-estate-web.pages.dev/value.png" alt="" />
          </div>
          <div>
            <h3>Our Value</h3>
            <h2 className="common-heading">Value We Give to You</h2>
            <p>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
            {
              ValueItems.map((currElem) => {
                return (
                  <>
                  <div className="card">
              <h3>{currElem.primaryText}</h3>
              <p>{currElem.secondaryText}</p>
            </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OurValue;
