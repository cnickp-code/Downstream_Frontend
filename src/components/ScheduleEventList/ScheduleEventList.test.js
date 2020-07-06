import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleEventList from './ScheduleEventList';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScheduleEventList />, div);
    ReactDOM.unmountComponentAtNode(div);
})