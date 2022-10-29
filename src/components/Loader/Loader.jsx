import { MutatingDots  } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
 <MutatingDots 
  height="100"
  width="100"
  color="#4d6da9"
  secondaryColor= '#4d6da9'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
  );
};