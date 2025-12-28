import React from "react";

function MsgBox({ userName, userColor }) {
  //   let userColor = { color: age > 18 ? "red" : "black" };
  return (
    <>
      {/* <h1 className="text-center pt-5">
        Hello, <span style={}>{userName}</span> ..!
      </h1> */}
      <div className="text-center mt-5 text-[22px]">
        Hello, <span style={{ color: userColor }}>{userName}</span> ...!!
      </div>
    </>
  );
}

export default MsgBox;
