import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import './AddCSS.css';
import index from '../../Index/indexComponent'



export default function Add() {

refName=useRef();
refID=useRef();
refAddress=useRef();
refBirthDate=useRef();
refPhone=useRef();
refmobilePhone=useRef();
refGetPositiveDate=useRef();
refRecovery=useRef();
refVaccinationType=useRef();
const [selectedDate, setSelectedDate] = useState()


    let navigate = useNavigate();
    // add user
     function goindex() {
        let newUser = {
            name: refName.current.value,
            ID: refID.current.value,
            address: refAddress.current.value,
            birthDate: refBirthDate.current.value,
            Phone: refPhone.current.value,
            mobilePhone: refmobilePhone.current.value,
            getPositiveDate: refGetPositiveDate.current.value,
            recovery: refRecovery.current.value,
            vaccinationType: refVaccinationType.current.value,
            vaccinationDates: selectedDate

        }
        axios.post('http://localhost:3030/User/CreateBusiness', newUser).then(res => {
            alert(res.data)
            console.log(res.data)
            navigate("/Index")
        }).catch(err => console.log(err))

     }


    return (
        <>
            <div className="page">
                <h2 style={{ textAlign: "center" }}>הוספת לקוח</h2>
                <div className="form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>שם מלא</Form.Label>
                            <Form.Control type="text" ref={refName}/>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>ת''ז</Form.Label>
                            <Form.Control type="text" ref={refID} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>כתובת</Form.Label>
                            <Form.Control type="text" ref={refAddress}/>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicBirth">
                            <Form.Label>תאריך לידה</Form.Label>
                            <Form.Control type="text" ref={refBirthDate} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>טלפון</Form.Label>
                            <Form.Control type="text"ref={refPhone}/>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicmobilePhone">
                            <Form.Label>טלפון נייד</Form.Label>
                            <Form.Control type="text" ref={refmobilePhone}/>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPositiveAnswer">
                            <Form.Label>תאריך קבלת תוצאה חיובית</Form.Label>
                            <Form.Control type="Date" ref={refGetPositiveDate} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicfinallDate">
                            <Form.Label>תאריך סיום</Form.Label>
                            <Form.Control type="Date" ref={refRecovery}/>
                        </Form.Group>
                    </Form>
                    <Form>
                    <Form.Label>סוג חיסון</Form.Label>
                        <Form.Select aria-label="סוג חיסון" ref={refVaccinationType}>
                            <option value="1">פייזר</option>
                            <option value="2">מודרנה</option>
                       
                        </Form.Select>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>תאריכי חיסונים</Form.Label>
                            <Form.Control type="Date" ref={selectedDate} />
                            <Form.Control type="Date" ref={selectedDate} />
                            <Form.Control type="Date" ref={selectedDate}  />
                            <Form.Control type="Date" ref={selectedDate}  />
                           
                            
                        </Form.Group>
                    </Form>
                    <Button onClick={goindex}>הוסף</Button>
                </div>
            </div>
        </>
    )
}