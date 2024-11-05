import React, { useState, useEffect } from 'react';

function DataDisplay() {
    const [adminData, setAdminData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin/data');
          
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      setAdminData(data.adminData);  // Set the fetched data
    //   setLoading(false);
    } catch (err) {
      setError(err.message);
    //   setLoading(false);
    }
  };
  
  fetchData();
  
    // if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h2>Admin Data</h2>
        {adminData.length > 0 ? (
          <table border="1">
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((admin, index) => (
                <tr key={index}>
                  <td>{admin.username}</td>
                  <td>{admin.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data found</p>
        )}
      </div>
    );
  }
  
  export default DataDisplay;
