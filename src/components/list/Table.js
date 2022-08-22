import React, { useState, useEffect } from 'react';
import TableR from 'react-bootstrap/Table';
import RowsTable from './rows/RowsTable';
import {useFetch} from "../../hooks/useFetch"

const Table = () => {
    
    let url = "http://localhost:8000/api/vi/users/";
    let {error, isPending, data} =  useFetch(url);
    let [isLoading, setLoading] = useState(true);
    
    let listItems=[]

    if (data){ listItems = data.map((data1) =>
       <RowsTable user={data1} setUsers={setLoading} users={isLoading}/>                       
    );}
    
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
      {data ? listItems: ''}
    </tbody>
    </TableR>
  )
}

export default Table;