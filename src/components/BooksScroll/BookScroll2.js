import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Arsitek from '../../asset/Arsitek.png';
import Modals from '../Modal/Modal';
import './BookScroll2.css'

const BooksScroll2 = () => {

    const url2 = "https://www.googleapis.com/books/v1/volumes?q=medical+inauthor:keyes&key=AIzaSyDIwDev4gFHRqCh4SSaO9eLKEeI7oYt6aE"
   

    const [BooksScroll, setBooksScroll] = useState([]);

    const [show, setShow] = useState(false);

    const [id, setId] = useState();

    const MasGerland = (event, param) => {
        setShow(true);
        setId(param);
    }


    const fetchURL1 = () => {
        axios
        .get(`${url2}`)
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
    <div className='wrap2'>
          <div className='preview-description2'>
                <h2>Explore (Subject) bestsellers</h2>
            </div>
        <div className='media-scroller2'> 
    {BooksScroll.map((i, index) => {
        return(
            <div key={index}>
            <a className='test'>
            <div className='media-element2'>
                <img onClick={event => MasGerland(event, i.id)} src={i.volumeInfo.imageLinks.thumbnail} />
            </div>
            </a>
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
        
    </div>
  )
}

export default BooksScroll2