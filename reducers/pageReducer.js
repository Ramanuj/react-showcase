import
{
	SET_PAGE, GET_PAGE
}
from
'../actions/breadCrumbAction.js';

const initialPageState = {
		currentPage: 'Home',
		menuType:'mainmenu',
		parent:''
};

export const getPageName = (state = initialPageState, action) => {
	
	//console.log("In reducer",action);
	
	switch (action.type) {
		case SET_PAGE:
			 return {
		       		...state,
		       		currentPage: action.page
		      }
		case GET_PAGE:
			return state;
		default:
			return state;
	}
}