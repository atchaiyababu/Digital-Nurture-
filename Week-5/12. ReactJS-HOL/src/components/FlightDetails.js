import React from 'react';

function FlightDetails() {
    return (
        <div>
            <h2>Flight Details</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight No</th>
                        <th>Airline</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Air India</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹4500</td>
                    </tr>

                    <tr>
                        <td>6E202</td>
                        <td>IndiGo</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>₹3800</td>
                    </tr>

                    <tr>
                        <td>SG303</td>
                        <td>SpiceJet</td>
                        <td>Hyderabad</td>
                        <td>Kolkata</td>
                        <td>₹4200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FlightDetails;