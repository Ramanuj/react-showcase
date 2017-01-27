import React from 'react';

import SidePanel from './SidePanel/SidePanel.jsx';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		}

        this.handleClick = this.handleClick.bind(this);
	};

    componentDidMount() {
        console.log("Component did mount");
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked. ' + $('.sidebar_menu'));
        $(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
    }

 	render() {

        console.log("In Layout render method ");
        console.log(this.props);

		return (
			<div>
                <i className ="fa fa-bars toggle_menu" onClick={this.handleClick}></i>
                <SidePanel data={this.props.route.data} />
                {this.props.children}
			</div>
		);
			
 	}
}

export default Layout;