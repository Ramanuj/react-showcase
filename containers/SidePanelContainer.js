import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { fetchMenu } from '../actions/sidePanelAction.js';
import { getPageName, setPageName } from '../actions/breadCrumbAction.js';

import SidePanel from '../components/SidePanel/SidePanel.js';

import { ProgressBar } from 'react-bootstrap';

class SidePanelContainer extends Component {
	
	constructor(props) {
		 
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount(){
		// const { dispatch } = this.props;
		// dispatch(fetchMenu());
		
		// console.log("here");
		this.props.fetchMenu();
		// this.props.getPageName();
	}
	
	handleClick(e) {
	    //e.preventDefault();
	    //console.log('The link was clicked.', e.target);
	    //console.log('The link was clicked.', e.target.text);
	    
	    this.props.setPageName(e.target.text);
	}
	
	render(){
		
		const { items, isFetching, lastUpdated } = this.props;
		
		// console.log("Printing items : ",isFetching );
		
		return(
			<div className="sideBar">
				{
					(isFetching ? <SidePanel value={items} handler={this.handleClick}/> : <ProgressBar striped bsStyle='success' now={40} />)
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const {isFetching, items} = state.fetchMenu;
	return {
		isFetching,
		items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({getPageName, setPageName, fetchMenu}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanelContainer);