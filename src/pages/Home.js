import React from 'react'
import Navbars from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import BooksScroll from '../components/BooksScroll/BooksScroll'

const Home = () => {
  return (
    <div>
        <Navbars />
        <Header />
        <BooksScroll />
        <Category />

    </div>
  )
}

export default Home