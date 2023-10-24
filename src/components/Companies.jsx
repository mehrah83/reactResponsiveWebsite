import styled from "styled-components";
import { CompanyItems } from "./CompanyItems";

const Companies = () => {
  const Wrapper = styled.section`
    .flex {
      align-items: center;
      justify-content: space-between;
    }
    img {
      max-width: 12rem;
    }
    @media (max-width: ${({theme}) => theme.media.smallMobile}){
      .flex{
        flex-direction: column;
        gap: 3rem;

        img{
          max-width: 20rem;
        }
      }
    }
  `;
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          {CompanyItems.map((currElem) => {
            return (
              <>
                <img key={currElem.id} src={currElem.src} alt={currElem.alt} />
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default Companies;
