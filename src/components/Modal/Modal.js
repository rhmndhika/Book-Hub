import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { FaSearch, FaShareAlt} from "react-icons/fa";


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

                <div className='modal-box'>
                  <span className='modal-icon'>
                    <i><FaShareAlt /></i>
                  </span>
                  <span className='modal-text'>LOREM</span>
                </div>

                <div className='modal-box'>
                  <span className='modal-icon'>
                    <i><FaShareAlt /></i>
                  </span>
                  <span className='modal-text'>{props.currency}</span>
                </div>
            </div>

            <div className="rightDiv">
                <div className='modal-containerText'>
                  <h1>{props.title}</h1>
                  <h2>{props.author}</h2>
            
                  <div className='modal-desc'>
                  <p>{props.description}</p>
                  </div>
                </div>
            </div>
        </div>
        <div className='bottomDiv'>
              <h1>Information</h1>
            </div>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Modals