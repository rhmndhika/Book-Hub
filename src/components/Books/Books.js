import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Books.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Card/Card';
import BookRight from '../../asset/BookRight.png'
import BookLeft from '../../asset/BookLeft.jpg'
import { FaSearch } from "react-icons/fa";
import CardBooks from '../Card/Card';
import Button from 'react-bootstrap/Button';
import Category from '../Category/Category';
import DetailCategory from '../../pages/DetailCategory';
import Modals from '../Modal/Modal';

const url = "https://www.googleapis.com/books/v1/volumes?q="
const key = "&key=AIzaSyDIwDev4gFHRqCh4SSaO9eLKEeI7oYt6aE";
const max = "&maxResults=27"


const Books = () => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    const [show, setShow] = useState(false);

    
        const findBook = async ()  => {
            await axios
            .get(`${url}${search}${key}${max}`)
            .then( (res) => {
                setBooks(res?.data?.items)
                console.log(res?.data?.items)
                setShow(true)
            })
            .catch(console.error);
        }



  return (
    <div>
    <div className='header'>
      <div className='filter'></div>
      <h1 className='xd'>Book Hub</h1>
      <div className="search">
        <input type="text" placeholder="Search"
          value={search} onChange={e=>setSearch(e.target.value)}
          />
          <button onClick={()=> findBook()}><i className="fas fa-search"><FaSearch /></i></button>
      </div>
    </div>
    
  
 {show ? 
   <div>
      <Container fluid className='wrapper'>
        {books && books.map((i, index) => {
          return(
            <div className='image-container' key={index}>  
            <div className="book read">

              <div className="cover">
              <img src={i.volumeInfo.imageLinks.thumbnail} />
              </div>


              {/* <div className='btn-Modal'>
              <Modals
              thumbnail={i.volumeInfo.imageLinks.thumbnail}  
              title={i.volumeInfo.title}
              description={i.volumeInfo.description}
              category={i.volumeInfo.categories}
              author={i.volumeInfo.authors}
              page={i.volumeInfo.pageCount}
              language={i.volumeInfo.language}
              publisher={i.volumeInfo.publisher}
              published={i.volumeInfo.publishedDate}
              link={i.volumeInfo.previewLink}
              epub={i.accessInfo.epub.isAvailable}
              currency={i.saleInfo.saleability ? i.saleInfo.saleability : ''}
              />
              </div> */}
            </div>
          </div>
          )})}
      </Container>
    </div>
    :
    <div>
      <CardBooks />
    </div>
  }
  </div>
  )
}

export default Books