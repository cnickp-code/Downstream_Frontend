import React from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            error: null,
        })

        const { user_name, password } = event.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }

    render() {
        const { error } = this.state
        return (
            <div className="form-box-ls center">
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <div role='alert'>
                        {error && <p className='error'>{error}</p>}
                    </div>
                    <h1>Log In</h1>
                    <fieldset name="login-info">
                        <h4>Username</h4>
                        <input
                            placeholder=""
                            type="text"
                            name="user_name"
                            id="user_name"
                            className="text-input center"
                            required
                        />
                        <h4>Password</h4>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            className="text-input center"
                            required
                        />
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