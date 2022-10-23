import React, { useEffect } from "react";
import { useState, useNavigate } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import Update from "../Update/updateComponent";
import axios from "axios";
import { connect } from 'react-redux';


function mapStateToProps(state) {

    return {
        usr: state.User.U

    }
}

export default connect(mapStateToProps)(function Details(props) {

    const { usr, dispatch } = props;

    const { show, setShow } = props

    const handleModalClose = () => { setShow(false); };
    const handleModalShow = () => setShow(true);

    // //update
    let navigate = useNavigate();
    function updateFunc(){
        // handleModalClose
        navigate('/Update')
    }

   // delete
    function deleteUser() {
        axios.delete(`http://localhost:3030/User/DeleteUser/${usr.ID}`).then((res) => {
            if (res.data) {
                alert('הלקוח נמחק בהצלחה')
                // handleModalClose
            }
        })
    }
        const [details, setdetails] = useState()
        useEffect(() => {
            axios.get(`http://localhost:3030/User/getUserByID/${usr.ID}`).then((res) => {
                if (res.data) {
                    console.log(res.data)
                    setdetails(res.data)

                }
            })
        }, [])
    return (
        <>
            <div>
                <Modal show={show} onHide={handleModalShow}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ textAlign: 'center' }}>פרטים אישיים</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{
                        direction: 'rtl',
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        שם:{details.name}
                            ת''ז:{details.ID}
                            כתובת:{details.address}
                            תאריך לידה:{details.birthDate}
                            טלפון:{details.Phone}
                            טלפון נייד:{details.mobilePhone}
                    </Modal.Body>

                    <Modal.Footer style={{ marginLeft: '5%', display: 'flex', flexWrap: 'nowrap' }}>

                        <Button variant="secondary" onClick={updateFunc}>
                            עדכון
                        </Button>
                        <Button variant="primary" onClick={deleteUser}>
                            מחיקה
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
)