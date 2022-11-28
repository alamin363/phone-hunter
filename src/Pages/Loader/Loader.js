import React from 'react';
import  "./Loader.css"

const Loader = () => {
  return (
    <div className=' scan flex justify-center flex-col align-middle'>
      <div className='relative flex align-middle flex-col '>
        <div className='qrcode relative w-[300px] h-[270px] '></div>
      </div>
      <h1 className='uppercase text-center text-red-600'>refresh </h1>
    </div>
  );
};

export default Loader;