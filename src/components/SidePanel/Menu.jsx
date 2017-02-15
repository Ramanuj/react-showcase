import React from 'react';

import MenuItem from './MenuItem.jsx';

class Menu extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
		}
	};

    renderMenu(menus) {
        if(menus.length > 0){
            return menus.map((menu, index) => (
                <MenuItem key={index} menu={menu} handler={this.props.handler}/>
            ));
        }
    }

    render() {
        return(
            <ul className ="navigation_selection">
                {this.renderMenu(this.props.data)}
            </ul>
        );
    }
}

export default Menu;