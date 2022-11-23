import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';

const Home = () => {
  const {} =  useContext(AuthContext)

  return (
    <div>
      <h1>this is home</h1>
    </div>
  );
};

export default Home;