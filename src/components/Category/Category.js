import React, { useState, useEffect } from 'react'
import './Category.css'
import { Button } from 'bootstrap';
import axios from 'axios';
import Arsitek from '../../asset/Arsitek.png';
import Arts from '../../asset/Arts.png';
import Bisnis from '../../asset/Bisnis.png';
import Cook from '../../asset/Cook.png';
import Desain from '../../asset/Desain.png';
import Drama from '../../asset/Drama.png';
import Edukasi from '../../asset/Edukasi.png';
import Fiksi from '../../asset/Fiksi.png';
import Gaming from '../../asset/Gaming.png';
import Histori from '../../asset/Histori.png';
import Hukum from '../../asset/Hukum.png';
import Komputer from '../../asset/Komputer.png';
import Psikolog from '../../asset/Psikolog.png';
import Sains from '../../asset/Sains.png';

const Category = () => {

    const url = "https://www.googleapis.com/books/v1/volumes?q=subject:"

    const [category, setCategory] = useState("");

    const dataCategory = [
        {
            image: Arsitek,
            text: "Architecture"
        },
        {
            image: Arts,
            text: "Art"
        },
        
        {
            image: Komputer,
            text: "Computers"
        },
        
        {
            image: Cook,
            text: "Cooking"
        },
        
        {
            image: Desain,
            text: "Design"
        },
        
        {
            image: Drama,
            text: "Drama"
        },
        
        {
            image: Edukasi,
            text: "Education"
        },
        
        {
            image: Fiksi,
            text: "Fiction"
        },

        {
            image: Gaming,
            text: "Games & Activities"
        },

        {
            image: Histori,
            text: "History"
        },
        {
            image: Hukum,
            text: "Law"
        },
        {
            image: Komputer,
            text: "Mathematics"
        },
        {
            image: Psikolog,
            text: "Psychology"
        },
        {
            image: Sains,
            text: "Science"
        }
    ]

    const fetchAPI = async () =>  {
        await axios
        .get(`${url}${category}`)
        .then( (res) => {
            setCategory(res?.data?.items)
            console.log(res?.data?.items)
        })
        .catch(console.error);
    }
    
        useEffect(() => {
          fetchAPI()
        }, [])

 
  return (
    <div>
        <div className='text-category'>
            <h1>Discover</h1>
            <h2>Go beyond your reading list</h2>
            <h3>with a variety of topics & subtopics to explore</h3>
        </div>
        <div className='container-category'>
        {dataCategory.map((item, index) => {
        return (
            <div className='box' key={index}>
                <img src={item.image} />
                <div className='box-content'> 
                <a href={`/detailcategory/${item.text}`}>
                    <h3>{item.text}</h3>
                </a>
                </div>
            </div>
        )})}
        </div>
    </div>
  )
}

export default Category