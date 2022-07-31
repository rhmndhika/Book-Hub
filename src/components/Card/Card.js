import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Card.css'
import NotFound from '../../asset/NotFound.png'
import Modals from '../Modal/Modal';

const CardBooks = () =>  {

    const url = "https://www.googleapis.com/books/v1/volumes?q=:keyes&key=AIzaSyDIwDev4gFHRqCh4SSaO9eLKEeI7oYt6aE&maxResults=27"
 
   
    const [bookHome, setBookHome] = useState([]);

    
    const [id, setId] = useState();
    
    const [show, setShow] = useState(false);

    const MasGerland = (event, param) => {
        setShow(true);
        setId(param);
        console.log(id)
    }

 
    useEffect( () => {
      axios
      .get(`${url}`)
      .then( (res) => {
          setBookHome(res?.data?.items)
          console.log(res?.data?.items)
      })
      .catch(console.error);
  }, [])
  



  return (
    <div className="testA">
      {bookHome && bookHome.map((i, index) =>{
        return(
          
          <div className="antaraA" key={index}>
          <a onClick={event => MasGerland(event, i.id)}>
          <div className="headerA">
            <div className="imageA">
              <img src={i.volumeInfo.imageLinks.thumbnail} />
            </div>
          </div>
          </a>

        <div className="textA">
          <p>{i.volumeInfo.title}</p>
        </div>
       
        <div className="textB">
          {i.volumeInfo.authors ?
          <p>{i.volumeInfo.authors}</p>
          :
          <p>Author Not Found</p> 
          }
        </div>

        {i.id == id &&
        <Modals 
          show = {show} close={()=> setShow(false)}
          check = {()=> setShow(true)}
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
                />
        }

      </div>
      )})}
    </div>
   
  )
}

export default CardBooks


