import React from 'react';
import SwipeSlider from '../componentes/SwipeSlider'

const images = [
  '/security.png',
  '/rrhh.png',
  '/facility.png',
];



const Dashboard = () => {
  return (
    <div> 
      <SwipeSlider items={images}/> 
    </div>
  );
}

export default Dashboard