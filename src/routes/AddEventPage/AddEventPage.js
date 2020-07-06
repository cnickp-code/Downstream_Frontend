import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AddEvent from '../../components/AddEvent/AddEvent'

class AddEventPage extends React.Component {

    handleAddSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/home'
        history.push(destination)
    }

    render() {
        return (
            <>
                <div className="home-scroll-container">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <AddEvent onAddSuccess={this.handleAddSuccess}/>
                    </main>
                </div>
                <Footer />
            </>
        )
    }
}

export default AddEventPage