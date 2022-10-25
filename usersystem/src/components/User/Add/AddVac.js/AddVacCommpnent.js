import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Radio, FormControlLabel, RadioGroup, FormLabel, FormControl, FormGroup } from '@mui/material';

export default function AddVac() {




    let navigate = useNavigate();

    let refVaccinationDate = useRef();
    let refVaccinationType = useRef();


    function AddOption() {
        let newVac = {

            vaccinationDate: refVaccinationDate.current.value,
            vaccinationType: refVaccinationType.current.value
        }

        axios.post('http://localhost:3030/VaccAddVacination/AddVac', newVac).then(res => {
            alert(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))

    }
    function gotoIndex(){
        navigate('/Index')
    }

   

    return (
        <>
                          <h2 style={{ textAlign: "center" }}>חיסונים</h2>
            <div>
               
                <div className='form'>
            
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>סוג חיסון</Form.Label>
                            <Form.Select aria-label="סוג חיסון" id='1' ref={refVaccinationType}>
                                <option value="פייזר">פייזר</option>
                                <option value="מודרנה">מודרנה</option>
                            </Form.Select>
                            <Form.Label>תאריך החיסון</Form.Label>
                            <Form.Control type="Date" id='1' ref={refVaccinationDate} />
                        </Form.Group>
                    </Form>
                    <Button onClick={AddOption}>הוסף</Button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>סוג חיסון</Form.Label>
                            <Form.Select aria-label="סוג חיסון" id='1' ref={refVaccinationType}>
                                <option value="פייזר">פייזר</option>
                                <option value="מודרנה">מודרנה</option>
                            </Form.Select>
                            <Form.Label>תאריך החיסון</Form.Label>
                            <Form.Control type="Date" id='1' ref={refVaccinationDate} />
                        </Form.Group>
                    </Form>
                    <Button onClick={AddOption}>הוסף</Button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>סוג חיסון</Form.Label>
                            <Form.Select aria-label="סוג חיסון" id='1' ref={refVaccinationType}>
                                <option value="פייזר">פייזר</option>
                                <option value="מודרנה">מודרנה</option>
                            </Form.Select>
                            <Form.Label>תאריך החיסון</Form.Label>
                            <Form.Control type="Date" id='1' ref={refVaccinationDate} />
                        </Form.Group>
                    </Form>
                    <Button onClick={AddOption}>הוסף</Button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>סוג חיסון</Form.Label>
                            <Form.Select aria-label="סוג חיסון" id='1' ref={refVaccinationType}>
                                <option value="פייזר">פייזר</option>
                                <option value="מודרנה">מודרנה</option>
                            </Form.Select>
                            <Form.Label>תאריך החיסון</Form.Label>
                            <Form.Control type="Date" id='1' ref={refVaccinationDate} />
                        </Form.Group>
                    </Form>
                    <Button onClick={AddOption}>הוסף</Button>
                </div>
            </div>

            <Button onClick={gotoIndex}>עדכן</Button>
<div id="oo"></div>
        </>
    )
}