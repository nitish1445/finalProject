import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100 bg-primary py-2 px-3 position-sticky top-0">
        <div className="fs-2 fw-bolder text-light d-flex gap-3 align-items-center">
          <img src="mernCoaching.webp" alt="Icons" id="imageHeader" />
          <span>Skill Classes</span>
        </div>
        <div className="d-flex gap-3 fs-4">
          <Link to={"/"} className="text-decoration-none text-light headerText">
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-light headerText"
          >
            About
          </Link>
          <Link
            to={"/courses"}
            className="text-decoration-none text-light headerText"
          >
            Courses
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-light headerText"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
