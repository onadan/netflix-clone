import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import "../scss/signin.scss";

const Signup = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 700px)" });
  // eslint-disable-next-line
  const [email, setEmail] = useState('');

  return (
    <>
      {isNotMobile && <Background />}

      <div className="login_wrapper">
        <div className="container">
          <header>Create an account</header>
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
              Sign Up
            </button>
          </form>

          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span>Login</span>.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
