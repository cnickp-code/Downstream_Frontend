import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
})