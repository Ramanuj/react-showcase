export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECT_DATA = 'SELECT_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';

export const selectData = data => ({
	type: SELECT_DATA,
	data
})

export const invalidateData = data => ({
 	type: INVALIDATE_DATA,
 	data
})

export const requestData = data => ({
	type: REQUEST_DATA,
 	data
})

export const receiveData = (data, json) => ({
	type: RECEIVE_DATA,
	data,
	//posts: json.data.children.map(child => child.data),
	obj:json,
	receivedAt: Date.now()
})

const fetchPosts = data => dispatch => {
	//console.log("in fetchposts");
	dispatch(requestData(data))
  
	/*
	 * return fetch('./data/menu.json') .then(response => response.json())
	 * .then(json => dispatch(receiveData(data, json)))
	 */
	    
	return fetch('./src/data/menu.json')
	  		.then(function(response) {
	  			return response.json()
	  		}).then(function(json) {
	  			console.log('parsed json', json);
	  			dispatch(receiveData(data,json));
	  		}).catch(function(ex) {
	  			console.log('parsing failed', ex)
	  		})
}

export const fetchData = data => (dispatch, getState) => {
	//console.log("in fetchData");
	return dispatch(fetchPosts(data))
}