import React from 'react';

const Profile = props => {
    console.log(props)  
    return (
        props.handlename(props.name)
    )
    
};


export default Profile;