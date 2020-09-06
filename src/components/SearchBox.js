import React from 'react';

const SearchBox=(props) =>{
	return (
		<input 
		type='search' 
		placeholder='search robots' 
		class='mb2 ml2'
		onChange={props.searchChange} />
	);
}

export default SearchBox;



