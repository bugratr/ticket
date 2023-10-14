import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Burada, gerçek bir kimlik doğrulama hizmeti kullanarak kimlik doğrulama yapabilirsiniz.
        // Bu basit örnekte sadece statik bir kullanıcı adı ve şifre kontrol ediyoruz.
        if (username === 'admin' && password === 'password123') {
            onLogin(true);
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="login-panel">
            <h2>Admin Login</h2>
            <div>
                <input 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
