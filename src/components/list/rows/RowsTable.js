import React, {Fragment, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';



const RowsTable = ({user,setId, setIsdelete}) => {

const removeCategory = (id) =>{
  setId(id);
  setIsdelete(true);

}

  return (<>
    <tr key={user.id} scope="row">
        <th> {user.name} </th>
        <th> {user.email} </th>
        <th> {user.city} </th>
        <th>
      <Button variant="primary" type="submit" value="Submit" >Edit</Button>
      <Button variant="danger" type="submit" value="Submit"  onClick={() =>removeCategory(user.id)}>Delete</Button>
        </th>
    </tr>
    </>
  )
}

export default RowsTable