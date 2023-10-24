import styled from "styled-components";
import { Button } from "./styles/Button";

const GetStarted = () => {
  const Wrapper = styled.section`
    .container {
      background-color: #4161df;
      border-radius: 1rem;
      border: 6px solid #5d77d6;
      padding: 2rem;
      text-align: center;

      .common-heading {
        color: ${({ theme }) => theme.colors.white};
      }
      p {
        font-size: 1.5rem;
        color: #ffffff96;
        max-width: 40rem;
        margin: 2.5rem auto;
      }
      Button {
        background: #5a73d7;
        border: 0.2rem solid ${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.colors.shadow};
        border-radius: 1rem;
      }
    }
  `;
  return (
    <>
      <Wrapper className="section">
        <div className="container">
          <h2 className="common-heading">Get started with Homyz</h2>
          <p>
            Subscribe and find super attractive price quotes from us. Find your
            residence soon
          </p>
          <Button>Get Started</Button>
        </div>
      </Wrapper>
    </>
  );
};

export default GetStarted;
