import "../scss/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const [value, setValue] = useState("Get Started");
  const [href, setHref] = useState("");
  const [home, setHome] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      setValue("Sign Up");
      setHref("/signup");
      setHome(false);
    }
    if (location.pathname === "/home" || location.pathname.includes("/home")) {
      setHome(true);
    }
    if (location.pathname === "/" || location.pathname === "/signup") {
      setValue("Sign In");
      setHref("/login");
      setHome(false);
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="brand">
        <Link to="/"> NETFLIX </Link>
      </div>
      {!home && (
        <div className="action_button">
          <Link to={href}>{value}</Link>
        </div>
      )}
      {home && (<>home</>)}
    </div>
  );
};

export default Navbar;
