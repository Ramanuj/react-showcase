import React from 'react';

import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

class SimpleRadarChart extends React.Component {

    render(){
        console.log("In SimplePieChart");

        const data = [
            { subject: 'OBA', A: 120, B: 110, fullMark: 150 },
            { subject: 'CDSA', A: 98, B: 130, fullMark: 150 },
            { subject: 'ORE', A: 86, B: 130, fullMark: 150 },
            { subject: 'TBA', A: 99, B: 100, fullMark: 150 },
            { subject: 'XFD', A: 85, B: 90, fullMark: 150 },
            { subject: 'QWNB', A: 65, B: 85, fullMark: 150 },
        ];

        return(
            <div>
                <RadarChart cx={200} cy={100} outerRadius={80} width={400} height={250} data={data}>
                    <Radar name="Funds" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                    <Radar name="Equity" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
                    <PolarGrid />
                    <Legend />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                </RadarChart>
            </div>
        );
    }
}

export default SimpleRadarChart;