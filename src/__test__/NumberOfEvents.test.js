import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
    let NOEWrapper
    beforeAll(() => {
        NOEWrapper = shallow(
            <NumberOfEvents updateEvents={() => { }} />
        )
    })

    test('user sees 32 events by default', () => {
        expect(NOEWrapper.state('NOE')).toBe(32);
    })

    test('user can change NOE', () => {
        const inputNOE = NOEWrapper.find('input.inputNOE');
        expect(NOEWrapper.state('NOE')).toBe(32);
        inputNOE.simulate('change', { target: { value: 16 } });
        expect(NOEWrapper.state('NOE')).toBe(16);
    })

}
)