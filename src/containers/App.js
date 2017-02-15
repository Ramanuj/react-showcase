import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { fetchData } from '../actions';

import SidePanelContainer from './SidePanelContainer.js';
import BreadCrumbContainer from './BreadCrumbContainer.js';
import HeaderContainer from './HeaderContainer.js';


import 'bootstrap/less/bootstrap.less';

import 'font-awesome/css/font-awesome.css';

import '../css/layout.css';
import '../css/main.css';
import '../css/griddle.css';

class App extends Component {
	
	componentDidMount(){
		const { dispatch } = this.props;
		//dispatch(fetchData());
	}
	
	render(){
		const { items, isFetching, lastUpdated } = this.props
		
		return(
			<div className="main">
				<SidePanelContainer/>
				<HeaderContainer />
				<BreadCrumbContainer/>
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = state => {
	
	return {
		header: state
	}
}

export default connect(mapStateToProps)(App);

