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

    renderChildren(submenus) {
        console.log('start rendering submenus ' + submenus);

        if(submenus.length > 0){
            return submenus.map((submenu, index) => (
                <SubMenu key={index} submenu={submenu} />
            ));
        }
    }

    render(){

        console.log("In MenuItem");
        console.log(this.props.menu);

        return(
            <li className="navigation_item">
                <div className="menu_item" onClick={this.handleClick}>
                    <span>{this.props.menu.name}</span> 
                    <span className={this.state.toggleState ? "fa fa-angle-double-up state-identifier" :"fa fa-angle-double-down state-identifier"}  ></span>
                    <SubMenu submenu={this.props.menu.children} toggleState={this.state.toggleState}/>
                </div>
            </li>
        );
    }
}

export default MenuItem;