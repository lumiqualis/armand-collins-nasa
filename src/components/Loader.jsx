import React from 'react';
import '../styles/loader.css'

export default function Loader() {
  return (
    <div className="loader">
      <img src={require('../assets/image-loader.png')} alt="" />
      <img src={require('../assets/box-loader.png')} alt="" />
    </div>
  )
}
