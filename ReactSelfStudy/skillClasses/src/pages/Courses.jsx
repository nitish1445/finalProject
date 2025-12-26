import React from "react";

const Courses = () => {
  return (
    <>
      <div className="text-light fs-1 fw-semibold py-3 text-center my-3">
        Our Courses
      </div>
      <div className="d-flex justify-content-evenly" id="coursesDetail">
        <div className="border border-black">
          <img src="DSA.jpeg" alt="DSA" />
          <div className="p-3 bg-light d-flex flex-column gap-3">
            <div>Data Structure and Algorithms</div>
            <div>Price : Rs. 7000/-</div>
            <button className="btn btn-outline-success py-2 px-4">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="border border-black rounded">
          <img src="java.jpeg" alt="Java" />
          <div className="p-3 bg-light d-flex flex-column gap-3">
            <div>Java Programming</div>
            <div>Price : Rs. 5000/-</div>
            <button className="btn btn-outline-success py-2 px-4">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="border border-black rounded">
          <img src="MERN.jpeg" alt="MERN" />
          <div className="p-3 bg-light d-flex flex-column gap-3">
            <div>MERN Full Stack Developer</div>
            <div>Price : Rs. 10000/-</div>
            <button className="btn btn-outline-success py-2 px-4">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="border border-black rounded">
          <img src="pyhton.jpeg" alt="Pyhton" />
          <div className="p-3 bg-light d-flex flex-column gap-3">
            <div>Pyhton Programming</div>
            <div>Price : Rs. 5000/-</div>
            <button className="btn btn-outline-success py-2 px-4">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
