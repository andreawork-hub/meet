import React, { Component } from 'react';

class Event extends Component {
    state = {
        isCollapsed: true
    }

    handleShowDetails = () => {
        this.setState({ isCollapsed: false })
    }

    handleHideDetails = () => {
        this.setState({ isCollapsed: true })
    }


    render() {
        const { event } = this.props

        const dateStart = new Date(event.start.dateTime).toGMTString();
        const dateEnd = new Date(event.end.dateTime).toGMTString();

        return (
            <div className='event'>
                <h4 className='name' style={{ fontWeight: "bold" }}>{event.summary}</h4>
                <p className='start'>{dateStart}</p>
                <p className='end'>{dateEnd}</p>
                <p className='location'>@{event.summary} | {event.location}</p>
                {this.state.isCollapsed === true ?
                    <button
                        className="showDetails"
                        onClick={this.handleShowDetails}
                    >Show Details
                    </button>
                    :
                    (<div className='toggle'>
                        <a className='link' href={event.htmlLink}>See details on Google Calendar</a>
                        <p className='description'>{event.description}</p>
                        <p className='creator'>{event.creator}</p>
                        <p className='organizer'>{event.organizer}</p>
                        <p className='recurrence'>{event.recurrence}</p>
                        <p className='sequence'>{event.sequence}</p>
                        <p className='reminders'>{event.reminders}</p>
                        <p className='type'>{event.eventType}</p>
                        <button
                            className="hideDetails"
                            onClick={this.handleHideDetails}
                        >Hide Details
                        </button>
                    </div>)}
            </div>
        );
    }
}

export default Event