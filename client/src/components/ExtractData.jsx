import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import { toast } from "react-hot-toast"

const ExtractData = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setloading] = useState(false);

  const requiredColumns = ["name", "email", "address", "phone", "bill", "status", "other"];

  const checkFile = () => {
    for (let col of requiredColumns) {
      if (!columns.includes(col)) {
        return false;
      }
    }
    return true;
  };

  const submitHandler = async () => {
    if (!checkFile()) {
      alert('Please upload the file in the correct format');
      setColumns([]);
      setData([]);
      setIsUploading(false);
      return;
    }
    try {
      setloading(true);
      for (let record of data) {
        await axios.post("http://localhost:5000/addlead", {
          name: record['name'],
          email: record['email'],
          address: record['address'],
          additinalInfo: record['other'],
          status: record['status'],
          bill: record['bill'],
          phone: record['phone']
        }, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
      }
      toast.success('Data uploaded successfully');
      setloading(false);
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Failed to upload data');
    } finally {
      setIsUploading(false);
      setloading(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setIsUploading(true);
    setloading(false);

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const parsedData = result.data;
          setColumns(Object.keys(parsedData[0]));
          setData(parsedData);
          setIsUploading(false);
        },
        header: true,
        skipEmptyLines: true,
      });
    }
  };

  return (
    <div className="p-4 min-h-screen">
      {!isUploading && (
        <>
          <h2 className="p-2 text-center text-2xl">Please upload the file in this format:</h2>
          <h2 className="p-2 text-center text-2xl font-bold">
            name, email, status, address, phone, bill, other
          </h2>
        </>
      )}
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold mb-4">Upload the CSV File</h1>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="mb-4 bg-[grey] text-white font-semibold text-center"
        />
      </div>
      {isUploading && <p className="text-2xl">Extracting the content... Please wait!</p>}
      {
        loading ? <div className='text-2xl font-bold text-[green] p-5 text-center'>
          Storing the data..Please wait
        </div> :
          data.length > 0 && (
            <div>
              <div className="flex items-center justify-between p-5 mb-5">
                <h2 className="text-xl font-semibold mb-2">Data extracted successfully from the file</h2>
                <button onClick={submitHandler} className={`btn ${loading ? "bg-[green]" : ""} btn-primary font-bold text-white`}>
                  {loading ? "Storing please wait" : "Store in database"}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                          <td key={colIndex}>{row[column]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
      }
    </div>
  );
};

export default ExtractData;
