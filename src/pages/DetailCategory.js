import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header'
import NotFound from '../asset/NotFound.png'
import Modals from '../components/Modal/Modal'
import Navbars from '../components/Navbar/Navbar';



const DetailCategory = () => {

  const url = "https://www.googleapis.com/books/v1/volumes?q=subject:"

  const [category, setCategory] = useState("");

  const [id, setId] = useState();
    
  const [show, setShow] = useState(false);

  const MasGerland = (event, param) => {
      setShow(true);
      setId(param);
      console.log(id)
  }



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
    <Navbars />
    <div className="testA">
    {category && category.map((i, index) =>{
      return(
        <div className="antaraA" key={index}>
        <a onClick={event => MasGerland(event, i.id)}>
        <div className="headerA">
          <div className="imageA">
            {i.volumeInfo.imageLinks
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

export default DetailCategory