import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch('http://localhost:3000/admin/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setMessage(data.msg); // "Admin created"
        } else {
          setMessage(data.msg || "Error during signup");
        }
      } catch (error) {
        setMessage("Network error");
        console.error('Error:', error);
      }
    };
  
    return (
      <div>
        <h2>Admin Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Sign Up</button>
        </form>
  
        {message && <p>{message}</p>}
      </div>
    );
  }
  
  export default Signup;