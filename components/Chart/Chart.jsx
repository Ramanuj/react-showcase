import React from 'react';

import { Link } from 'react-router';

import SimpleLineChart from './SimpleLineChart.jsx';
import SimplePieChart from './SimplePieChart.jsx';
import SimpleBarChart from './SimpleBarChart.jsx';
import SimpleRadarChart from './SimpleRadarChart.jsx';

import { Grid, Row, Col } from 'react-bootstrap';

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
                	<Grid>
                		<Row className="show-grid">
                			<Col xs={12} md={6}>
                				<SimpleLineChart />
                			</Col>
                			<Col xs={12} md={6}>
                				<SimplePieChart />
                			</Col>
                		</Row>
                		<Row className="show-grid">
            			<Col xs={12} md={6}>
            				<SimpleBarChart />
            			</Col>
            			<Col xs={12} md={6}>
            				<SimpleRadarChart />
            			</Col>
            		</Row>
                	</Grid>
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