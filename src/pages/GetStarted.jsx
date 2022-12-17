import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../scss/signup.scss";
import { useEmail } from "../UserEmail";
import { motion } from "framer-motion";

const GetStarted = () => {
  const navigate = useNavigate();

  let auth = useEmail();

  const intro = {
    initial: {
      opacity: 0,
      top: 100,
    },

    animate: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Background />
      
      <motion.div exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <div className="home_wrapper">
          <motion.div
            animate="animate"
            initial="initial"
            transition={{
              staggerChildren: 0.1,
            }}
            className="container"
          >
            <motion.header variants={intro}>
              Unlimited movies, TV shows, and more.
            </motion.header>
            <motion.p variants={intro} className="motto">
              Watch anywhere. Cancel anytime.
            </motion.p>
            <motion.p variants={intro} className="ctac">
              Ready to watch? Enter your email to create or restart your
              membership.
            </motion.p>
            <motion.div variants={intro} className="input_wrapper">
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
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default GetStarted;
