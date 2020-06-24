import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Signup from '../../components/Signup/Signup'

class SignupPage extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <Nav />
                <main>
                    <Signup />
                </main>
                <Footer />
            </>
        )
    }
}

export default SignupPage