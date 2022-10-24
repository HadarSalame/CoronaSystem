import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Radio, FormControlLabel, RadioGroup, FormLabel, FormControl, FormGroup } from '@mui/material';

export default function AddVac() {



    //is immune?

    const [selectedImmuneValue, setselectedImmuneValue] = useState();
    const handleChangeImmune = (event) => {
        setselectedImmuneValue(event.target.value)
        console.log(selectedImmuneValue + "  immune");
    }


    let navigate = useNavigate();

    let refVaccinationType = useRef();
    let refVaccinationDate = useRef();


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

    function gotoIndex() {
        let newVac = {

            vaccinationDate: refVaccinationDate.current.value,
            vaccinationType: refVaccinationType.current.value
        }

        axios.post('http://localhost:3030/VaccAddVacination/AddVac', newVac).then(res => {
            alert(res.data)
            console.log(res.data)
            navigate("/Index")
        }).catch(err => console.log(err))
    }
    function NumOfVac() {
        return(
            <>
            <button>hi</button>
            </>
        )
    }

    return (
        <>
            <Form.Label>האם התחסנת?</Form.Label>
            <div>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="true"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="true"
                            control={<Radio />}
                            label="כן"
                            checked={selectedImmuneValue === 'true'}
                            onChange={handleChangeImmune}
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio />}
                            label="לא"
                            checked={selectedImmuneValue === 'false'}
                            onChange={handleChangeImmune}
                        />
                    </RadioGroup>
                </FormControl>
                <div className='form'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicid" style={{ margin: "3%" }}>
                            <Form.Label>סוג חיסון</Form.Label>
                            <Form.Select aria-label="סוג חיסון" id='1' ref={refVaccinationType}>
                                <option value="פייזר">פייזר</option>
                                <option value="מודרנה">מודרנה</option>
                            </Form.Select>
                            <Form.Label>תאריך החיסון</Form.Label>
                            <Form.Control type="Date" id='1' ref={refVaccinationDate} />
                        </Form.Group>
                    </Form>
                    <Button onClick={NumOfVac}>הוסף</Button>
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
            <div>
                {selectedImmuneValue == 'true' ?
                    <>
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
                        <Button onClick={AddOption}>+</Button>
                    </>
                    : " "}
            </div>
            <Button onClick={gotoIndex}>הרשמה</Button>

        </>
    )
}