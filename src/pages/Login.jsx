import React, { useState } from "react";
import Background from "../components/Background";
import "../scss/signin.scss";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Login = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 700px)" });
  // eslint-disable-next-line
  const [email, setEmail] = useState('');

  return (
    <>
      {isNotMobile && <Background />}

      <div className="login_wrapper">
        <div className="container">
          <header>Sign In</header>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input type="password" name="password" placeholder="Password" />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign In
            </button>
          </form>

          <p>
            New to Netflix?{" "}
            <Link to="/signup">
              <span>Sign up now</span>.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
