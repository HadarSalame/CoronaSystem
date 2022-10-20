import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function () {

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>שם מלא</Form.Label>
                    <Form.Control type="text" placeholder="Enter fullName" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicid">
                    <Form.Label>ת''ז</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>עיר</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                    <Form.Label>רחוב</Form.Label>
                    <Form.Control type="text" placeholder="Enter street" />
                    <Form.Label>מספר בית</Form.Label>
                    <Form.Control type="text" placeholder="Enter number" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicBirth">
                    <Form.Label>תאריך לידה</Form.Label>
                    <Form.Control type="text" placeholder="Enter BirthDate" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>טלפון</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone" />
                </Form.Group>
            </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formBasichandPhone">
                    <Form.Label>טלפון נייד</Form.Label>
                    <Form.Control type="text" placeholder="Enter handPhone" />
                </Form.Group>
            </Form>  
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPositiveAnswer">
                    <Form.Label>תאריך קבלת תוצאה חיובית</Form.Label>
                    <Form.Control type="Date" placeholder="Enter PositiveAnswer" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicfinallDate">
                    <Form.Label>תאריך סיום</Form.Label>
                    <Form.Control type="Date" placeholder="Enter finallDate" />
                </Form.Group>
            </Form>  <Form>
                <Form.Group className="mb-3" controlId="formBasicid">
                    <Form.Label>סוג חיסון</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" />
                </Form.Group>
            </Form>  <Form>
                <Form.Group className="mb-3" controlId="formBasicid">
                    <Form.Label>תאריכי חיסונים</Form.Label>
                    <Form.Control type="Date" placeholder="Enter id" />
                </Form.Group>
            </Form>
        </>
    )
}