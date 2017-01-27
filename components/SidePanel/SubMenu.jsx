import React from 'react';

import SubMenuItem from './SubMenuItem.jsx';

class SubMenu extends React.Component {

    renderSubMenu(submenus) {
        console.log('start rendering submenus ' + submenus);

        if(submenus.length > 0){
            return submenus.map((submenu, index) => (
                <SubMenuItem key={index} submenu={submenu} />
            ));
        }
    }

    render(){

        console.log("In SubMenu");
        console.log(this.props.toggleState);

        return(
            <ul className="submenu" ref={this.subs} style={this.props.toggleState ? {display:'block'}: {display:'none'}}>
                {this.renderSubMenu(this.props.submenu)}
            </ul>
        );
    }
}

export default SubMenu;