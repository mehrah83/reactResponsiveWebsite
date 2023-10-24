import styled from "styled-components";
import { Button } from "./styles/Button";

const ContactUs = () => {
  const Wrapper = styled.section`
    .flex {
      align-items: flex-start;
      justify-content: space-between;

      .grid-two-column {
        gap: 0rem;
      }
    }
    p {
      max-width: 65rem;
      margin-top: 1rem;
    }
    .mode {
      max-width: 25rem;
      padding: 1rem;
      border: 0.8px solid rgba(128, 128, 128, 0.143);
      border-radius: 5px;
      gap: 1rem;
      transition: all 0.3s ease-in;
      margin-top: 5rem;

      &:hover,
      &:active{
        transform: scale(1.1);
        cursor: pointer;
      }

      .flex {
        align-items: center;
        justify-content: normal;
        gap: 3rem;
      }

      i {
        padding: 1rem;
        background: #eeeeff;
        border-radius: 0.5rem;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.blue};
      }

      .mode-info h4 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.8rem;
      }

      Button {
        width: 100%;
        margin-top: 1rem;
        pointer-events: none;
      }

      p {
        margin-top: 0rem;
      }
    }
    .contact-image {
      width: 30rem;
      height: 47rem;
      border-radius: 15rem 15rem 0 0;
      overflow: hidden;

      img {
        height: 100%;
        max-width: 100%;
      }
    }

    @media (max-width: ${({theme}) => theme.media.smallMobile}){
      text-align: center;
      .flex{
        flex-direction: column-reverse;
        align-items: center;
        gap: 5rem;
      }
      .grid-two-column{
        grid-template-columns: repeat(1,1fr);

        .mode{
          width: 30rem;
          margin: 2rem auto;

          .flex{
            flex-direction: column;
          }
        }
      }
    }
  `;
  return (
    <>
      <Wrapper className="section">
        <div className="container flex">
          <div>
            <h3>Our Contact Us</h3>
            <h2 className="common-heading">Easy to contact us</h2>
            <p>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>

            <div className="container grid grid-two-column">
              <div className="mode">
                <div className="flex">
                  <div>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="mode-info">
                    <h4>Call</h4>
                    <p>021 123 145 14</p>
                  </div>
                </div>
                <Button>Call now</Button>
              </div>
              <div className="mode">
                <div className="flex">
                  <div>
                  <i className="fa-brands fa-rocketchat"></i>
                  </div>
                  <div className="mode-info">
                    <h4>Chat</h4>
                    <p>021 123 145 14</p>
                  </div>
                </div>
                <Button>Chat now</Button>
              </div>
              <div className="mode">
                <div className="flex">
                  <div>
                  <i className="fa-brands fa-rocketchat"></i>
                  </div>
                  <div className="mode-info">
                    <h4>Video Call</h4>
                    <p>021 123 145 14</p>
                  </div>
                </div>
                <Button>Video Call now</Button>
              </div>
              <div className="mode">
                <div className="flex">
                  <div>
                  <i className="fa-solid fa-message"></i>
                  </div>
                  <div className="mode-info">
                    <h4>Message</h4>
                    <p>021 123 145 14</p>
                  </div>
                </div>
                <Button>Message now</Button>
              </div>
            </div>
          </div>
          <div className="contact-image">
            <img src="https://real-estate-web.pages.dev/contact.jpg" alt="" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ContactUs;
