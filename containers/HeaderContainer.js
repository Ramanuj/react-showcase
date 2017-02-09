import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchHeader } from '../actions/headerActions.js';

import Header from '../components/Header/Header.js';

/**
 * This class is the container for the header component.
 */
class HeaderContainer extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		this.props.fetchHeader();
	}
	
	render(){
		
		return(
			<div>
				{(this.props.isFetching ? <Header value={this.props.headerdata} /> : <div>LOading</div> )}
				
			</div>
		);
	}
}

const mapStateToProps = state => {
	const {isFetching, headerdata} = state.fetchHeader;
	return {
		isFetching,
		headerdata
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({fetchHeader}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);