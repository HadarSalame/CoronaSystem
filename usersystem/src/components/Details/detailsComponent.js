import React from "react";
import { useState,useNavigate } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import update from "../Update/updateComponent";

export default function Details(props) {

    const { show, setShow } = props

    const handleModalClose = () => { setShow(false); };
    const handleModalShow = () => setShow(true);

    // let navigate = useNavigate();
    // function updateFunc(){
    //     navigate('/Update')
    // }
    return (
        <>
            <div>
                <Modal show={show} onHide={handleModalShow}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ textAlign: 'center' }}>פרטים אישיים</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{
                        direction: 'rtl',
                        display:'flex',
                        justifyContent: 'space-around'
                    }}>
                        <div>image</div>
                        <div>
                            שם:
                            ת''ז:
                            כתובת:
                            תאריך לידה:
                            טלפון:
                            טלפון נייד:

                        </div>

                    </Modal.Body>

                    {/* <Modal.Footer style={{ marginLeft: '5%', display: 'flex', flexWrap: 'nowrap' }}>

                        <Button variant="secondary" onClick={updateFunc}>
                            עדכון
                        </Button>
                        <Button variant="primary" onClick={handleModalClose}>
                            מחיקה
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </>
    )
}