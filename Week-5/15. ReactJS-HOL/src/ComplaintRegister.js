import React, { Component } from 'react';

class ComplaintRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: '',
            complaint: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const referenceNumber = Math.floor(Math.random() * 100000);

        alert(
            `Complaint registered successfully!\nReference Number: ${referenceNumber}`
        );
    };

    render() {
        return (
            <div>
                <h2>Ticket Raising App</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>Employee Name:</label>
                    <br />

                    <input
                        type="text"
                        name="employeeName"
                        value={this.state.employeeName}
                        onChange={this.handleChange}
                    />

                    <br /><br />

                    <label>Complaint:</label>
                    <br />

                    <textarea
                        name="complaint"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                    />

                    <br /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ComplaintRegister;