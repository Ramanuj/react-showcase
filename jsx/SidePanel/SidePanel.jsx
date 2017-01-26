import React from 'react';

import Logo from './Logo.jsx';
import Help from './Help.jsx';
import Menu from './Menu.jsx';

class SidePanel extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
		}

        this.handleClick = this.handleClick.bind(this);
	};

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked. ' + $('.sidebar_menu'));
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");
    }

    render() {

        console.log("In SidePanel render method ");
        console.log(this.props.data);

        return(
            <div className ="sidebar_menu">
                
                <i className="fa fa-times closeIcon" onClick={this.handleClick}></i>

                <Logo />
                <Menu data={this.props.data.menu}/>
                <Help />
            </div>
        );
    }

}


export default SidePanel;