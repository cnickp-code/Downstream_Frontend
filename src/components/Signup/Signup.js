import React from 'react'
import { NavLink } from 'react-router-dom'

class Signup extends React.Component {
    render() {
        return (
            <div className="form-box-ls center">
                <form className="main-form">
                    <h1>Sign up</h1>
                    <fieldset name="login-info">
                        <h4>Email</h4>
                        <input placeholder="" type="text" name="email" id="email" className="text-input center" required />
                        <h4>Password</h4>
                        <input type="text" name="password" id="password" placeholder="" className="text-input center" required />
                        <h4>Repeat Password</h4>
                        <input type="text" name="repeat-password" id="repeat-password" placeholder="" className="text-input center"
                            required />
                    </fieldset>
                    <button type="submit" className="form-submit-button">Register</button>
                </form>
                <div className="login-box center">
                    <p>Already have an account? <NavLink to="/login">Log in</NavLink></p>
                </div>
            </div>
        )
    }
}

export default Signup