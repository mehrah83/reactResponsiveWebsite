import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.footer`
    background-color: #302e2e;

    .flex{
      align-items: flex-start;
    justify-content: space-between;
    }

    .footer-logo{

      p{
        max-width: 22rem;
      }
    }

    .footer-info{

      .common-heading{
        color: ${({theme}) => theme.colors.white};
      }
      .footer-menu{
        display: flex;
        align-items: center;
        gap: 2rem;

        h4{
          font-size: 2rem;
          color: ${({theme}) => theme.colors.blue};
          margin-top: 1.5rem;
        }
      }
    }

    @media (max-width: ${({theme}) => theme.media.smallMobile}){
      text-align: center;
      .flex{
        flex-direction: column;
        align-items: center;
        gap: 5rem;
      }
      .footer-menu{
        flex-direction: column;
      }
    }
  `;
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <div className="footer-logo">
            <picture>
              <img
                src="https://real-estate-web.pages.dev/logo2.png"
                alt="footer logo"
              />
            </picture>
            <p>
              Our vision is to make all people the best place to live for them.
            </p>
          </div>
          <div className="footer-info">
            <h2 className="common-heading">Information</h2>
            <p>145 New York, FL 5467, USA</p>
            <div className="footer-menu">
              <h4>Property</h4>
              <h4>Services</h4>
              <h4>Product</h4>
              <h4>About Us</h4>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
