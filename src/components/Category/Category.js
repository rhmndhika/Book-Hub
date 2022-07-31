import React, { useState, useEffect, useMemo } from 'react'
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
   
    const [visible, setVisible] = useState(10);


    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 4);
    }

    const showLessItems = () => {
        setVisible(10);
    }

    const dataCategory = [
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
    <div className='wrap-category'>
        <div className='description'>
            <div className='preview-description'>
                <h1>Discover</h1>
                <h2>Go beyond your reading list</h2>
                <h3>with a variaty of 5000 books</h3>
            </div>
            <div className='wrap-showmore'>
                <div className='showmore-description'>  
                       {visible <=10 
                        ?
                        <a onClick={showMoreItems}>View all</a>
                        :
                        <a onClick={showLessItems}>View less</a>
                       }
                </div>
            </div>
        </div>
    <div className='container-category'>
        {dataCategory.slice(0, visible).map((item, index) =>{
            return (
                <div className='box-category' key={index}>
                    <a href={`/detailcategory/${item.text}`}>
                <div className='inside-category'>
                <span>
                    <img src={item.image}/>
                </span>
                <span>
                    <p className='text-category'>{item.text}</p>
                </span>
                </div>
                    </a>
            </div>
        )})}
    <hr className='horizontal-line' size="10px" width="100%"/>
    </div>
    </div>
  )
}

export default Category