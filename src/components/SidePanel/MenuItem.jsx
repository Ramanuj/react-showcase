import React from 'react';

import { Link } from 'react-router';

import SubMenu from './SubMenu.jsx';

class MenuItem extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
            toggleState : false
		}

        this.handleClick = this.handleClick.bind(this);
	};

    handleClick(e) {
        e.stopPropagation();
        this.setState( { toggleState : !this.state.toggleState } );
    }

    render(){
        return(
            <li className="navigation_item">
                <div className="menu_item" onClick={this.handleClick}>
                    <span>{this.props.menu.name}</span> 
                    <span className={this.state.toggleState ? "fa fa-angle-double-up state-identifier" :"fa fa-angle-double-down state-identifier"}  ></span>
                    <SubMenu submenu={this.props.menu.children} toggleState={this.state.toggleState} handler={this.props.handler}/>
                </div>
            </li>
        );
    }
}

export default MenuItem;