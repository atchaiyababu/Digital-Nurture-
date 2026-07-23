import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
    const average = props.total / props.goal;

    return (
        <div className="score-container">
            <h1>Student Details</h1>

            <h3>Name: {props.name}</h3>
            <h3>School: {props.school}</h3>
            <h3>Total Score: {props.total}</h3>
            <h3>Number of Subjects: {props.goal}</h3>
            <h3>Average Score: {average}</h3>
        </div>
    );
}

export default CalculateScore;