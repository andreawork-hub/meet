import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        NOE: 32
    }



    changeNOE(value) {
        this.setState({ NOE: value });
    }



    render() {
        const { NOE } = this.state

        return (
            <div className='NOE'>
                <input
                    className='inputNOE'
                    type="number"
                    value={NOE}
                    onChange={(e) => this.changeNOE(e.target.value)}
                />
            </div>
        )
    }
}

export default NumberOfEvents