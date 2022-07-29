import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Arsitek from '../../asset/Arsitek.png';
import './BookScroll.css'

const BooksScroll = () => {

    const url1 = "https://www.googleapis.com/books/v1/volumes?q=superhero+inauthor:keyes&key=AIzaSyDIwDev4gFHRqCh4SSaO9eLKEeI7oYt6aE"
   

    const [BooksScroll, setBooksScroll] = useState([]);
  

    const fetchURL1 = () => {
        axios
        .get(`${url1}`)
        .then( (res) => {
            setBooksScroll(res?.data?.items)
            console.log(res?.data?.items)
        })
        .catch(console.error);
    }

  

    useEffect(() => {
        fetchURL1()
    }, [])
    


  return (
    <div className='wrap'>
        <div className='media-text'>
            <h2>Read your textbooks & find your favorite superheroes</h2>
        </div>
        <div className='media-scroller'> 
    {BooksScroll.map((i, index) => {
        return(
            <div className='media-element' key={index}>
                <img src={i.volumeInfo.imageLinks.thumbnail} />
            </div>
                )
    })}
        </div>
    </div>
  )
}

export default BooksScroll