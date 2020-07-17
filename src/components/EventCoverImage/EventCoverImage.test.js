import React from 'react';
import ReactDOM from 'react-dom';
import EventCoverImage from './EventCoverImage';
import DSContext from '../../contexts/DSContext';

const tempEvent =     {
    "id": 1,
    "name": "Hospitality Beach Party",
    "image_url": "https://showfomo.com/img/flyers/hospitality-beach-party-stream-2020-20200702215542.jpg",
    "info_url": "https://www.facebook.com/hospitalitydnb",
    "stream_url": "https://www.twitch.tv/hospitalrecordsofficial",
    "description": "A DNB Staycation",
    "platform": "twitch",
    "genre": "dnb",
    "start_date": "2020-07-10T19:00:00.000Z",
    "end_date": "2020-07-12T05:00:00.000Z",
    "event_popularity": "3",
    "artists": "Urbandawn, Camo & Krooked, Netsky, Black Sun Empire, Charlie Tee, S.P.Y, Djinn, Euphonique, Bladerunner, Fabio, Kyrist, Kasra, Unglued, Degs, Lens, Mizeyesis, Stay-C, GLXY, Riya, Inja's Sunday Service, NU:TONE, Fred V, London Elektricity, Tim Reaper"
}

const tempContext = {
    event: tempEvent
}

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DSContext.Provider value={tempContext}>
            <EventCoverImage />
        </DSContext.Provider>
    
    , div);
    ReactDOM.unmountComponentAtNode(div);
})