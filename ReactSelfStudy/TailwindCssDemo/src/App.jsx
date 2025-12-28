import React from "react";

const App = () => {
  return (
    <>
      <div className="">
        <div className="bg-amber-500 py-2 text-center font-bold text-amber-50 text-[40px]">
          This is App
        </div>
        <div className="border-2 rounded-2xl border-cyan-500 text-center m-10 py-5 ">
          This is text
          <div>
            This is line Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Repellat, mollitia? Rem alias obcaecati eius expedita
            perspiciatis dicta, porro iusto assumenda ullam ipsum quisquam saepe
            omnis suscipit earum molestiae doloribus delectus.
          </div>
        </div>
      </div>
      <div className="text-center py-2">
        <p className="text-[32px] font-bold text-green-600">
          Registration Form
        </p>
      </div>
      <div className="flex justify-center">
        <form className="border-2 rounded-lg border-cyan-300 p-3 w-150 flex flex-col gap-2.5">
          <div className="flex gap-7">
            <label
              htmlFor="fullName"
              className=" font-medium text-black text-[20px] cursor-pointer w-[30%]"
            >
              Full Name :{" "}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              className="border-2 rounded-md border-[#3b7ff5] cursor-pointer w-[65%] px-2"
            />
          </div>
          <div className="flex gap-7">
            <label
              htmlFor="email"
              className=" font-medium text-black text-[20px] cursor-pointer w-[30%]"
            >
              Email Address :{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email Address"
              className="border-2 rounded-md border-[#3b7ff5] cursor-pointer w-[65%] px-2"
            />
          </div>
          <div className="flex gap-7">
            <label
              htmlFor="gender"
              className=" font-medium text-black text-[20px] cursor-pointer w-[30%]"
            >
              Gender :{" "}
            </label>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  name="gender"
                  id="genderMale"
                  className="cursor-pointer"
                />
                <span>Male</span>
              </div>
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  name="gender"
                  id="genderFemale"
                  className="cursor-pointer"
                />
                <span>Female</span>
              </div>
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  name="gender"
                  id="genderOthers"
                  className="cursor-pointer"
                />
                <span>Others</span>
              </div>
            </div>
          </div>
          <div className="flex gap-7">
            <label
              htmlFor="courses"
              className=" font-medium text-black text-[20px] cursor-pointer w-[30%]"
            >
              Courses Details :{" "}
            </label>
            <select
              type="checkbox"
              name="courseDetail"
              id="DSA"
              className="border-2 rounded-md border-[#3b7ff5] cursor-pointer w-[65%]"
            >
              <option value="">Select The Option Below..</option>
              <option value="DSA">Data Structure & Algorithms</option>
              <option value="FSD">Full Stack Development</option>
              <option value="JAVA">Java Programming</option>
              <option value="Python">Introduction to Python</option>
            </select>
          </div>

          <div className="flex gap-3 justify-center pt-3">
            <button type="submit" className="border-2 border-green-700 rounded-lg text-green-800 font-medium cursor-pointer px-2 py-1 hover:bg-green-700 hover:text-white">
              Submit Detail
            </button>
            <button type="reset" className="border-2 border-red-600 rounded-lg text-red-600 font-medium cursor-pointer px-2 py-1 hover:bg-red-600 hover:text-white">
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
