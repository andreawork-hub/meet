import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event/>component', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    })

    test('user sees the name, location of an event and button by default', () => {
        const buttonDetails = EventWrapper.find('button.details');
        expect(buttonDetails).toHaveLength(1);
        expect(buttonDetails.text()).toBe('+Details');

        const eventName = EventWrapper.find('h4.name');
        expect(eventName.text()).toBe(`${event.summary}`)
        expect(EventWrapper.find('h4.name')).toHaveLength(1);

        const eventLocation = EventWrapper.find('p.location');
        expect(eventLocation.text()).toBe(`${event.location}`)
        expect(EventWrapper.find('p.location')).toHaveLength(1);
    })

    test('user sees the event element collapsed by default', () => {
        expect(EventWrapper.state('isCollapsed')).toBe(true);
    })

    test('user cannot see event details', () => {
        expect(EventWrapper.find('p.link')).toHaveLength(0);
        expect(EventWrapper.find('p.description')).toHaveLength(0);
        expect(EventWrapper.find('p.creator')).toHaveLength(0);
        expect(EventWrapper.find('p.organizer')).toHaveLength(0);
        expect(EventWrapper.find('p.recurrence')).toHaveLength(0);
        expect(EventWrapper.find('p.sequence')).toHaveLength(0);
        expect(EventWrapper.find('p.reminders')).toHaveLength(0);
        expect(EventWrapper.find('p.type')).toHaveLength(0);
    })

    test('user can expand an event when he pushes the button (+)', () => {
        const buttonDetails = EventWrapper.find('button.details');
        expect(buttonDetails.text()).toBe('+Details');
        buttonDetails.simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(false);
    })

    test('user can see the details of the upcoming event', () => {
        expect(EventWrapper.find('p.link')).toHaveLength(1);
        expect(EventWrapper.find('p.description')).toHaveLength(1);
        expect(EventWrapper.find('p.creator')).toHaveLength(1);
        expect(EventWrapper.find('p.organizer')).toHaveLength(1);
        expect(EventWrapper.find('p.recurrence')).toHaveLength(1);
        expect(EventWrapper.find('p.sequence')).toHaveLength(1);
        expect(EventWrapper.find('p.reminders')).toHaveLength(1);
        expect(EventWrapper.find('p.type')).toHaveLength(1);
    })

    test('user can collapse an event when he pushes the button (-)', () => {
        const buttonDetails = EventWrapper.find('button.details');
        expect(buttonDetails.text()).toBe('-Details');
        buttonDetails.simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(true);
    })


})