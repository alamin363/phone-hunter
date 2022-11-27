import React, { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import ModaleProductAdd from "./ModaleProductAdd";

const Upcomming = () => {
  const [modalData, setModalData] = useState(null);
  return (
    <div>
      <div className="divider text-primary text-center">upcoming Product</div>
              <label htmlFor="Add-product" onClick={() => setModalData("hi")} className="btn btn-primary w-full">Share Create Your on Product Ideas</label>
      {modalData && (
        <ModaleProductAdd modalData={modalData} setModalData={setModalData} />
      )}
    </div>
  );
};

export default Upcomming;
