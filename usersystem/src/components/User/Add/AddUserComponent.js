import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import './AddUserCSS.css';
import { Radio, FormControlLabel, RadioGroup, FormLabel, FormControl } from '@mui/material';
import index from '../../Index/indexComponent'
import AddVac from './AddVac.js/AddVacCommpnent';
import { connect } from 'react-redux';
import { addUser } from '../../../Redux/actions';





export default connect()(function Add(props) {

    const {dispatch } = props


    let refName = useRef();
    let refID = useRef();
    let refAddress = useRef();
    let refBirthDate = useRef();
    let refPhone = useRef();
    let refmobilePhone = useRef();
    // let refGetPositiveDate = useRef(null);
    // let refRecovery = useRef(null);




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
            // getPositiveDate: refGetPositiveDate.current.value,
            // recovery: refRecovery.current.value,



        }
        axios.post('http://localhost:3030/User/CreateUser', newUser).then(res => {
            console.log(res.data)
            dispatch(addUser(res.data.CreateUser));
            navigate("/AddVac")
        }).catch(err => console.log(err))


    }


    //hasCorona?
    const [selectedValue, setselectedValue] = useState();
    const handleChange = (event) => {
        setselectedValue(event.target.value)
        console.log(selectedValue);
    };



    return (
        <>
            <div className="page">
                <h2 style={{ textAlign: "center" }}>הוספת לקוח</h2>
                <div className="form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>שם מלא</Form.Label>
                            <Form.Control type="text" ref={refName} />
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
                            <h6>יש להכניס כתובת מלאה(עיר רחוב ומספר בית)</h6>
                            <Form.Control type="text" ref={refAddress} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3 " controlId="formBasicBirth">
                            <Form.Label>תאריך לידה</Form.Label>
                            <Form.Control type="date" ref={refBirthDate} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>טלפון</Form.Label>
                            <Form.Control type="text" ref={refPhone} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicmobilePhone">
                            <Form.Label>טלפון נייד</Form.Label>
                            <Form.Control type="text" ref={refmobilePhone} />
                        </Form.Group>
                    </Form>

                    <Form.Label>האם חלית בקורונה?</Form.Label>
                    <div>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="false"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="כן"
                                    checked={selectedValue === 'true'}
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="לא"
                                    checked={selectedValue === 'false'}
                                    onChange={handleChange}
                                />
                            </RadioGroup>
                        </FormControl>



                    </div>
                    {selectedValue == 'true' ?
                        <>
                            <Form>
                                {/* <Form.Group className="mb-3" controlId="formBasicPositiveAnswer">
                                    <Form.Label>תאריך קבלת תוצאה חיובית</Form.Label>
                                    <Form.Control type="Date" ref={refGetPositiveDate} />
                                </Form.Group> */}
                            </Form>
                            <Form>
                                {/* <Form.Group className="mb-3" controlId="formBasicfinallDate">
                                    <Form.Label>תאריך סיום</Form.Label>
                                    <Form.Control type="Date" ref={refRecovery} />
                                </Form.Group> */}
                            </Form>
                        </>
                        : " "}
                    <Button onClick={goindex}>המשך</Button>
                </div>
            </div>
        </>
    )
}
)