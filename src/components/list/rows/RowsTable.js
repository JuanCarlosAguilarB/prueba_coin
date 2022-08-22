import React, {Fragment, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';



const RowsTable = ({user},setUsers,users) => {
  console.log(users)
  useEffect(() => {
    let url = "http://localhost:8000/api/vi/users/";
    fetch(url, { method: 'DELETE' })

}, []);


const removeCategory = (id) =>{
  // fetch (`http://localhost:8000/api/vi/users/${id}`, {
  //   method: 'DELETE'
  // })
  // .then(res => res.json())
  // .then(res => {
  //   if (res.success) {
  //     // let categories = this.state.categories.filter(c => c.id !== id);
  //     // this.setState({ categories });
  //     // alert('Categoría eliminada');
  //   }
  // });
  if (users){
    
    let usersNew = users.filter((item)=> item.id != id)
    console.log(usersNew)
    console.log(id)
  }
  // setUsers([...usersNew]);
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