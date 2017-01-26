import React from 'react';

import MenuItem from './MenuItem.jsx';

class Menu extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
		}
	};

    renderMenu(menus) {
        console.log('start rendering menu ' + menus);

        if(menus.length > 0){
            return menus.map((menu, index) => (
                <MenuItem key={index} menu={menu} />
            ));
        }
    }

    render() {

        console.log("In Menu render method ");
        console.log(this.props.data);

        return(
            <ul className ="navigation_selection">
                {this.renderMenu(this.props.data)}
            </ul>
        );
    }
}

export default Menu;