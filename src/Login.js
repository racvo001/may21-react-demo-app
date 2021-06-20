import React from "react";
import './login.css'

const Login = function (props) {
    return (
        <>

            <h1> {props.title} </h1>
            <form >
                Username: < input type="text" /> < br/>
                Password: < input type="password" /> < br/>
                <button className="login-button" > {props.label} </button>
            </form>
        </>
    );
};

/*

*/

export default Login;