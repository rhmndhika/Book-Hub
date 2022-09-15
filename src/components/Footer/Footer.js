import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='wrapFooter'>
    <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>BookHub</h2>
      <p class="pr-5 text-white-50">
      BookHub is digital online library focusing on user experience, with a variaty of 5000+ books across the world. 
      </p>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      
        
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>Banjar Wijaya, Kota Tangerang</p>
      <p><i class="fa fa-envelope-o mr-3"></i>rahmandhika5@gmail.com</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© BookHub 2022. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Footer