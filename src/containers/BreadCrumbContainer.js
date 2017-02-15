import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { getPageName } from '../actions/breadCrumbAction.js';

import BreadCrumb from '../components/BreadCrumb/BreadCrumb.js';

class BreadCrumbContainer extends Component {
	
	componentDidMount(){
		// const { dispatch } = this.props;
		// dispatch(fetchData());
		
		// console.log(this.context.store.getState());
		
		this.props.getPageName();
	}
	
	render(){

		//console.log("q",this.props.pageName.currentPage);
		
		var pgName = "";
		
		if(this.props.pageName !== undefined){
			pgName = this.props.pageName;
		}
		
		return(
			<div className="breadCrumb">
				<BreadCrumb value = {this.props.pageName}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	
	//console.log("this should be called...",state.getPageName);
	
	return {
		pageName : state.getPageName
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({getPageName}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BreadCrumbContainer);