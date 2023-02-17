import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        NOE: this.props.NOE || 32
    }

    changeNOE = (e) => {
        const inputValue = e.target.value;
        this.setState({ NOE: inputValue });
        this.props.updateEvents(undefined, inputValue)
    };

    render() {
        return (
            <div className='NOE'>
                <input
                    className='number'
                    type="number"
                    value={this.state.NOE}
                    onChange={this.changeNOE}
                />
            </div>
        )
    }
}

export default NumberOfEvents