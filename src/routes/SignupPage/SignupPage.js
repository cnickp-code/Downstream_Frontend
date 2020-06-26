import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Signup from '../../components/Signup/Signup'

class SignupPage extends React.Component {

    handleRegistrationSuccess = user => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Signup onRegistrationSuccess={this.handleRegistrationSuccess} />
                </main>
                <Footer />
            </>
        )
    }
}

export default SignupPage