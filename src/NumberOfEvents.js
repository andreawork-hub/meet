import React, { Component } from 'react';


class NumberOfEvents extends Component {
    state = {
        NOE: this.props.NOE || 32
    }

    onChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ NOE: inputValue });
        this.props.updateEvents(null, inputValue)
    }

    render() {
        return (
            <div className='NOE'>
                <input
                    className='number'
                    type="number"
                    value={this.state.NOE}
                    onChange={this.onChange}
                    min='1'
                />

            </div>
        );
    };
};


export default NumberOfEvents;