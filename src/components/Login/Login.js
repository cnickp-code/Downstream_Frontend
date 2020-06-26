import React from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            hasUsernameError: false
        }
    }

    handleUserNameVerification = event => {
        let userName = event.target.value;
        console.log(this.state.error)

        if(userName.length < 3) {
            this.setState({
                error: "Username must be at least 3 characters",
                hasUsernameError: true
            })
        } else {
            this.setState({
                error: null,
                hasUsernameError: false
            })
        }
    }

    handlePasswordVerification = event => {
        let password = event.target.value;
        
        if((password.length < 3)) {
            this.setState({
                error: "Password must be at least 3 characters",
                hasPasswordError: true
            })
        } else {
            this.setState({
                error: null,
                hasPasswordError: false
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            error: null,
            hasError: false
        })

        const { user_name, password } = event.target

        console.log(user_name)
        console.log(password)

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            console.log(res.authToken)
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })

    }

    render() {
        return (
            <div className="form-box-ls center">
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <h1>Log In</h1>
                    <fieldset name="login-info">
                        <h4>Username</h4>
                        <input 
                            placeholder="" 
                            type="text" 
                            name="user_name" 
                            id="user_name" 
                            className="text-input center" 
                            onChange={this.handleUserNameVerification}
                            required 
                        />
                        {this.state.hasUsernameError && <p className="error">{this.state.error}</p>}
                        <h4>Password</h4>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="" 
                            className="text-input center" 
                            onChange={this.handlePasswordVerification}
                            required 
                        />
                        {this.state.hasPasswordError && <p className="error">{this.state.error}</p>}
                    </fieldset>
                    <button type="submit" className="form-submit-button">Submit</button>
                </form>
                <div className="login-box center">
                    <p>Don't have an account? <NavLink to="/signup">Sign up!</NavLink></p>
                </div>
            </div>
        )
    }
}

export default Login