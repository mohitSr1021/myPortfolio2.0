import { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";

// Layout
import Navbar from "./layout/Navbar/index";
import Footer from "./layout/Footer/index";

// Components
import Hero from "./components/HeroSection/index";
import Skills from "./components/Skills/index";
import Education from "./components/Education/index";
import Projects from "./components/Projects/index";
import ProjectDetails from "./components/ProjectDetails/index";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import WelcomePage from "./components/WelcomePage";
import Certificate from "./components/Certificate/Index";
// import Achievement from "./components/Achievement/Index";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

interface Project {
  image?: string;
  tags?: string[];
  title: string;
  date: string;
  description?: string;
}

interface ModalState {
  state: boolean;
  project: Project | null;
}

function AppContent() {
  const [openModal, setOpenModal] = useState<ModalState>({ state: false, project: null });
  const [loading, setLoading] = useState(true);
  const [hasCompletedWelcome, setHasCompletedWelcome] = useState(false);
  const location = useLocation();

  // Timer to simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Manage redirect logic based on welcome completion
  useEffect(() => {
    if (location.pathname === "/home" && !hasCompletedWelcome) {
      window.history.replaceState(null, "", "/welcome");
    }
  }, [location, hasCompletedWelcome]);

  const handleWelcomeComplete = useCallback(() => {
    setHasCompletedWelcome(true);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/welcome"
        element={
          !hasCompletedWelcome ? (
            <WelcomePage onComplete={handleWelcomeComplete} />
          ) : (
            <Navigate to="/home" replace />
          )
        }
      />
      <Route
        path="/home"
        element={
          hasCompletedWelcome ? (
            <>
              <Navbar />
              <Body>
                <CustomCursor />
                <Hero />
                <Skills />
                <Projects openModal={openModal} setOpenModal={setOpenModal} />
                <Certificate />
                <Education />
                <Footer />
                {openModal.state && (
                  <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                )}
              </Body>
            </>
          ) : (
            <Navigate to="/welcome" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
