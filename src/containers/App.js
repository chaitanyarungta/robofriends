// refer App.js for videos from 1-9 in 19th section 
// import React, {Component} from 'react' ; or
import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../components/robots';
import './App.css';


//class App extends Component {} or
class App extends React.Component{
	constructor(){
		super()// it is compulsory to use super() with 'this' keyword  
		this.state={
			robots: robots,
			searchField: ''
		}
	}
	onSearchChange=(event) =>{// function is called whenever input in search box changes

		this.setState({searchField : event.target.value});//used to change change the state
		// const filteredRobots=this.state.robots.filter(robot =>{
		// 	return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		// })
		//console.log(filteredRobots);    
	}//here we are defining class method and passing it as prop to be used by other react smaller components. 

	render(){

		const filteredRobots=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})

		return(
		<div className='tc'>
			<h1 className="f1">  RoboFriends </h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
		</div>

	);
	}
	
}
export default App;