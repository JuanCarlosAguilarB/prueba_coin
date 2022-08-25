import React, { useState, useEffect } from 'react';
import TableR from 'react-bootstrap/Table';
import RowsTable from './rows/RowsTable';
// import {useFetch} from "../../hooks/useFetch"

const Table = () => {
    
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [isDelete, setIsdelete] = useState(false);




  useEffect(()=>{

    let url = "http://127.0.0.1:8000/api/v1/users/users/";

    try {
      const data1 =fetch(url)
      .then(response => response.json())
      .then(response => setData(response))
    } catch (error) {
      console.log("Error, data from api not found")      
    }

    },[])


    useEffect(()=>{


      try {
        if (isDelete){
        fetch (`http://127.0.0.1:8000/api/v1/users/users/${id}`, {
          method: 'DELETE'
        })
        setIsdelete(false);
        const data2 = data.filter((items)=> items.id!=id);
        setData(data2);
      }
      } catch (error) {
        console.log("Error, data from api not found")      
      }
  
      },[isDelete])


    // if (data){ listItems = data.map((data1) =>
    //    <RowsTable user={data1} />                       
    // );}
    
  return (
    <TableR className="table mx-auto"  responsive>
    <thead className='table-dark'>
    <tr >
        <th > name </th>
        <th > email </th>
        <th > city </th>
        <th>  Actions</th>
    </tr>
    
    </thead>
    <tbody>
    {data && data ?  data.map((user) => {
      return(
        <RowsTable user={user} setIsdelete={setIsdelete}  setId={setId} />                       
      )

    }): "items not found"} 
      {/* {data ? listItems: ''} */}
    </tbody>
    </TableR>
  )
}

export default Table;