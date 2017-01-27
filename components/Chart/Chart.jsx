import React from 'react';

import { Link } from 'react-router';

import SimpleLineChart from './SimpleLineChart.jsx';
import SimplePieChart from './SimplePieChart.jsx';
import SimpleBarChart from './SimpleBarChart.jsx';
import SimpleRadarChart from './SimpleRadarChart.jsx';

class Chart extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
            
		}
	};

     getDataFromServer(){
        console.log("Fetching data");

        $.getJSON("../data/chart.json",function(data){
            this.setState({data: data});
        }.bind(this));
    }

    componentWillMount() {
		this.getDataFromServer();
	}

	componentDidMount() {
	} 

    render(){

        console.log("Chart");

        if(this.state.data){
            return( 
                <div className="chart-content">
                    <div className="title">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className='lchart'>
                        <SimpleLineChart />
                    </div>
                    <div className='piechart'>
                        <SimplePieChart />
                    </div>
                    <div className='lchart'>
                        <SimpleBarChart />
                    </div>
                    <div className='piechart'>
                        <SimpleRadarChart/>
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                    NO Data
                </div>
            );
        }   
                
    }
}

export default Chart;