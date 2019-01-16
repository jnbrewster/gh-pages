import React from 'react';

export default () => (
  <div className='object-container'>
    <object
      aria-label='Joel Brewster Photo'
      className='profile-image profile-image-lines'
      id='my-svg'
      type='image/svg+xml'
      data='./img/profile-lines.svg'
    />
    <object
      aria-label='Joel Brewster Photo'
      className='profile-image profile-image-solid'
      type='image/svg+xml'
      data='./img/profile-solid.svg'
    />
  </div>
);
