import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function WelcomeLogin() {
    const [showLogin, setShowLogin] = useState(true)
    return ( 
        <>
            {showLogin ?
            <>
                <h3>Login here</h3>
                <Login/>
                <p>New here? <a href="#" onClick={() => setShowLogin(false)}>Create an account today</a></p>
            </>
            : 
            <>
                <h3>Create a New Account</h3>
                <Register/>
                <a href="#" onClick={() => setShowLogin(true)}>Return To Login</a> 
            </>
            }
        </>
     );
}

export default WelcomeLogin;