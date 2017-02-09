export const REQUEST_HEADER = 'REQUEST_HEADER';
export const RECEIVE_HEADER = 'RECEIVE_HEADER';
export const SELECT_HEADER = 'SELECT_HEADER';
export const INVALIDATE_HEADER = 'INVALIDATE_HEADER';

export const selectHeader = (header) => ({
	type: SELECT_HEADER,
	header
})

export const invalidateMenu = (header) => ({
 	type: INVALIDATE_HEADER,
 	header
})

export const requestHeader = (header) => ({
	type: REQUEST_HEADER,
	header
})

function receiveHeader(data, json){
	return {
		type: RECEIVE_HEADER,
		data,
		header: json.data
	}
}


export const fetchHeader = (header) => (dispatch, getState) => {
	dispatch(requestHeader(header));
	
	return fetch('./data/header.json')
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			dispatch(receiveHeader(header,json));
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
};