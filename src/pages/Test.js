import React from 'react'
import Arsitek from '../asset/Arsitek.png';
import './Test.css'

const Test = () => {

  const dataTest = [
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    {
      src: Arsitek,
      text : "HALO DOK"
    },
    
  ]
  return (
    <div className='test-test'>
    {dataTest.map((item) => {
      return (
    <div className='test-container'>
      <div>
        <img src={item.src} />
        <p>{item.text}</p>
      </div>
    </div>
        )
    })}
  </div>
  )
}

export default Test