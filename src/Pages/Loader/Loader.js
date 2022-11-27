import React from 'react';
import  "./Loader.css"

const Loader = () => {
  return (
    <div className=' scan flex justify-center align-middle'>
      <div className='relative flex align-middle flex-col '>
        <div className='qrcode relative w-[300px] h-[270px] '></div>
      </div>
    </div>
  );
};

export default Loader;