import React from 'react';

const ModalProduct = ({ deleteConfirm }) => {
  return (
 <div>
 <input type="checkbox" id="delete-confirm" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">     
    <h3 className="text-lg font-bold">Confirm Delete this</h3>
    <label htmlFor="delete-confirm" onClick={ deleteConfirm } className="btn btn-primary w-full">Confirm</label>
  </div>
</div>
 </div>
  );
};

export default ModalProduct;