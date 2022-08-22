import React, {Fragment, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./index.css"
import { useFetchPost } from '../../hooks/useFetchPost';


function CreateUser() {
  const [handlerFlag, setHandlerFlag] = useState(false);
  const [datos, setDatos] = useState({
    name: '',
    email: '',
    city:'',
})

const handleInputChange = (event) => {
  console.log(datos)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })

}

useEffect(() => {

  if (handlerFlag){
  
    try {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    };

    let url = "http://localhost:8000/api/vi/users/";
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data.id));
  } catch (error) {
    console.log(error,'error');
  }
}
setHandlerFlag(false);
}, [handlerFlag]);

const senData = (event) => {
    event.preventDefault()
    setHandlerFlag(true);
     setDatos({  name: '',
     email: '',
     city:''});
     
    //  event.target.reset()
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


