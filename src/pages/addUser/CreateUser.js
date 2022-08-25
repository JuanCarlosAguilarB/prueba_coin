import React, {Fragment, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import ToastApp from '../../components/toast/ToastApp';
import "./index.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateUser() {


  const [handlerFlag, setHandlerFlag] = useState(false);
  const [datos, setDatos] = useState({
    name: '',
    email: '',
    city:'',
})

const handleInputChange = (event) => {
  
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })

}




useEffect(() => {

  if (handlerFlag){
  
    try {
      console.log(datos);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    };

    let url = "http://127.0.0.1:8000/api/v1/users/users/";
    fetch(url, requestOptions)
        // .then(response => response.json())
        // .then(data => console.log(data.id));
        .then((response) => {
          if (response.status === 201) {
           console.log("CREATED");
           alert("created")
          } })


  } catch (error) {
    alert("Error, user not created");
    console.log(error,'error');
  }
}
setHandlerFlag(false);
}, [handlerFlag]);

const senData = (event) => {
    event.preventDefault()
    setHandlerFlag(true);
    //  setDatos({  name: '',
    //  email: '',
    //  city:''});
     
     event.target.reset()
}

  return (
    <Form className='container abs-center' onSubmit={senData}>
      
      <div className="col-md-3 mb-4">
        <label>
          Name:
        <input 
            type="text" 
            placeholder="name" 
            className="form-control" 
            onChange={handleInputChange} 
            name="name" />
        </label>
    </div>
    <div className="col-md-3 mb-4">
        <label >
          Email:
        <input 
            type="text" 
            placeholder="Email" 
            className="form-control" 
            onChange={handleInputChange} 
            name="email" />
        </label>
    </div>
    <div className="col-md-3 mb-4">
        <label>
          City:
        <input 
            type="text" 
            placeholder="name" 
            className="form-control" 
            onChange={handleInputChange} 
            name="city" />
        </label>
    </div>
      

      
      <Button variant="primary" type="submit" value="Submit" >
        Submit
      </Button>
    </Form>
  );
}

export default CreateUser;


