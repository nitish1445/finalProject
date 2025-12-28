import React from "react";

function ProductTab({ title, price, features }) {
    let isDiscount = price>2500;
    let style = {backgroundColor : isDiscount?"pink":""}
    let styles = {backgroundColor : isDiscount?"blue":""}
  return (
    <>
      <div className="flex justify-center gap-2 text-center">
        <div className="border w-[50%] rounded-md mt-10 " style={style}>
          <div className="p-3">{title}</div>
          {/* <div className="p-3">Features :- {features.map((feature) => <li>{feature}</li> )}</div> */}
          {isDiscount && <p className="p-3">Discount of 10% applied</p>}
          <div className="p-3" style={styles}>Price : Rs. {price}</div>
        </div>
      </div>
    </>
  );
}

export default ProductTab;
