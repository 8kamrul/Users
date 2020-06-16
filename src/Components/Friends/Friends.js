import React from 'react';

const Friends = (props) => {
    const friend = props.friend;
    let total = 0;
    for(let i = 0; i<friend.length; i++){
        const profile = friend[i];
        total = total + profile.salary;
    }
    return (
        <div>
            <h3>Total Friends Added: {friend.length}</h3>
            <h4>Total Yearly Salary Of Friends: $ {total}.00</h4>
        </div>
    );
};

export default Friends;