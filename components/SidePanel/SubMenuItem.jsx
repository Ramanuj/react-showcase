import React from 'react';

import { Link } from 'react-router';

class SubMenuItem extends React.Component {
    render(){
        return(
            <li className="submenu_item">
                <Link to={this.props.submenu.link} onClick={this.props.handler}>
                    {this.props.submenu.name}
                </Link>
            </li>
        );
    }
}

export default SubMenuItem;