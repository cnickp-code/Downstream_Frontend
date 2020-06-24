import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default function PublicRoute({ component, ...props }) {
    const Component = component
    console.log(TokenService.hasAuthToken())
    return (
        <Route
            {...props}
            render={renderProps => (
                TokenService.hasAuthToken()
                    ? <Redirect to={'/signup'} />
                    : <Component {...renderProps} />
            )}
        />
    )
}