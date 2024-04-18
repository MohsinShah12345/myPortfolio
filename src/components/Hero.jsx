import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <div className="container">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.3, rotate: 0 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "0%", // Adjust the border radius as needed
        }}
        // className="pfp"
        style={{

          marginTop: "100px",
          width: "100%", // Adjust width as needed
          height: "150px", // Adjust height as needed
          overflow: "hidden",
          borderRadius: "50%", // Ensure the circular shape
          display: "flex",
          justifyContent: "center"
        }}
      >
        <img
          src={"/user/mohsin.jpeg"}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "20%", // Adjust the border radius as needed
          }}
        />
      </motion.div>



      <Heading firstWord="Who" secondWord="AmI?" />
      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: [
              "An Aspiring Developer",
              "A Senior Software Engineer",
              "A Full Stack Developer",
              "An AWS Engineer",
              "A Database Engineer"
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>
      {/* <HeroHeading /> */}
      <div className="button-effect">
        {/* <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">IAM</span>
          </span>
        </button>
        <br />
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">R</span>ANDIL
            <span className="faulty-letter">T</span>HARUSHA
          </span>
        </button> */}
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>
        <br />
        <br />
        Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={`/socials/${social.icon}`} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
