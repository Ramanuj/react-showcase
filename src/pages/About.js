import React, { Component, PropTypes } from 'react';

import { PageHeader, Panel } from 'react-bootstrap';

const About = () =>
	<div className="container">
		<PageHeader>About</PageHeader>
		<p>
			The application is created to showcase the development capabilities of a react-redux based application. It is constructed using the following.
		</p>
		<dl>
			<dd><span className="fa fa-chevron-right"> ReactJS</span></dd>
			<dd><span className="fa fa-chevron-right"> Nodejs</span></dd>
			<dd><span className="fa fa-chevron-right"> Webpack</span></dd>
			<dd><span className="fa fa-chevron-right"> Bootstrap</span></dd>
			<dd><span className="fa fa-chevron-right"> Font Awesome</span></dd>
		</dl>
	</div>

export default About
