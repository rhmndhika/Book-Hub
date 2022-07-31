import React from 'react'
import './Header.css'
import Arsitek from '../../asset/Arsitek.png'
import BookLeft from '../../asset/BookLeft.jpg'
import BootstrapIMG from '../../asset/Bootstrap5.png'
import ReactIMG from '../../asset/React.png'
import AxiosIMG from '../../asset/Axios.png'
import GoogleBooks from '../../asset/GoogleBooks.png'
import Bootstrap from '../../asset/Bootstrap5.png'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    // <div className="container-header">
    //   <div className='header'>
    //     <h1 className='xd'>Book Hub</h1>
    //   </div>
    // </div>
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
            {/* <div className='searchbar'>
              <div className='icon'></div>
              
              <div className='inputs'>
              <input></input>
              </div>
            </div> */}
             <div className='search-box'>
              <input className="search-text" type="text" placeholder = "Search Books" />
                <a href="#" className='search-btn'>
                  <i><FaSearch /></i>
                </a>
            </div>
          </div>

          
            {/* <div className='container-3'>
                <div className='text-content-3'>
                  <h1>Featured In</h1>
                </div>
                  <div className='sponsor'>
                    <div className='item'>
                      <img src={BootstrapIMG} />
                      <img src={ReactIMG} />
                      <img src={AxiosIMG} />
                      <img src={GoogleBooks} />
                    </div>
                  </div>
            </div> */}

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


              
              
                <hr className='horizontal-line' size="10px" width="100%"/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Header