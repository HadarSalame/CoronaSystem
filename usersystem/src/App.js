import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index/indexComponent';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
// import Details from './components/User/Details/detailsComponent';
// import Add from './components/User/Add/AddComponent'
// import update from './components/User/Update/updateComponent';


function App() {

return(
<>
<Index></Index>
</>
)
//   let navigate = useNavigate();
//  // add user
//   function AddUser() {
//     navigate('/Add')
//   }

//   const [isModalShow, setIsModalShow] = React.useState();
//   function OpenModal() {
//     // setIdCurrent(id)
//     setIsModalShow(true)
//     console.log("1234");

//   }
//   function closeModal() {
//     setIsModalShow(false)
//     console.log("4321");

//   }

//   const [user, setuser] = useState()


//   useEffect(() => {
//     axios.get("http://localhost:3030/User/getUser").then((res) => {
//       if (res.data && res.data.length) {
//         setuser(res.data)
//       }
//     })


//   }, [])


//   return (
//     <div className='tableplace'>
//       <h1>ברוכים הבאים</h1>
//       <div>
// <Button onClick={AddUser}>הוספת לקוח</Button>
//       </div>
//       <div>
//         <table className="table table-sm">
//           <thead>
//             <tr>
//               <th scope="col">תאריכי חיסונים</th>
//               <th scope="col">סוג בחיסון</th>
//               <th scope="col">תאריך סיום</th>
//               <th scope="col">תוצאה חיובית</th>
//               <th scope="col">שם</th>
//             </tr>
//           </thead>
//           {/* open in map */}
//           <tbody onClick={OpenModal}>
//             <tr>
//               <td>13/06/2020<br></br>
//                 12/12/2020</td>
//               <td>פייזר</td>
//               <td>06/12/2020</td>
//               <td>13/06/2020</td>
//               <td>נועה </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {isModalShow && <Details show={isModalShow} setShow={closeModal} />}
//     </div>
//   );


}


export default App;
