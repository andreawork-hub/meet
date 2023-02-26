import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event/>component', () => {
    let event, EventWrapper;
    beforeAll(() => {
        const event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    })

    test('user sees the name, location of an event and button by default', () => {
        expect(EventWrapper.find('.showDetails')).toHaveLength(1);
        expect(EventWrapper.find('.showDetails').text()).toBe('Show Details');
        expect(EventWrapper.find('.name')).toHaveLength(1);
        expect(EventWrapper.find('.location')).toHaveLength(1);
    })

    test('user sees the event element collapsed by default', () => {
        expect(EventWrapper.state('isCollapsed')).toBe(true);
    })

    test('user can expand and show event details when he pushes the button (Show Details)', () => {
        EventWrapper.find('.showDetails').simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(false);
        expect(EventWrapper.find('.toggle')).toHaveLength(1);
        expect(EventWrapper.find('button.hideDetails')).toHaveLength(1);
        expect(EventWrapper.find('.link')).toHaveLength(1);
        expect(EventWrapper.find('.description')).toHaveLength(1);
        expect(EventWrapper.find('.creator')).toHaveLength(1);
        expect(EventWrapper.find('.organizer')).toHaveLength(1);
        expect(EventWrapper.find('.recurrence')).toHaveLength(1);
        expect(EventWrapper.find('.sequence')).toHaveLength(1);
        expect(EventWrapper.find('.reminders')).toHaveLength(1);
        expect(EventWrapper.find('.type')).toHaveLength(1);
    })

    test('user can collapse and hide event details when he pushes the button (Hide Details)', () => {
        EventWrapper.find('.hideDetails').simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(true);
        expect(EventWrapper.find('.toggle')).toHaveLength(0);
        expect(EventWrapper.find('button.showDetails')).toHaveLength(1);
        expect(EventWrapper.find('.link')).toHaveLength(0);
        expect(EventWrapper.find('.description')).toHaveLength(0);
        expect(EventWrapper.find('.creator')).toHaveLength(0);
        expect(EventWrapper.find('.organizer')).toHaveLength(0);
        expect(EventWrapper.find('.recurrence')).toHaveLength(0);
        expect(EventWrapper.find('.sequence')).toHaveLength(0);
        expect(EventWrapper.find('.reminders')).toHaveLength(0);
        expect(EventWrapper.find('.type')).toHaveLength(0);
    })


})