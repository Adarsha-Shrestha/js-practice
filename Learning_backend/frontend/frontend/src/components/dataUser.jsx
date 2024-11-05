import React,{useState} from 'react';

function UserDataDisplay(){
    const [userData, setUserData] = useState([]);
    
    const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:3000/user/data');
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setUserData(data.userData);
        }catch(err){
            console.error(err);
        }
    };

    fetchData();
    
    return(
        <div>
            <h2>User Data</h2>
            {userData.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            {/* <th>Description</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data found</p>
            )}
        </div>
    )
}

export default UserDataDisplay;