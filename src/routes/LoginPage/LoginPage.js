import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Login from '../../components/Login/Login'

class LoginPage extends React.Component {

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/home'
        history.push(destination)
    }

    render() {

        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Login onLoginSuccess={this.handleLoginSuccess} />
                </main>
                <Footer />
            </>
        )
    }
}

export default LoginPage