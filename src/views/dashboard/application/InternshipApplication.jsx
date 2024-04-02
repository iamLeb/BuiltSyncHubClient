import React, {useContext, useState} from 'react';
import {UserContext} from "../../../context/userContext.jsx";
const InternshipApplication = () => {
    const {user} = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        education: '',
        experience: [],
        resume: null // Added field for the resume file
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0] // Assuming only one file is selected
            });
        } else if (name === "experience") {
            const experienceArray = value.split(',').map(item => item.trim());
            setFormData({
                ...formData,
                [name]: experienceArray
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, such as sending data to backend
        console.log(formData); // For demonstration purposes, log the form data to console
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Internship Application Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="education" className="form-label">Education</label>
                    <textarea
                        className="form-control"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Experience (Separate by comma)</label>
                    <textarea
                        className="form-control"
                        id="experience"
                        name="experience"
                        value={formData.experience.join(', ')}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="resume" className="form-label">Upload Resume</label>
                    <input
                        type="file"
                        className="form-control"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default InternshipApplication;
