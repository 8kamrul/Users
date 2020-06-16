import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Users.css'
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';




const Users = () => {
    const first = fakeData;
    const [users, setUsers] = useState(first);
    const [friend, setFriend] = useState([])
    const handleAddProfile = (profile) => {
        const newFriend = [...friend, profile];
        setFriend(newFriend)
    }
    return (
        <div className="user-container">
            <div className="profile-container">
               
                {
                    users.map(pd => <Profile 
                        handleAddProfile = {handleAddProfile}
                        profile={pd}></Profile>)
                }
                
            </div> 
            <div className="friend-container">
                    <Friends friend={friend}></Friends>
            </div>
            
        </div>
    );
};

export default Users;