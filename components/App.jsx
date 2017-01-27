import React from 'react';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './Layout.jsx';
import Home from './Home.jsx';

import Grid from './Grid/Grid.jsx';
import Chart from './Chart/Chart.jsx';

class App extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
		}
	};

    getDataFromServer(){
        console.log("Fetching data");

        $.getJSON("../data/leftmenu.json",function(data){
            this.setState({data: data});
        }.bind(this));
    }

    componentWillMount() {
		this.getDataFromServer();
	}

	componentDidMount() {
	} 

    render() {
        if (this.state.data) {

            console.log("App");
            console.log(this.state.data);

			return (	
				<Router history={browserHistory}>
					<Route path="/" component={Layout} data={this.state.data}>
						<IndexRoute component={Home} data={this.state.data}/>
                        <Route path="/grid" component={Grid} />
                        <Route path="/home" component={Home} />
                        <Route path="/chart" component={Chart} />
					</Route>
				</Router>
			);
		}else{
            return(
                <div>State is null</div>
            );
        }
    }

}

export default App;