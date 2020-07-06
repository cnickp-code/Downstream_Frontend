import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleEvent from './ScheduleEvent';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScheduleEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
})