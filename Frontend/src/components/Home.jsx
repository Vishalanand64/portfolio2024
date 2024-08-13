import "./Home.css";
import { Link } from "react-router-dom";
import myBg from "../assets/myBg.png";
import GitLogo from "../assets/GitLogo.png";
import insta from "../assets/insta.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import twitterLogo from "../assets/twitterLogo.png";
import downloadIcon from "../assets/downloadIcon.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  let [count, setCount] = useState(0);
  const [timer, SetTimer] = useState(true);

  useEffect(() => {
    if (timer && count < 101) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 101) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return 101; // Ensure it doesn't go beyond 100
          }
        });
      }, 10); // Approximately 1.5 seconds for 100 increments

      return () => clearInterval(interval); // Cleanup interval on unmount or when timer stops
    }
  }, [timer, count]);

  return (
    <div className="home-page">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="home-container "
      >
        <div
          className="timer"
          style={{ display: count >= 101 ? "none" : "block" }}
        >
          <h1>
            {count}
            <span>%</span>
          </h1>
        </div>
        <div className="home-left">
          <h1 className="greet">
            {"Hi , I'm "}
            <span>Vishal Anand</span>
          </h1>
          <p className="webDev">Web Developer | UI Designer | Programmer</p>

          <div className="left-btn-container">
            <a
              href="https://www.linkedin.com/in/vishal-anand-00kb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Hire me</button>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1-0BIdPnVY3d8Xo5eLXfezI9_RZX6zjNw?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                resume{" "}
                <img className="download-icon" src={downloadIcon} alt="" />
              </button>
            </a>
          </div>

          <div className="icon-container">
            <Link to="https://github.com/Vishalanand64">
              <img src={GitLogo} className="icon" alt="" />
            </Link>
            <a
              href="https://www.linkedin.com/in/vishal-anand-00kb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} className="icon" alt="" />
            </a>

            <Link>
              <img src={twitterLogo} className="icon" alt="" />
            </Link>
            <a
              href="https://www.instagram.com/_vishal.anand/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} className="icon" alt="" />
            </a>
          </div>
        </div>
        <div className="home-right">
          <div className="home-right-bg">
            <img src={myBg} loading="lazy" className="myBg" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
