import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleEventList from './ScheduleEventList';

const searchTerm = ""

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScheduleEventList searchTerm={searchTerm}/>, div);
    ReactDOM.unmountComponentAtNode(div);
})