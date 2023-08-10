import React, { useState } from 'react';
import validator from 'validator';
import store from '../store/store.js';
import { addUserData } from '../store/actions.js';
import './form.css';


function UserForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!validator.isEmail(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            store.dispatch(addUserData(formData));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            {errors.firstName && <span>{errors.firstName}</span>}

            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            {errors.lastName && <span>{errors.lastName}</span>}

            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span>{errors.email}</span>}

            <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <span>{errors.message}</span>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;
