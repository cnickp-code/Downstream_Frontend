import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AddEvent from '../../components/AddEvent/AddEvent'

class AddEventPage extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <AddEvent />
                </main>
                <Footer />
            </>
        )
    }
}

export default AddEventPage