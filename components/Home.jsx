import React from 'react';

import { Link } from 'react-router';

class Home extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
		}
	};

    render() {
        return(
            <div className="home">
                <Link to="/">
                    Home
                </Link> |
                <Link to="grid">
                    Grid
                </Link> |
                <Link to="chart">
                    Chart
                </Link>
            </div>
        );
    }

}


export default Home;