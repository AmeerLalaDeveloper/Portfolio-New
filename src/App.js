import { Route, Router, Routes } from "react-router";
import "./App.css";
import AboutContainer from "./pages/AboutPage/AboutContainer";
import IntroPageContainer from "./pages/IntroPage/IntroPageContainer";
import ResumeContainer from "./pages/ResumePage/ResumeContainer";
import ResumeView from "./pages/ResumePage/ResumeView";

function App() {
  return (
    <div className="App">
      <IntroPageContainer></IntroPageContainer>
      <AboutContainer />
      <ResumeContainer />
    </div>
  );
}

export default App;
