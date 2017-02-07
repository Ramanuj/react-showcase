import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import { Breadcrumb } from 'react-bootstrap';

const BreadCrumb = ({value}) =>
	<Breadcrumb>
		<Breadcrumb.Item href="#">
			{value.currentPage}
		</Breadcrumb.Item>
	</Breadcrumb>
	
BreadCrumb.propTypes = {
		value: PropTypes.object.isRequired
}

export default BreadCrumb