import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

const SearchFound = () => {
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    const [searched, setSearched] = useState("");
    const {searchTerm} = useParams();

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
    <Container fluid className='wrapper'>
            {searched && searched.map((i, index) => {
                return(
                <div className='image-container' key={index}>  
                  <div className="book read">

                    <div className="cover">
                    <img src={i.volumeInfo.imageLinks.thumbnail} />
                    </div>

                    <div className="info">
                      <h3 className="title">{i.volumeInfo.title}</h3>
                    </div>
                         
                  </div>
                </div>
                    )
                })}
    </Container>
    </div>
  )
}

export default SearchFound