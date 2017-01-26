import React from 'react';

import { Link } from 'react-router';

class SubMenuItem extends React.Component {
    render(){
        console.log("In SubMenuItem");
        console.log(this.props.submenu);

        return(
            <li className="submenu_item">
                <Link to={this.props.submenu.link}>
                    {this.props.submenu.name}
                </Link>
            </li>
        );
    }
}

export default SubMenuItem;