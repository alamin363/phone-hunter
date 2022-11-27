import React, { useState } from 'react';
import { FaAd, FaArrowAltCircleDown, FaPaypal } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Modal from '../Category/Modal/Modal';

const Ads = ({ads}) => {
  const [modalData, setModalData] = useState(null)
  return (
    <div>
     
      <div className="w-96 bg-base-100 shadow-xl mx-auto my-20 relative">
            <figure>
              <PhotoProvider>
                <PhotoView src={ads.image}>
                  <img
                    className="h-96 w-full"
                    src={ads.image}
                    alt={ads.name}
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{ads.name}</h2>
              <p>
                Model:{" "}
                <small className="font-extrabold">{ads.Model}</small>
              </p>
              <p>
                Original Price:
                <small className="font-extrabold">
                  {" "}
                  {ads.orginalprice} TK
                </small>
              </p>
              <p>
                Resale Price:
                <small className="font-extrabold">
                  {ads.recelPrice} TK
                </small>
              </p>
              <p>
                <small className="font-extrabold">{ads.location}</small>
              </p>
              <p>
                Features:{" "}
                <small className="font-extrabold">{ads.Features}</small>
              </p>

              <label
                onClick={() => setModalData(ads)}
                className="btn btn-primary w-full absolute bottom-0 left-0"
                htmlFor="my-modal-3"
              >
                Book Now <FaPaypal />{" "}
              </label>
            </div>
            {modalData && (
              <Modal modalData={modalData} setModalData={setModalData} />
            )}
          </div>
    </div>
  );
};

export default Ads;