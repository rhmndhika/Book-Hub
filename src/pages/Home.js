import React from 'react'
import Navbars from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import BooksScroll from '../components/BooksScroll/BooksScroll'
import BooksScroll2 from '../components/BooksScroll/BookScroll2'

const Home = () => {
  return (
    <div>
        <Navbars />
        <Header />
        <BooksScroll />
        <BooksScroll2 />
        <Category />
    </div>
  )
}

export default Home