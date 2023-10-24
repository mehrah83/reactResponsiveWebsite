import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OurValue from "./OurValue";
import ContactUs from "./ContactUs";
import GetStarted from "./GetStarted";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import Home from "./Home";
import Residencies from "./Residencies";

const App = () => {
  const theme = {
    colors: {
      primary: "#1f3e72",
      secondary: "rgba(255, 255, 255, .78)",
      para: "#8c8b8b",
      orange: "#ffa500",
      black: "#131110",
      white: "#fff",
      blueGradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
      orangeGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
      blue: "#4066ff",
      lightBlue: "#eeeeff",
      shadow: "0px 23px 21px -8px rgba(136, 160, 255, .25)",
      swiperThemeColor: "#007aff",
    },
    media: {
      mobile: "768px",
      tab: "998px",
      laptop: "1100px",
      smallMobile: "650px",
      moreSmallMobile: "350px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourvalue" element={<OurValue />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/residencies" element={<Residencies/>}/>
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
