import React, { useState } from 'react'
import Arsitek from '../asset/Arsitek.png';
import './Test.css'
import Header from '../components/Header/Header'

const Test = () => {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3)
  }

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
   <div>
    <Header />
   </div>
  )
}

export default Test