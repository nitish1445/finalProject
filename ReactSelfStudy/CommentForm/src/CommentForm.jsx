import { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();

    setFormData({ username: "", remarks: "", rating: "" });
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center shadow-xs rounded-[9px] p-2 mt-35 w-[25%] bg-emerald-400">
          <div className="mb-1 rounded-2xl bg-pink-300">
            <h4 className="text-[16px] font-bold text-yellow-700">
              Give a comment
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="bg-pink-50 py-3 px-4 rounded-b-[9px] rounded-t-2xl flex flex-col gap-2.5 justify-start">
              <div className="flex justify-between">
                <label htmlFor="username">Username :</label>
                <input
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  className="border rounded p-1 bg-white"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="remarks">Remarks : </label>
                <textarea
                  value={formData.remarks}
                  onChange={handleChange}
                  name="remarks"
                  id="remarks"
                  placeholder="Share your remarks"
                  className="border rounded p-1 bg-white"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="rating">Rating : </label>
                <input
                  value={formData.rating}
                  onChange={handleChange}
                  name="rating"
                  type="number"
                  id="rating"
                  placeholder="rating"
                  min={1}
                  max={5}
                  className="border rounded p-1 bg-white"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="border-2 py-1 px-4 rounded-md font-bold text-white border-blue-400 bg-blue-400 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:duration-300 hover:scale-100 scale-90 duration-300"
                  //   onClick={handleSubmit}
                >
                  Add Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
