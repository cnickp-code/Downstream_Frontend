import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage'
import AboutPage from './routes/AboutPage/AboutPage'
import HomePage from './routes/HomePage/HomePage'
import EventsPage from './routes/EventsPage/EventsPage'
import SchedulePage from './routes/SchedulePage/SchedulePage'
import LoginPage from './routes/LoginPage/LoginPage'
import SignupPage from './routes/SignupPage/SignupPage'
import AddEventPage from './routes/AddEventPage/AddEventPage'
import MobileSearch from '../src/components/MobileSearch/MobileSearch'
import NewsPage from '../src/routes/NewsPage/NewsPage'

import PublicRoute from './components/Utils/PublicRoute'
import PrivateRoute from './components/Utils/PrivateRoute'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path='/'
                    component={LandingPage}
                />
                <Route
                    exact path='/home'
                    component={HomePage}
                />
                <Route
                    exact path='/about'
                    component={AboutPage}
                />
                <Route
                    exact path='/events'
                    component={EventsPage}
                />
                {/* <Route
                    exact path='/events/:event_id'
                    render={(routeProps) => {
                        return (
                            <MainPage
                                event_id={routeProps.match.params.event_id}
                            />
                        )
                    }}
                /> */}
                <PrivateRoute
                    exact path='/schedule'
                    component={SchedulePage}
                />
                {/* <Route
                    exact path='/schedule/:event_id'
                    component={}
                /> */}
                <PublicRoute
                    exact path='/login'
                    component={LoginPage}
                />
                <PublicRoute
                    exact path='/signup'
                    component={SignupPage}
                />
                <Route
                    exact path='/add_event'
                    component={AddEventPage}
                />

                <Route
                    exact path='/mobile-search'
                    component={MobileSearch}
                />

                <Route
                    exact path='/news'
                    component={NewsPage}
                />
            </Switch>
        )
    }
}

export default Routes