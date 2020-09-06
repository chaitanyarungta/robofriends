//refer App2.js from 10 onwards videos of 19th section 
// import React, {Component} from 'react' ; or
import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
//import {robots} from '../containers/robots';
import './App.css';


//class App extends Component {} or
class App2 extends React.Component{
	constructor(){
		super()// it is compulsory to use super() with 'this' keyword  
		this.state={
			// fetching robots from web server in real life rather than manually written robots.js , therefore it should be empty while declaring state.
			robots: [],
			searchField: ''
		}
	}
	// constructor and componentDidMount are lifecycle methods that are automatically called if 
	//defined within react component when react component is mounted on html web page
	// we are using below lifecycle method which is automatically called to fetch user data from web server instead of robots.js to make webapp more realistic.
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots: users}));
			 
	}
	onSearchChange=(event) =>{// function is called whenever input in search box changes

		this.setState({searchField : event.target.value});//used to change change the state
		// const filteredRobots=this.state.robots.filter(robot =>{
		// 	return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		// })
		//console.log(filteredRobots);    
	}//here we are defining class method and passing it as prop to be used by other react smaller components. 

	render(){
		//const {robots, searchfield}= this.state; if we use this code then we can remove 
		//this.state below before robots. here {robots, searchfield} is a structure
		const filteredRobots=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.robots.length===0){
			return <h1>Loading </h1>
		}
		else{
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
	
}
export default App2;