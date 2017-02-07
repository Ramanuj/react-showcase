import React from 'react';

import SubMenuItem from './SubMenuItem.jsx';

class SubMenu extends React.Component {

    renderSubMenu(submenus) {
        if(submenus.length > 0){
            return submenus.map((submenu, index) => (
                <SubMenuItem key={index} submenu={submenu} handler={this.props.handler}/>
            ));
        }
    }

    render(){
        return(
            <ul className="submenu" ref={this.subs} style={this.props.toggleState ? {display:'block'}: {display:'none'}}>
                {this.renderSubMenu(this.props.submenu)}
            </ul>
        );
    }
}

export default SubMenu;