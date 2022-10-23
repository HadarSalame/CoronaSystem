import React from "react";
import { Form ,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Add/AddCSS.css"
import index from '../../Index/indexComponent'
import axios from "axios";



export default function Update() {

    let navigate = useNavigate();
    // add user
     function goindex() {
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
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>ת''ז</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>עיר</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>רחוב</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>מספר בית</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicBirth">
                            <Form.Label>תאריך לידה</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>טלפון</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicmobilePhone">
                            <Form.Label>טלפון נייד</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPositiveAnswer">
                            <Form.Label>תאריך קבלת תוצאה חיובית</Form.Label>
                            <Form.Control type="Date" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicfinallDate">
                            <Form.Label>תאריך סיום</Form.Label>
                            <Form.Control type="Date" />
                        </Form.Group>
                    </Form>  
                      <Form>
                        <Form.Label>סוג חיסון</Form.Label>
                        <Form.Select aria-label="סוג חיסון">
                            <option value="faiser">פייזר</option>
                            <option value="moderna">מודרנה</option>
                        </Form.Select>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>תאריכי חיסונים</Form.Label>
                            <Form.Control type="Date" />
                        </Form.Group>
                    </Form>
                    <Button onClick={goindex}>עדכן</Button>

                </div>
            </div>
        </>
    )
}