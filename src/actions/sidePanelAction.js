export const REQUEST_MENU = 'REQUEST_MENU';
export const RECEIVE_MENU = 'RECEIVE_MENU';
export const SELECT_MENU = 'SELECT_MENU';
export const INVALIDATE_MENU = 'INVALIDATE_MENU';


export const selectMenu = (menu) => ({
	type: SELECT_MENU,
	menu
})

export const invalidateMenu = (menu) => ({
 	type: INVALIDATE_MENU,
 	menu
})

export const requestMenu = (menu) => ({
	type: REQUEST_MENU,
	menu
})

export const receiveMenu1 = (data, json) => ({
	type: RECEIVE_MENU,
	data,
	posts: json.data.children.map(child => child.data)
})

function receiveMenu(data, json){
	//console.log("receiveMenu", json.menu)
	return {
		type: RECEIVE_MENU,
		data,
		menus: json.menu
	}
}

const fetchMenus = (menu) => dispatch => {
	//console.log("in fetchMenus");
	dispatch(requestMenu(menu));
	
	return fetch('./src/data/menu.json')
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			//console.log('parsed json', json);
			dispatch(receiveMenu(menu,json));
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	
}


export const fetchMenu = (menu) => (dispatch, getState) => {
	//console.log("in fetchMenu");
	return dispatch(fetchMenus(menu))
};
