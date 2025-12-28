import React from "react";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";

function Product() {
  let options = ["durable", "battery"];
  return (
    <>
      <ProductTab
        title="Phone"
        price={20000}
        features={["Durable", "Fast Charging"]}
      />
      <ProductTab
        title="Bag"
        price={2000}
        features={["Premium Leathers", "Long-lasting"]}
      />
      <ProductTab title="Bluetooth" price={5000} features={options} />
      {/* <MsgBox userName="Nitish Kumar" age={11}/> */}
    </>
  );
}

export default Product;
