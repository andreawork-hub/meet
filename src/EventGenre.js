import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ["#FF1493", "#00FFFF", "#7FFF00", "#FF8C00", "#FFFF00"];

    useEffect(() => {
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            // Compute the value (i.e., count) for each genre based on the events that match its regular expression
            const data = genres.map((genre) => {
                const value = events.filter(event => event.summary.split(' ').includes(genre)).length
                return { name: genre, value };
            })
            // Return the data array
            return data;
        };
        setData(() => getData());
    }, [events]);

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                    }
                </Pie>
                <Legend verticalAlign="bottom" height={50} />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;