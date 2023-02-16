import React, { Component } from 'react';

class Event extends Component {
    state = {
        isCollapsed: true
    }

    handleClick = () => {
        this.setState(prevState => (
            { isCollapsed: !prevState.isCollapsed }
        ));
    }

    render() {
        const { event } = this.props
        const { isCollapsed } = this.state
        const dateStart = new Date(event.start.dateTime).toGMTString();
        const dateEnd = new Date(event.end.dateTime).toGMTString();

        return (
            <div className='Event'>
                <h4 className='name' style={{ fontWeight: "bold" }}>{event.summary}</h4>
                <p className='start'>{dateStart}</p>
                <p className='end'>{dateEnd}</p>
                <p className='location'>{event.location}</p>

                <button className="details" onClick={this.handleClick}>{this.state.isCollapsed ? '+' : '-'}
                    Details
                </button>
                {!isCollapsed &&
                    <div className='toggle'>
                        <p className='link'>{event.htmlLink}</p>
                        <p className='description'>{event.description}</p>
                        <p className='creator'>{event.creator}</p>
                        <p className='organizer'>{event.organizer}</p>
                        <p className='recurrence'>{event.recurrence}</p>
                        <p className='sequence'>{event.sequence}</p>
                        <p className='reminders'>{event.reminders}</p>
                        <p className='type'>{event.eventType}</p>
                    </div>
                }
            </div>
        )
    }
}

export default Event