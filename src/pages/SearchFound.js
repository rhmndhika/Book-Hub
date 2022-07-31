import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import NotFound from '../asset/NotFound.png'
import Modals from '../components/Modal/Modal'
import Navbars from '../components/Navbar/Navbar';
import HeaderWO from '../components/Header/HeaderWO';

const SearchFound = () => {
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    const [searched, setSearched] = useState("");
    const {searchTerm} = useParams();

      
    const [id, setId] = useState();
    
    const [show, setShow] = useState(false);

    const MasGerland = (event, param) => {
        setShow(true);
        setId(param);
        console.log(id)
    }

    const fetchAPI = async () =>  {
        await axios
        .get(`${url}${searchTerm}`)
        .then( (res) => {
            setSearched(res?.data?.items)
            console.log(res?.data?.items)
        })
        .catch(console.error);
    }

    useEffect(() => {
        fetchAPI()
      }, [])

  return (
    <div>
      <Navbars />
      <HeaderWO />
    <div className="testA">
    {searched && searched.map((i, index) =>{
      return(
        
        <div className="antaraA" key={index}>
        <a onClick={event => MasGerland(event, i.id)}>
        <div className="headerA">
          <div className="imageA">
            {i.volumeInfo.imageLinks.thumbnail 
            ?
            <img src={i.volumeInfo.imageLinks.thumbnail} />
            :
            <img src={NotFound} />
            }
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
  </div>
  )
}

export default SearchFound