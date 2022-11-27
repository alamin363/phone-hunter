import React from "react";

const AdvertiseModal = ({hadelAdvertise,ads, setAds, dt}) => {
  return (
    <div>
      <input type="checkbox" id="Advertise-confirm" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
          onClick={() => setAds(null)}
            htmlFor="Advertise-confirm"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Confirm you Advertise this product</h3>
          <label
            htmlFor="Advertise-confirm"
            onClick={() => setAds(dt)}
            className="btn btn-primary w-full"
          >
            Confirm
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseModal;
