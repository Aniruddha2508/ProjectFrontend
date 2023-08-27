import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
import { url } from './Common/constants';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(url+'/userlist'); // Replace with your API endpoint
            const customerUsers = response.data.filter(user => user.role === 'CUSTOMER');
            setUsers(customerUsers);
            console.log(customerUsers);
            
            // setUsers(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            
            <h1>List of Customers</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.contact}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
