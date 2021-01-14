/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Fuzz from '../../Static.gif';
import './Static.css';

export default function Static() {
  return (
    <>
      <p className="aux">
        Aux

      </p>
      <img className="static" src={Fuzz} />
    </>
  );
}
