import React, { useState, useContext } from 'react';
import { UserContext } from "../../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    }

    // Function to handle changes in input fields
    // Function to handle changes in input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`);
        setEditedUser({
            ...editedUser,
            [name]: value
        });
    }
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., update user data)
        // You can send `editedUser` to your backend or update the context state
    }

    return (
        <div className='container-fluid mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <h3>Welcome to your profile</h3>
                    <button onClick={toggleProfile} className='cursor-pointer border-0 btn btn-dark' aria-label={`${showProfile ? 'Hide' : 'Edit'} Profile`}>
                        <i className="fa fa-edit"></i> {showProfile ? 'Hide' : 'Edit'}
                    </button>
                    <br/><br/>
                    <p>Name: {!!user && user.name}</p>
                    <p>Email: {!!user && user.email}</p>
                    <p>Phone: {!!user && user.phone}</p>
                    <p>Category: {!!user && user.category}</p>
                    {!!user && user.category === 'intern' ? (
                        <a href="/secure/application" className='btn btn-primary'>Start Internship Application</a>
                    ) : (
                        <button className='btn btn-primary'>Start company service request</button>
                    )}
                </div>
                <div className="col-md-6">
                    {showProfile && (
                        <>
                         {/*<form onSubmit={handleSubmit}>*/}
                            <h3 className='border-bottom p-3'>Update Profile</h3>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    key="name"
                                    name="name"
                                    value={user.name}
                                    type="text"
                                    className="form-control"
                                    onChange={handleInputChange} // Handle name change
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Email</label>
                                <p>{user.email}</p>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    key="phone"
                                    name="phone"
                                    value={user.phone}
                                    type="text"
                                    className="form-control"
                                    onChange={handleInputChange} // Handle phone change
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
