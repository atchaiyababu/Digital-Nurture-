import React from "react";

function IndianPlayers() {

    const IndianTeam = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja",
        "Rishabh Pant",
        "Suryakumar Yadav"
    ];

    // Destructuring
    const [first, second, third, fourth, fifth, sixth, seventh, eighth] = IndianTeam;

    const oddPlayers = [first, third, fifth, seventh];
    const evenPlayers = [second, fourth, sixth, eighth];

    const T20players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Hardik Pandya"
    ];

    const RanjiTrophyPlayers = [
        "Cheteshwar Pujara",
        "Hanuma Vihari",
        "Mayank Agarwal"
    ];

    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div>
            <h2>Odd Team Players</h2>
            <ul>
                {oddPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                {evenPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Merged Players</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;