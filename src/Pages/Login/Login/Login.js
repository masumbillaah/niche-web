import React  from 'react';
import useAuth from './../../../hooks/useAuth';
import Register from '../Register/Register'
import LoginMain from '../LoginMain/LoginMain'


const Login = () => {
    const { user } = useAuth();
    // const {user}=useState() ;
    return (
        <div>

            {user.email?
                <LoginMain></LoginMain>:
            <Register></Register>
            }
            <br />
            {/* <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button> */}
        </div>
    );
};

export default Login;