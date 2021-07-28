import React from 'react'

export const Button = ({ children, callback, color }) => {
  return (
    <button className={`btn ${color} m-1`} onClick={callback}>
      {children}
    </button>
  );
};
