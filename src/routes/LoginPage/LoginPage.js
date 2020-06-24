import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Login from '../../components/Login/Login'

class LoginPage extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <Nav />
                <main>
                    <Login />
                </main>
                <Footer />
            </>
        )
    }
}

export default LoginPage