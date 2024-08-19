import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Interaction/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import ResumePage from "./Pages/ResumePage/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import WorkshopPage from "./Pages/WorkshopPage/WorkshopPage";
import SocialsPage from "./Pages/SocialsPage/SocialsPage";
import AppearancesPage from "./Pages/AppearancesPage/AppearancesPage";
import ScrollToTop from "./Components/Display/ScrollToTop/ScrollToTop";
import Page404 from "./Pages/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/socials" element={<SocialsPage />} />
        <Route path="/appearances" element={<AppearancesPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
