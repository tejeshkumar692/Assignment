import React from 'react'
import { render } from '@testing-library/react';
import RewardSection from './rewardsSection';

describe('<RewardSection /> spec', () => {
    it('renders the component', () => {
        const container = render(<RewardSection />)
        expect(container.firstChild).toMatchSnapshot()
    })
});
