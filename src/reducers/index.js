import
{
	combineReducers
}
from
'redux';

import
{
	SELECT_DATA, INVALIDATE_DATA, REQUEST_DATA, RECEIVE_DATA
}
from
'../actions';

import {fetchMenu} from './menuReducer.js';
import {getPageName} from './pageReducer.js';
import {fetchHeader} from './headerReducer.js';

const posts = (state = {
		  isFetching: false,
		  didInvalidate: false,
		  items: []
		}, action) => {
		
		//console.log("posts action : " + action.type);	
			
		switch (action.type) {
			case INVALIDATE_DATA:
		      return {...state,didInvalidate: true};
		    case REQUEST_DATA:
		      return {
		        ...state,
		        isFetching: true,
		        didInvalidate: false
		      }
		    case RECEIVE_DATA:
		      return {
		        ...state,
		        isFetching: false,
		        didInvalidate: false,
		        items: action.posts,
		        lastUpdated: action.receivedAt
		      }
		    default:
		      return state
		}
}


const fetchData = (state = { }, action) => {
	
	switch (action.type) {
		case INVALIDATE_DATA:
		case RECEIVE_DATA:
		case REQUEST_DATA:
			return {
		        ...state,
		        ["data"]: posts(state, action)
		    }
		default:
			return state;	
	}
}

const rootReducer = combineReducers({
	fetchData,
	fetchMenu,
	getPageName,
	fetchHeader
})

export default rootReducer
