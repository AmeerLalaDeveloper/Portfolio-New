import { Route, Router, Routes } from "react-router";
import "./App.css";
import AboutContainer from "./pages/AboutPage/AboutContainer";
import IntroPageContainer from "./pages/IntroPage/IntroPageContainer";

function App() {
  return (
    <div className="App">
      <IntroPageContainer></IntroPageContainer>
      <AboutContainer />
    </div>
  );
}

export default App;
