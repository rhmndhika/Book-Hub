import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { FaSearch, FaShareAlt} from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { GiAges } from "react-icons/gi";
import { MdOutlineSell } from "react-icons/md";


const  Modals =(props) => {
  

  return (
    <>
      {/* <button className='button-31' onClick={() => setShow(true)} >
        Show more
      </button> */}
    
      <Modal
        show={props.show}
        // onHide={() => setShow(false)}
        onHide={props.close}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className='modal-container'>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="outerDiv">
            <div className="leftDiv">

                <div className='modal-image'>
                  <img src={props.thumbnail} />
                </div>

                <div className='wrapBook'>
                  <a className='btnLink' href={props.link}>Read Now</a>
                </div>

                <div className='modal-box'>
                  <span className='modal-icon'>
                    <i><MdOutlineSell /></i>
                  </span>
                  <span className='modal-text'>{props.currency}</span>
                </div>

                
                <div className='modal-box'>
                  <span className='modal-icon'>
                    <i><BsBook /></i>
                  </span>
                  <span className='modal-text'>{props.page ? props.page : "-"}</span>
                </div>


                <div className='modal-box'>
                  <span className='modal-icon'>
                    <i><GrLanguage /></i>
                  </span>
                  <span className='modal-text'>{props.language}</span>
                </div>

                <div className='modal-box'>
                  <span className='modal-icon'>
                    <i><GiAges /></i>
                  </span>
                  <span className='modal-text'>{props.maturity ? props.maturity : "-"}</span>
                </div>

           
     
            </div>

            <div className="rightDiv">
                <div className='modal-containerText'>
                  <h1>{props.title}</h1>
                  <h2>{props.author}</h2>
            
                  <div className='modal-desc'>
                  <h5>About this book</h5>
                  <p>{props.description ? props.description : "THIS BOOK DOES NOT HAVE ANY DESCRIPTION"}</p>
                  </div>
                </div>
            </div>
        </div>
        <div className='bottomDiv'>
              <h3>Information</h3>
              <div className='wrapInformation'>
                <div className='info-item-1'>
                  <p>Publisher</p>
                  <p>{props.publisher}</p>
                </div>
                <div className='info-item-1'>          
                  <p>Date</p>
                  <p>{props.published}</p>
                </div>
                <div className='info-item-1'>
                  <p>Category</p>
                  <p>{props.category}</p>
                </div>
                <div className='info-item-1'>
                  <p>Type</p>
                 <p>{props.type ? props.type : "No Type"}</p>
                </div>
              </div>
        </div>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Modals