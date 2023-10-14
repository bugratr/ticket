import React from 'react';
import Home from './Home';
import AdminPanel from './AdminPanel';
import Login from './Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
    const { isLoggedIn } = useAuth();

    return (
        <AuthProvider>
            <div className="App">
                {isLoggedIn ? <AdminPanel /> : <Login />}
                <Home />
            </div>
        </AuthProvider>
    );
}

export default App;
