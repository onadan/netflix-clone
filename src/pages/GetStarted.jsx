import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../scss/signup.scss";
import { useEmail } from "../UserEmail";

const GetStarted = () => {
  const navigate = useNavigate();

  let auth = useEmail();
  return (
    <>
      <Background />

      <div className="home_wrapper">
        <div className="container">
          <header>Unlimited movies, TV shows, and more.</header>
          <p className="motto">Watch anywhere. Cancel anytime.</p>
          <p className="ctac">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input_wrapper">
            <input
              type="email"
              name="email"
              className="signup_email"
              placeholder="Email address"
              onChange={(e) => auth.add(e.target.value)}
            />
            <button type="submit" onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
