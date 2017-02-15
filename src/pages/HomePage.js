import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { Pager, Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {
	
	componentDidMount(){
		// const { dispatch } = this.props;
		// dispatch(fetchData());
	}
	
	render(){
		
		return(
			<div className='container'>
			  	<Jumbotron>
			  		<h1>The React Showcase</h1>
			  		<p>This application is a showcase for displayig the react and redux capablities</p>
			  		<p><Button bsStyle="primary">Learn more</Button></p>
			    </Jumbotron>	
				<Pager>
				    <Pager.Item href="#">Previous</Pager.Item>
				    {' '}
				    <Pager.Item href="#">Next</Pager.Item>
				</Pager>
			</div>
		);
	}
}

export default HomePage;