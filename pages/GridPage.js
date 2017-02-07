import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Grid from '../components/Grid/Grid.jsx';

class GridPage extends Component {
	
	componentDidMount(){
		// const { dispatch } = this.props;
		// dispatch(fetchData());
	}
	
	render(){
		
		return(
			<div>
				<Grid/>
			</div>
		);
	}
}

export default GridPage;