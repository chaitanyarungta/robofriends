import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
	//the html objectreturned by Card.js file will be stored in cardComponent List
	const cardComponent=robots.map((user,i)=>{
		return (
			< Card 
			  key={i} 
			  id={robots[i].id} 
			  name={robots[i].name} 
			  email={robots[i].email}
			 />
		);
		
	})
	return(
		<div>
			
			{cardComponent}

		</div>
		
	);
}

export default CardList;
