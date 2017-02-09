import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';

const renderLinks = (links) => {

	if(links.length > 0){
		return links.map((link, index) => (
				<LinkContainer to={link.target} key={index}>
					<NavItem>
                		{link.name}
                	</NavItem>
                </LinkContainer>
            ));
	}
}

const Header = ({value}) =>
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">{value.name}</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				{renderLinks(value.links)}
			</Nav>
			<Nav pullRight>
	        	<NavItem eventKey={1} href="#">Sign In</NavItem>
	        </Nav>
		</Navbar.Collapse>
	</Navbar>
	
Header.propTypes = {
	value: PropTypes.object.isRequired
}

export default Header