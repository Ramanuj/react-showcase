import
{
	SELECT_HEADER, INVALIDATE_HEADER, REQUEST_HEADER, RECEIVE_HEADER
}
from
'../actions/headerActions.js';

const initialHeaderState = {
		isFetching: false,
		didInvalidate: false,
		header:{}
};

export const fetchHeader = (state = initialHeaderState, action) => {
	
	switch (action.type) {
		case INVALIDATE_HEADER:
			return {...state,didInvalidate: true};
		case RECEIVE_HEADER:
			 return {
	        	...state,
		        isFetching: true,
		        didInvalidate: false,
		        headerdata: action.header
		      }
		case REQUEST_HEADER:
			return {
		        ...state,
		        isFetching: false,
		        didInvalidate: false
		    }
		default:
			return state;
	}
}