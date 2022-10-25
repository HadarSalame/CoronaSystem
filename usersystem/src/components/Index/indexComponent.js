import React from 'react';
import './indexCss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import Details from '../User/Details/detailsComponent';
import AddUser from '../User/Add/AddUserComponent'
import update from '../User/Update/updateComponent';
import { connect } from 'react-redux';
import AddVac from '../User/Add/AddVac.js/AddVacCommpnent';
// import { importUserID } from '../../Redux/actions'
// import { addUser } from '../../../Redux/actions';


export default connect()(function Index(props) {

    // const { dispatch } = props

    const [IdCurrent, setIdCurrent] = useState();



    let navigate = useNavigate();
    // add user
    function AddUser() {
        navigate('/AddUser')
    }
    function vac() {
        navigate('/AddVac')
    }

    function Up() {
        navigate('/Update')
    }
    function del() {
        navigate('/Update')
            axios.delete(`http://localhost:3030/User/DeleteUser/${props.userId}`).then((res) => {
            if (res.data) {
                alert('הלקוח נמחק בהצלחה')
                // handleModalClose
            }
        })
    }

    const [isModalShow, setIsModalShow] = useState();
    function OpenModal(id) {
        // dispatch(addUser(id));
        setIdCurrent(id)
        setIsModalShow(true)
        console.log("1234");

    }
    function closeModal() {
        setIsModalShow(false)
        console.log("4321");

    }
    const [showAlert,setShowAlert]=useState(false)

    const [details, setdetails] = useState()

    function open(IdCurrent){
        setShowAlert(true)
        axios.get(`http://localhost:3030/User/getUserByID/${IdCurrent}`).then((res) => {
            if (res.data) {
                console.log(res.data)
                setdetails(res.data)

            }
        })

    }

    // const [IdCurrent, setIdCurrent] =useState();

    const [AllUser, setAllUser] = useState()
    const [AllVac, setAllVac] = useState()



    useEffect(() => {

        axios.get(`http://localhost:3030/User/getUser`).then((res) => {
            if (res.data && res.data.length) {
                setAllUser(res.data)
                setIdCurrent(res.data._id)
                
  axios.get(`http://localhost:3030/Vaccination/GetVacById/${IdCurrent}`).then((res) => {
            if (res.data && res.data.length) {
                setAllVac(res.data)

            }
        })
            }
        })


        


    }, [])



    return (
        <div className='tableplace page'>
            <h1 style={{ margin: "2%" }}>מערכת ניהול קורונה לקופת חולים</h1>
            <div>
                <Button style={{ margin: "2%" }} onClick={AddUser}>הוספת לקוח</Button>
                <Button style={{ margin: "2%" }} onClick={vac}>הוספת חיסון</Button>
                <Button style={{ margin: "2%" }} onClick={Up}>עדכון פרטים</Button>
                <Button style={{ margin: "2%" }} onClick={del}></Button>



                <alert  hidden={!showAlert}>
                               
                                אחד מהפרטים שהוזנו אינו תקין
                            </alert>

            </div>
            <div>

            </div>
            <div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">תאריך סיום</th>
                            <th scope="col">תאריך קבלת תוצאה חיובית </th>
                            <th scope="col">שם</th>
                        </tr>
                    </thead>
                    {/* open in map */}
                    <tbody>
                        {AllUser && AllUser.length && AllUser.map((item, i) =>
                            <tr onClick={()=>{OpenModal(IdCurrent)}} key={i} >
                                <td>{item.recovery}</td>
                                <td>{item.getPositiveDate}</td>
                                <td>{item.name} </td>
                            </tr>)}
                            <tr> 
                              <th scope="col">תאריכי חיסונים</th>
                              <th scope="col">סוג החיסון</th>
                            </tr>
                            {AllVac && AllVac.length && AllVac.map((vitem)=><>
                                <td> {vitem.vaccinationDate}</td>
                                <td>{vitem.vaccinationType}</td>
                                </>)}
                    </tbody>
                </table>
            </div>
            {isModalShow && <Details show={isModalShow} setShow={closeModal} _Id={IdCurrent} />}
        </div>
    );


}
)


