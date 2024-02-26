import { useEffect, useState } from "react";
import HeroSection from "../src/components/HeroSection";
import { Routes, Route, useLocation } from "react-router-dom";
import Services from "./components/Services";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AboutAvicii from "./components/AboutAvicii";
import ThemeButton from "./components/ThemeButton";
import Navbar from "./components/Navbar";
import Tim from "./components/Tim";
import Stories from "./components/Stories";
import True from "./components/True";
import AlbumPage from "./components/AlbumPage";
import AviciiByAvicii from "./components/AviciiByAvicii";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [theme, setTheme] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when route changes
  }, [location]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <ThemeButton theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Routes>
        <Route
          path="/"
          element={
            <HeroSection theme={theme} handleThemeSwitch={handleThemeSwitch} />
          }
        />
        <Route
          path="/about"
          element={
            <AboutAvicii theme={theme} handleThemeSwitch={handleThemeSwitch} />
          }
        />
        <Route path="/tim" element={<Tim />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/true" element={<True />} />
        <Route path="/albums" element={<AlbumPage />} />
        <Route path="/aviciibyavicii" element={<AviciiByAvicii />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer theme={theme} />
    </>
  );
}

export default App;
