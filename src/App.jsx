// import { db } from "./firebase";
// import { getDocs, collection } from "firebase/firestore";
// import { useEffect } from "react";
import Navbar from "./components/Navbar";
import mainbg from './assets/images/main-bg.jpg'
import './scss/signup.scss'

const App = () => {
  // useEffect(() => {
  // const getUsers = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.data());
  //   });
  // };
  // getUsers();
  // }, []);

  return (
    <>
      <Navbar />

      <div className="background">
        <img src={mainbg} alt="mainbg" />
      </div>

      <div className="wrapper">
      <div className="container">
        <header>Unlimited movies, TV shows, and more.</header>
        <p className="motto">Watch anywhere. Cancel anytime.</p>
        <p className="ctac">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input_wrapper">
        <input type="email" name="" id="" />
        <button type="submit">Get Started</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default App;
