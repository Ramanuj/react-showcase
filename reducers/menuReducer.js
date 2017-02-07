import
{
	SELECT_MENU, INVALIDATE_MENU, REQUEST_MENU, RECEIVE_MENU
}
from
'../actions/sidePanelAction.js';

const initialMenuState = {
		isFetching: false,
		didInvalidate: false,
		menuitems: []	
};

export const fetchMenu = (state = initialMenuState, action) => {
	
	//console.log("MENUUUUUUUU ",state);
	
	switch (action.type) {
		case INVALIDATE_MENU:
			return {...state,didInvalidate: true};
		case RECEIVE_MENU:
			 return {
	        	...state,
		        isFetching: true,
		        didInvalidate: false,
		        items: action.menus
		      }
		case REQUEST_MENU:
			return {
		        ...state,
		        isFetching: false,
		        didInvalidate: false
		    }
		default:
			return state;	
	}
	
}