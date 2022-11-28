import React, { useEffect, useState } from 'react';

const useToken = (email) => {
  const [accessTokens, seraccessToken] = useState('');
  useEffect(() => {
      if (email) {
          fetch(`https://used-phone-resale-server-side.vercel.app/jwtgenaretor/${email}`)
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