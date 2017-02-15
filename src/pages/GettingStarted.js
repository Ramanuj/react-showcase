import React, { Component, PropTypes } from 'react';

import { PageHeader, Panel } from 'react-bootstrap';

const GettingStarted = () =>
	<div className="container">
	 	<PageHeader>Getting Started</PageHeader>
		<p>
			To run the application download or clone the application into the directory of your choice. Now, open command prompt and navigate to the directory 
			where you downloaded the app. 
		</p>
		<p>
			Download the node <code>packages</code> using the command.
			<Panel>
				npm install
			</Panel>
		</p>
		
		<p>
			Start the server using the below command.
			<Panel>
				npm start
			</Panel>
		</p>
	</div>

export default GettingStarted
