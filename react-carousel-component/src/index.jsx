import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    label: 'image1',
    image: './images/001.png'
  },
  {
    id: 2,
    label: 'image2',
    image: './images/002.png'
  },
  {
    id: 3,
    label: 'image3',
    image: './images/003.png'
  },
  {
    id: 4,
    label: 'image4',
    image: './images/004.png'
  },
  {
    id: 5,
    label: 'image5',
    image: './images/005.png'
  }
];

ReactDOM.render(
  <Carousel images={images} />,
  document.querySelector('#root')
);
