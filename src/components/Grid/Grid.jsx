import React from 'react';

import { Link } from 'react-router';

import Griddle from 'griddle-react';

class Grid extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
            
		}
	};

     getDataFromServer(){
        $.getJSON("./src/data/grid.json",function(data){
            this.setState({data: data});
        }.bind(this));
    }

    componentWillMount() {
		this.getDataFromServer();
	}

	componentDidMount() {
	} 

    render(){

        if(this.state.data){
            var tabData = this.state.data['table'];
            
            return( 
                <div className="main-content">
                    <Griddle results={tabData.rows} 
                    showFilter={true}
                    showSettings={true}
                    useGriddleStyles={false}/>
                </div>
            );
        }else{
            return(
                <div>
                    NO Data
                </div>
            );
        }
                
    }
}

export default Grid;