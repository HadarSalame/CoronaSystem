import React from 'react';
import './indexCss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import Details from '../User/Details/detailsComponent';
import Add from '../User/Add/AddComponent'
import update from '../User/Update/updateComponent';
import { connect } from 'react-redux';
import {importUserID} from '../../Redux/actions'


export default connect()(function Index(props) {

    const {dispatch } = props


    let navigate = useNavigate();
    // add user
    function AddUser() {
        navigate('/Add')
    }

    const [isModalShow, setIsModalShow] = React.useState();
    function OpenModal() {
        setIsModalShow(true)
        console.log("1234");

    }
    function closeModal() {
        setIsModalShow(false)
        console.log("4321");

    }

    const [IdCurrent, setIdCurrent] =useState();
    
    const [AllUser, setAllUser] = useState()


    useEffect(() => {
        axios.get("http://localhost:3030/User/getUser").then((res) => {
            if (res.data && res.data.length) {
                setAllUser(res.data)

            }
        })


    }, [])



    return (
        <div className='tableplace page'>
            <h1 style={{margin:"2%"}}>ברוכים הבאים</h1>
            <div>
                <Button  style={{margin:"2%"}}onClick={AddUser}>הוספת לקוח</Button>


            </div>
            <div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">תאריכי חיסונים</th>
                            <th scope="col">סוג בחיסון</th>
                            <th scope="col">תאריך סיום</th>
                            <th scope="col">תוצאה חיובית</th>
                            <th scope="col">שם</th>
                        </tr>
                    </thead>
                    {/* open in map */}
                    <tbody onClick={OpenModal}>
                        {AllUser && AllUser.length && AllUser.map((item,i)=>
                        <tr key={i}>
                            <td> {item.vaccinationDates}</td>
                            <td>{item.vaccinationType}</td>
                            <td>{item.recovery}</td>
                            <td>{item.getPositiveDate}</td>
                            <td>{item.name} </td>
                            
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {isModalShow && <Details show={isModalShow} setShow={closeModal} ID={IdCurrent}/>}
        </div>
    );


}
)


