import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleButtons from './ScheduleButtons';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScheduleButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
})