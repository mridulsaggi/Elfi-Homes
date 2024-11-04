import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from "axios";

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'BillNumber',
    headerName: 'Bill Number',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    editable: true,
    width: 160,
  },
];

export default function DataGridDemo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const category = 'all';
        const { data } = await axios.post("http://www.localhost:5000/category", {
          category
        }, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-5xl text-center mt-[3rem]'>DASHBOARD !!</h1>
      <Box className="bg-slate-200 mx-auto my-[5rem]" sx={{ height: 400, width: '70%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
