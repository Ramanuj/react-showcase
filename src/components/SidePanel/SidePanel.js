import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import Menu from './Menu.jsx';

import Help from './Help.jsx';
import Logo from './Logo.jsx';

class SidePanel extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {isToggleOn: false};

	    this.handleClick = this.handleClick.bind(this);
	  }
	
	handleClick() {
	    this.setState(prevState => ({
	      isToggleOn: !prevState.isToggleOn
	    }));
	  }
	
	render() {
		return (
			<div>
				{
					this.state.isToggleOn ? 
						<div className ="sidebar_menu">
							<i className="fa fa-times closeIcon" onClick={this.handleClick}></i>
							
							<Logo />
							
							<Menu data={this.props.value} handler={this.props.handler}/>
						
							<Help />
						</div> 
						: 
						<div>
							<i className ="fa fa-bars toggle_menu" onClick={this.handleClick}></i>
						</div>
				}
				
				
			</div>
	    );
	}
}

export default SidePanel