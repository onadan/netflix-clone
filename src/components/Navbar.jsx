import "../scss/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const [value, setValue] = useState("Get Started");
  const [href, setHref] = useState("");

  useEffect(() => {
    if (location.pathname === "/login") {
      setValue("Sign Up");
      setHref("/signup")
    }
    if ((location.pathname === "/home") || location.pathname.includes("/home")) {
      setValue("Sign Out");
    }
    if ((location.pathname === "/" || location.pathname === "/signup")) {
      setValue("Sign In");
      setHref("/login")
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="brand"><Link to='/'> NETFLIX </Link></div>
      <div className="action_button"><Link to={href}>{value}</Link></div>
    </div>
  );
};

export default Navbar;
