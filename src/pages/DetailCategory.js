import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import BasicExample from '../components/Navbar/Navbar';
import CardBooks from '../components/Card/Card';
import Header from '../components/Header/Header'
import Container from 'react-bootstrap/Container';
import Example from '../components/Modal/Modal';

const DetailCategory = () => {

  const url = "https://www.googleapis.com/books/v1/volumes?q=subject:"

  const [category, setCategory] = useState("");


  const {subject} = useParams();

  const fetchAPI = async () =>  {
    await axios
    .get(`${url}${subject}`)
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
    <Container fluid className='wrapper'>
            {category && category.map((i, index) => {
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

export default DetailCategory