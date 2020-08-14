import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
    const { firstName = "Anonymous", bio = "Anonymous", profession = "Anonymous" } = props;
    const handleName = () => {
        alert(`${firstName}
        ${bio}
        ${profession}
        `);
    }
    const styleDiv = {
        textAlign: "center",
        borderLeft: "6px solid red",
        backgroundColor: "lightgrey",
        borderRadius: 300,
        borderRight: "6px solid blue",
        marginBottom: 50 
    }
    const paragraphStyle = {
        width: 300,
        marginLeft: "40%"
    }
    const buttonStyle = {
        padding: "20px 20px",
        color:"red",
        fontSize: 15,
        borderRadius: 25
    }
    return (
    <div style={styleDiv}>
    <h1 style={{color:"brown",letterSpacing:10, fontFamily:"cursive"}}>{firstName}</h1>
    <p style={paragraphStyle}>{bio}</p>
    <h3 style={{color:"brown", fontFamily:"fantasy"}}>{profession}</h3>
    {props.children}
    <button style={buttonStyle} onClick={handleName}>Show Name</button>
    </div>  
    );
    
}

Profile.propTypes = {
    firstName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profile;