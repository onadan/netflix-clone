import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        
      </Routes>
    </>
  );
};

export default App;
