import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Interaction/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import ResumePage from "./Pages/ResumePage/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import WorkshopPage from "./Pages/WorkshopPage/WorkshopPage";
import SocialsPage from "./Pages/SocialsPage/SocialsPage";
import AppearancesPage from "./Pages/AppearancesPage/AppearancesPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/socials" element={<SocialsPage />} />
        <Route path="/appearances" element={<AppearancesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
