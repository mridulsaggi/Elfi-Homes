import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    editable: true,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: 'pending' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, status: 'sent' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, status: 'sent' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'accepted' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, status: 'pending' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: 'pending' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: 'pending' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'no response' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'accepted' }
];

export default function DataGridDemo() {
  return (
    <div>
      <h1 className='text-5xl text-center mt-[3rem]'>DASHBOARD !!</h1>
      <Box className="bg-slate-200 mx-auto my-[5rem]" sx={{ height: 400, width: '70%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
