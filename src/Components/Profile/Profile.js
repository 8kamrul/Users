import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusCircle, } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

const Profile = (props) => {
    const {name ,phone, email, company, salary, website, img} = props.profile
    return (
        <div className='profile'>
            <div className="profile-img">
                <img src={img} alt=""/>
            </div>
            <div className="user-profile">
                <h3>Name : {name}</h3>
                <p>Phone : {phone}</p>
                <p>E-mail : {email}</p>
                <p>Company : {company.name}</p>
                <p>Website : {website}</p>
                <h5>Yearly Salary : {salary}</h5>
                <button className='main-btn'
                onClick = {() => props.handleAddProfile(props.profile)}
                > 
                <FontAwesomeIcon icon={faPlusCircle} />add to friend </button>
            </div>
    
        </div>
    );
};

export default Profile;