import React from "react";

const Home = () => {
  return (
    <>
      <div id="homeDiv" className="homeClass">
        Accelerate Your Web Development Career with Skill Classes
      </div>
      <div id="homePara" className="homeClass">
        <p>
          Take your career further with tools designed to showcase your
          creativity, aquire skill and fundamental of Web Development in one
          place.
        </p>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-outline-primary px-3">Book A Demo</button>
        <button className="btn btn-outline-success px-3">Register Now</button>
      </div>
    </>
  );
};

export default Home;
