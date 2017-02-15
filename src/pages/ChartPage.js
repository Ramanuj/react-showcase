import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { fetchData } from '../actions';

import FontAwesome from 'react-fontawesome';

import Chart from '../components/Chart/Chart.jsx';

class ChartPage extends Component {
	
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchData());
	}
	
	render(){
		return(
			<div>
				<Chart />
			</div>
		);
	}
}

const mapStateToProps = state => {
	
	return {
		header: state
	}
}

export default connect(mapStateToProps)(ChartPage);