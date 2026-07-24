import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.length < 5) {
            setMessage('Name should have at least 5 characters');
        } else if (!email.includes('@') || !email.includes('.')) {
            setMessage('Email should contain @ and .');
        } else if (password.length < 8) {
            setMessage('Password should have at least 8 characters');
        } else {
            setMessage('Registration successful!');
        }
    };

    return (
        <div>
            <h1>Mail Registration</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />

                <br /><br />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />

                <br /><br />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <br /><br />

                <button type="submit">Register</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Register;