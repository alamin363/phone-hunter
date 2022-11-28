import React, { useEffect, useState } from 'react';

const useToken = (email) => {
  const [accessTokens, seraccessToken] = useState('');
  useEffect(() => {
      if (email) {
          fetch(`http://localhost:5000/jwtgenaretor/${email}`)
              .then(res => res.json())
              .then(data => {
                  if (data.accessToken) {
                      localStorage.setItem('accessToken', data.accessToken);
                      seraccessToken(data.accessToken);
                  }
              });
      }
  }, [email]);
  return [accessTokens];
};

export default useToken;