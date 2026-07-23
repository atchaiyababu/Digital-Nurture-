import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shubman Gill", score: 76 },
        { name: "KL Rahul", score: 65 },
        { name: "Hardik Pandya", score: 82 },
        { name: "Ravindra Jadeja", score: 69 },
        { name: "Rishabh Pant", score: 91 },
        { name: "Suryakumar Yadav", score: 73 },
        { name: "Mohammed Shami", score: 55 },
        { name: "Jasprit Bumrah", score: 79 },
        { name: "Kuldeep Yadav", score: 62 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <h2>Players with Scores Below 70</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {lowScorePlayers.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListofPlayers;