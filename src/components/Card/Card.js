import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Card.css'
import Modals from '../Modal/Modal';

const CardBooks = (props) =>  {

    const url = "https://www.googleapis.com/books/v1/volumes?q=:keyes&key=AIzaSyDIwDev4gFHRqCh4SSaO9eLKEeI7oYt6aE&maxResults=27"
    const result = "&maxResults=40"
   
    const [bookHome, setBookHome] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const [showLogin, setShowLogin] = useState(false);
 
        useEffect( () => {
            axios
            .get(`${url}`)
            .then( (res) => {
                setBookHome(res?.data?.items)
                console.log(res?.data?.items)
            })
            .catch(console.error);
        }, [])
        
        function A() {
          alert("ABC")
        }


  return (
    <div>
    <Container  fluid className='wrapper'>
            {bookHome && bookHome.map((i, index) => {
                return(
                <div className='image-container' key={index}>  
                  <div className="book read">

                    <div className="cover">
                    <img src={i.volumeInfo.imageLinks.thumbnail} />
                    </div>


                    <div className='btn-Modal'>
                    {/* <Modals 
                    show = {showLogin} close={()=> setShowLogin(false)}
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
                    // currency={i.saleInfo.saleability.listPrice.currencyCode}
                    // price={i.saleInfo.listPrice.amount}
                    /> */}
                    </div>
                  </div>
                </div>
                    )
                })}
    </Container>
    </div>
  )
}

export default CardBooks


