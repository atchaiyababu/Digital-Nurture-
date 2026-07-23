import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <button onClick={handleLogout}>Logout</button>
                    <UserPage />
                </div>
            ) : (
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <GuestPage />
                </div>
            )}
        </div>
    );
}

export default LoginControl;