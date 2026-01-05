import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    Dob: "",
    qualification: "",
    score: "",
    course: "",
    batch: "",
    address: "",
    city: "",
    pinCode: "",
    guardianName: "",
    guardianContact: "",
    coachingInfo: "",
  });
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      Dob: "",
      qualification: "",
      score: "",
      course: "",
      batch: "",
      address: "",
      city: "",
      pinCode: "",
      guardianName: "",
      guardianContact: "",
      coachingInfo: "",
    });
  };
  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters.";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space.";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber =
        "Only Indian Mobile Number allowed without 0 and +91.";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Fill the Form Correctly.");
      return;
    }

    try {
      console.log(formData);
      toast.success("Regisrtation Successfull.");
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="py-2 px-70">
        {/* Header */}

        <div className="text-center py-2 mb-3">
          <h1 className="text-3xl font-bold pt-2 text-cyan-900 text-shadow-amber-600 text-shadow-xs">
            Student Registration
          </h1>
          <p className="text-s text-gray-600">
            Join our academy and start your learning journey.
          </p>
        </div>
        {/* Form Container */}
        <form onSubmit={handleSubmit} onReset={handleClearForm}>
          <div className=" container rounded shadow-lg bg-amber-50">
            {/* Personal Information */}

            <div className="mt-4 flex flex-col px-5 ">
              <h3 className="text-2xl font-bold py-2 text-blue-600 text-shadow-pink-200 text-shadow-md">
                Personal Informations
              </h3>
              <div className=" border border-e-black rounded shadow p-3 bg-white">
                <div className="flex gap-4 px-2">
                  <label htmlFor="fullName" className="w-60 gap-3">
                    Full Name <span className="text-red-600 text-2xl">*</span> :
                  </label>

                  <div className="w-7xl flex flex-col text-end">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="px-3 py-1 border border-gray-300 rounded shadow-2xs "
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-red-500">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mx-2 flex gap-4 pt-3">
                  <label htmlFor="email" className="gap-3 w-60">
                    Email <span className="text-red-600 text-2xl">*</span> :
                  </label>
                  <div className="w-7xl flex flex-col text-end">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-3 py-1 border border-gray-300 rounded shadow-2xs"
                    />
                    {validationError.email && (
                      <span className="text-xs text-red-500">
                        {validationError.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mx-2 flex gap-4 pt-3">
                  <label htmlFor="mobileNumber" className="gap-3 w-60 ">
                    Mobile No. <span className="text-red-600 text-2xl">*</span>{" "}
                    :
                  </label>
                  <div className="w-7xl flex flex-col text-end">
                    <input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Enter your mobile number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="px-3 py-1 border border-gray-300 rounded shadow-2xs"
                    />
                    {validationError.mobileNumber && (
                      <span className="text-xs text-red-500">
                        {validationError.mobileNumber}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mx-2 flex gap-4 pt-3 ">
                  <label htmlFor="D.O.B" className="gap-3 w-60">
                    Date of Birth :
                  </label>
                  <input
                    type="date"
                    name="Dob"
                    id="Dob"
                    value={formData.Dob}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
              </div>
            </div>

            {/* Academic Details */}

            <div className="mt-4 flex flex-col px-5 ">
              <h3 className="text-2xl font-bold py-2 text-blue-600 text-shadow-pink-200 text-shadow-md">
                Academic Details
              </h3>
              <div className="border border-e-black rounded shadow p-3 bg-white">
                <div className="px-2 flex gap-4 pt-3 ">
                  <label htmlFor="qualification" className="gap-3 w-60">
                    Qualifications :
                  </label>
                  <select
                    name="qualification"
                    id="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  >
                    <option value="">--Select Qualification--</option>
                    <option value="10">High School</option>
                    <option value="12">Seconday School</option>
                    <option value="UG">Graduation</option>
                    <option value="PG">Post Graduation</option>
                    <option value="PHD">Phd</option>
                  </select>
                </div>
                <div className="mx-2 flex gap-4 pt-3 ">
                  <label htmlFor="score" className="gap-3 w-60">
                    Grade :
                  </label>
                  <input
                    type="text"
                    name="score"
                    id="score"
                    placeholder="Enter your grade in percentages"
                    value={formData.score}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
              </div>
            </div>

            {/* course Information */}
            <div className="mt-4 flex flex-col px-5 ">
              <h3 className="text-2xl font-bold py-2 text-blue-600 text-shadow-pink-200 text-shadow-md">
                Course Informations
              </h3>
              <div className="border border-e-black rounded shadow p-3 bg-white">
                <div className="mx-2 flex gap-4 pt-3 ">
                  <label htmlFor="course" className="gap-3 w-60">
                    Available Courses :
                  </label>
                  <select
                    name="course"
                    id="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  >
                    <option value="">--Select Course--</option>
                    <option value="FSD">Full Stack Development</option>
                    <option value="DS">Data Science</option>
                    <option value="DA">Data Analytics</option>
                    <option value="J-DSA">Java DSA</option>
                    <option value="P-DSA">Python DSA</option>
                  </select>
                </div>

                <div className="mx-2 flex gap-4 pt-3 ">
                  <label htmlFor="batch" className="gap-3 w-60">
                    Perffered Batch :
                  </label>
                  <select
                    name="batch"
                    id="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  >
                    <option value="">--Select Preffered Batches--</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="weekdays">Weekdays</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-4 flex flex-col px-5 ">
              <h3 className="text-2xl font-bold py-2 text-blue-600 text-shadow-pink-200 text-shadow-md">
                Address Informations
              </h3>
              <div className="border border-e-black rounded shadow p-3 bg-white">
                <div className="mx-2 flex  gap-4 pt-3 ">
                  <label htmlFor="address" className="gap-3 w-60 ">
                    Residental :
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Street/Village/Mohalla/Colony"
                    value={formData.address}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
                <div className="mx-2 flex  gap-4 pt-3 ">
                  <label htmlFor="city" className="gap-3 w-60">
                    City :
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="city/town/area"
                    value={formData.city}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
                <div className="mx-2 flex  gap-4 pt-3 ">
                  <label htmlFor="Pincode" className="gap-3 w-60">
                    Pin Code:
                  </label>
                  <input
                    type="tel"
                    name="pinCode"
                    id="pinCode"
                    placeholder="Enter six digit code"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
              </div>
            </div>

            {/* Graduation Details */}
            <div className="mt-4 flex flex-col px-5 ">
              <h3 className="text-2xl font-bold py-2 text-blue-600 text-shadow-pink-200 text-shadow-md">
                Graduation Details
              </h3>
              <div className="border border-e-black rounded  shadow p-3 bg-white">
                <div className="mx-2 flex  gap-4 pt-3 ">
                  <label htmlFor="guardianName" className="gap-3 w-60">
                    Guradian Name :
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    id="guardianName"
                    placeholder="Local guardian's name"
                    value={formData.guardianName}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
                <div className="mx-2 flex  gap-4 pt-3 ">
                  <label htmlFor="guardianNumber" className="gap-3 w-60">
                    Guradian Number:
                  </label>
                  <input
                    type="text"
                    name="guardianContact"
                    id="guardianContact"
                    value={formData.guardianContact}
                    onChange={handleChange}
                    placeholder="Local guardian number"
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs w-7xl"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-4 flex flex-col px-5 ">
              <h3 className="text-2xl font-bold py-2 text-blue-600 text-shadow-pink-200 text-shadow-md">
                Additional Informations
              </h3>
              <div className="border border-e-black rounded shadow p-3 bg-white">
                <div className="mx-2 pt-3 grid grid-cols-2">
                  <label htmlFor="coachingInfo" className="">
                    How did you hear about us ? :
                  </label>
                  <select
                    name="coachingInfo"
                    id="coachingInfo"
                    value={formData.coachingInfo}
                    onChange={handleChange}
                    className="px-3 py-1 border border-gray-300 rounded shadow-2xs"
                  >
                    <option value="">--Select--</option>
                    <option value="Friend">Friends</option>
                    <option value="ads">Online Ads</option>
                    <option value="newspaper">Newspaper</option>
                    <option value="socialMedia">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Button */}

            <div className="text-center text-[20px] font-bold mt-3 p-5 grid grid-cols-2 gap-7">
              <button
                type="submit"
                className="border bg-indigo-700 rounded-xl px-6 py-2 text-white hover:scale-110 hover:duration-300 cursor-pointer hover:shadow-indigo-200 shadow-lg scale-100 duration-300"
              >
                Submit Registration
              </button>
              <button
                type="reset"
                className="bg-gray-500 rounded-xl px-6 py-2 text-black hover:scale-110 hover:duration-300 cursor-pointer hover:shadow-indigo-200 shadow-lg scale-100 duration-300"
              >
                Clear Form
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}

        <div className="my-3 text-gray-500 text-xs text-center">
          <p>All fields marked are mandatory. We respect your privacy.</p>
        </div>
      </div>
    </>
  );
};

export default Register;
