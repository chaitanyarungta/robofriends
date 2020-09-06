//this file is not included in video tutorials, ihave created it myself to allow communication between react components : searchbox and cardlist 
// without using 'state' an important feature of react 


// import React from 'react';
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import {robots} from '../components/robots';

// const searchField='' ;
// function onSearchChange=(event)=>{
// 	searchField=event.target.value;
// }


// const App1=() =>{
// 	const filteredRobots=robots.filter(robot =>{
// 			return robot.name.toLowerCase().includes(searchField.toLowerCase());
// 		})
// 	return 
// 	(
// 		<div className='tc'>
// 			<h1>RoboFriends </h1>
// 			<SearchBox searchChange={onSearchChange} />
// 			<CardList robots={filteredRobots}/>
// 		</div>


// 	);
// }

// export default App1;