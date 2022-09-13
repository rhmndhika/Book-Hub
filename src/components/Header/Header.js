import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Header.css'
import BootstrapIMG from '../../asset/Bootstrap5.png'
import ReactIMG from '../../asset/React.png'
import AxiosIMG from '../../asset/Axios.png'
import GoogleBooks from '../../asset/GoogleBooks.png'
import { FaSearch } from "react-icons/fa";

const Header = () => {

  const [search, setSearch] = useState("");

  console.log(search)

  const url = "https://www.googleapis.com/books/v1/volumes?q="
  const key = "&key=AIzaSyDIwDev4gFHRqCh4SSaO9eLKEeI7oYt6aE";
  const max = "&maxResults=40"

  const findBook = async ()  => {
    await axios
    .get(`${url}${search}${key}${max}`)
    .then( (res) => {
        setSearch(res?.data?.items)
        console.log(res?.data?.items)
    })
    .catch(console.error);
  }


  return (
    <div id='main'>
      <div className='wrap'>
        <div className='content'> 

          <div className='image-content'>
          <h1>BOOK HUB</h1>
          </div>

          <div className='text-content'>
            <h1>Unlock knowledge</h1>
            <span>
            With BookHub’s online library of books, trusted by students worldwide
            </span>
          </div>

          <div className='content-2'>
             <div className='search-box'>
              <input className="search-text" value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder = "Search Books" />
                <a href={`/detailsearch/${search}`} className='search-btn'>
                  <i><FaSearch /></i>
                </a>
            </div>
          </div>

          
          <div className='text-feature'>
            <h1>Featured in</h1>
          </div>
            <div className='container-category'>

                <div className='box-sponsor' >  
                  <div className='inside-sponsor'>
                  <span>
                      <img src={ReactIMG}/>
                  </span>   
                  </div>
                </div>

                <div className='box-sponsor' >  
                  <div className='inside-sponsor'>
                  <span>
                      <img src={AxiosIMG}/>
                  </span>   
                  </div>
                </div>


                <div className='box-sponsor' >  
                  <div className='inside-sponsor'>
                  <span>
                      <img src={BootstrapIMG}/>
                  </span>   
                  </div>
                </div>


                <div className='box-sponsor' >  
                  <div className='inside-sponsor'>
                  <span>
                      <img src={GoogleBooks}/>
                  </span>   
                  </div>
                </div>

                <hr className='horizontal-line' />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Header