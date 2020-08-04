import React from 'react'
import { render } from '@testing-library/react';
import CustomerList from './customerList';

describe('<CustomerList /> spec', () => {
    it('renders the component', () => {
        const container = render(<CustomerList />)
        expect(container.firstChild).toMatchSnapshot()
    })
});
