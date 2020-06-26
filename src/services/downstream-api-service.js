import config from '../config'
import TokenService from '../services/token-service'

const DownstreamApiService = {
    getEvents() {
        return fetch(`${config.API_ENDPOINT}/events`, {
            headers: {

            },
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getEvent(eventId) {
        return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postEvent(event) {
        return fetch(`${config.API_ENDPOINT}/events/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(event)
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getSchedule() {
        return fetch(`${config.API_ENDPOINT}/schedule`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(res => {
            return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
        })
    },
    postScheduleItem(item) {
        return fetch(`${config.API_ENDPOINT}/schedule`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(item)
        })
        .then(res => {
            console.log('hello')
            return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
        })
    },
    deleteScheduleItem(scheduleId, callback) {
        return fetch(`${config.API_ENDPOINT}/schedule/${scheduleId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status)
            }
            callback(scheduleId)
        })
    }
}

export default DownstreamApiService