import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<GetStarted />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
