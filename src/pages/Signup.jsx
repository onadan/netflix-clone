import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../scss/signin.scss";
import { useEmail } from "../UserEmail";

const Signup = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 700px)" });

  const navigate = useNavigate();
  const auth = useEmail();
  const [email, setEmail] = useState(auth.email);

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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input type="password" name="password" placeholder="Password" />
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
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
