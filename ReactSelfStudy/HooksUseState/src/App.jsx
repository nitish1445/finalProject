import React from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function App() {
  const [detail, setDetail] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleClear = () => {
    setDetail({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const [validError, setValidError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let Error = {};

    // Name error validation

    if (detail.fullName.length == 0) {
      Error.fullName = "Please Enter your name here";
    } else {
      if (detail.fullName.length < 3) {
        Error.fullName = "Name should contain atleast three letters.";
      } else {
        if (!/^[A-z ]+$/.test(detail.fullName)) {
          Error.fullName = "Name should contains only A-Z, a-z and space.";
        }
      }
    }

    // Phone error validation

    if (detail.phone.length == 0) {
      Error.phone = "Please enter your Phone number";
    } else {
      if (/^[6-9]\d{9}$/.test(detail.phone)) {
        Error.phone = "Phone number should contain country code +91 or 0";
      } else {
        if (!/^(\+91|0)[6-9]\d{9}$/.test(detail.phone)) {
          Error.phone = "Please enter an Indian number";
        }
      }
    }

    // Email error validation

    if (detail.email.length === 0) {
      Error.email = "Please enter your email here";
    } else {
      if (
        !/^[\w.+-]+@(gmail|outlook|ricr|yahoo)\.(com|in|co\.in)$/.test(
          detail.email
        )
      ) {
        Error.email = "Use proper email format.";
      }
    }
    // Password create

    if (detail.password.length == 0) {
      Error.password = "Please create a password";
    } else {
      if (detail.password.length < 6) {
        Error.password = "Password should atleast contain 6 digits";
      }
    }

    // Confirm Password

    if (detail.confirmPassword.length == 0) {
      Error.confirmPassword = "Please confirm your password";
    } else {
      if (detail.password != detail.confirmPassword) {
        Error.confirmPassword = "Please enter the same password";
      }
    }

    setValidError(Error);
    return Object.keys(Error).length > 0 ? true : false;
  };

  const submitRegister = (e) => {
    e.preventDefault();

    // Checks Any missing fields
    if (validate()) {
      toast.error("Fill the form correctly.");
      return;
    }
    try {
      console.log(detail);
      toast.success("Registration Done.");
      handleClear();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />

      {/* Header */}

      <div className="bg-blue-700 py-3 text-center">
        <h1 className="text-2xl text-white font-bold">This is Header</h1>
      </div>

      {/*Registration Details */}

      <div className="flex justify-center pt-30">
        <div className="container w-xl border-2 p-2 rounded border-amber-500 bg-amber-100">
          <form
            onSubmit={submitRegister}
            onReset={handleClear}
            className="flex flex-col gap-5 "
          >
            <div>
              <h1 className="mt-3 text-2xl font-bold text-blue-700">
                Registration Details
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="fullName"
                  value={detail.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border-2 rounded px-2 bg-white"
                />
                {validError.fullName && (
                  <span className="text-[9px] px-2 text-red-700 text-end">
                    {validError.fullName}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <input
                    type="phone"
                    name="phone"
                    value={detail.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="border-2 rounded px-2 bg-white"
                  />
                  {validError.phone && (
                    <span className="text-[9px] px-2 text-red-700 text-end">
                      {validError.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols gap-2">
              <div className="flex flex-col text-end">
                <input
                  type="email"
                  name="email"
                  value={detail.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border-2 rounded px-2 bg-white"
                />
                {validError.email && (
                  <span className="text-[9px] px-2 text-red-700">
                    {validError.email}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col text-end">
                <input
                  type="password"
                  name="password"
                  value={detail.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="border-2 rounded px-2 bg-white"
                />
                {validError.password && (
                  <span className="text-[9px] px-2 text-red-700">
                    {validError.password}
                  </span>
                )}
              </div>
              <div className="flex flex-col text-end">
                <input
                  type="password"
                  name="confirmPassword"
                  value={detail.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="border-2 rounded px-2 bg-white"
                />
                {validError.confirmPassword && (
                  <span className="text-[9px] px-2 text-red-700">
                    {validError.confirmPassword}
                  </span>
                )}
              </div>
            </div>
          </form>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="border-2 rounded-[9px] py-1.5 px-4 font-bold bg-white text-blue-700 cursor-pointer hover:bg-blue-700 hover:text-white hover:scale-98 hover:duration-300 screen- 100 duration-300"
              onClick={submitRegister}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
