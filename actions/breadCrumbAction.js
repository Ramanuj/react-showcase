export const SET_PAGE = 'SET_PAGE';
export const GET_PAGE = 'GET_PAGE';

export const setPage = (page) => ({
	type: SET_PAGE,
	page
})

export const getPage = (page) => ({
 	type: GET_PAGE,
 	page
})

const getName = () => dispatch => {
	return dispatch(getPage());
}

const setName = (page) => dispatch =>{
	//console.log("In setName : " + page);
	return dispatch(setPage(page))
}

export const getPageName = (page) => (dispatch, getState) => {
	// console.log("in getState");
	return dispatch(getName())
};

export const setPageName = (page) => (dispatch, getState) => {
	//console.log("In Setpage : " + page);
	return dispatch(setName(page))
}