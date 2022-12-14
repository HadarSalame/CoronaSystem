import React from "react";
import { Form ,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Add/AddUserCSS.css"
import index from '../../Index/indexComponent'
import axios from "axios";
import { useRef } from "react";
import { addUser } from '../../../Redux/actions';
import { connect } from "react-redux";



export default connect(function Update() {

    let navigate = useNavigate();
 

     
    let refName = useRef();
    let refID = useRef();
    let refAddress = useRef();
    let refBirthDate = useRef();
    let refPhone = useRef();
    let refmobilePhone = useRef();
    let refGetPositiveDate = useRef();
    let refRecovery = useRef();
 



     function update(){
let u={
    name: refName.current.value,
    ID: refID.current.value,
    address: refAddress.current.value,
    birthDate: refBirthDate.current.value,
    Phone: refPhone.current.value,
    mobilePhone: refmobilePhone.current.value,
    getPositiveDate: refGetPositiveDate.current.value,
    recovery: refRecovery.current.value,


}
        axios.post('http://localhost:3030/User/UpdateUser', u).then(res => {
            alert(res.data)
            console.log(res.data)
            navigate("/Index")
        }).catch(err => console.log(err))

navigate('/index')

     }

    return (
        <>
            <div className="page">
                <h2 style={{ textAlign: "center" }}>עדכון לקוח</h2>

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
                            <Form.Control type="text" ref={refAddress} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicBirth">
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
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPositiveAnswer">
                            <Form.Label>תאריך קבלת תוצאה חיובית</Form.Label>
                            <Form.Control type="Date" ref={refGetPositiveDate} />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicfinallDate">
                            <Form.Label>תאריך סיום</Form.Label>
                            <Form.Control type="Date" ref={refRecovery} />
                        </Form.Group>
                    </Form>
                    {/* <Form>
                        <Form.Label>סוג חיסון</Form.Label>
                        <Form.Select aria-label="סוג חיסון" ref={refVaccinationType}>
                            <option value="פייזר">פייזר</option>
                            <option value="מודרנה">מודרנה</option>

                        </Form.Select>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>תאריכי חיסונים</Form.Label>
                            <Form.Control type="Date" ref={refvaccinationDateOne} />
                            <Form.Control type="Date" ref={refvaccinationDateTwo} />
                            <Form.Control type="Date" ref={refvaccinationDateThree} />
                            <Form.Control type="Date" ref={refvaccinationDateFour} />
                        </Form.Group>
                    </Form> */}
                    <Button onClick={update}>עדכן</Button>

                </div>
            </div>
        </>
    )
})