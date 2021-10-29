import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const CardComponent = robots.map(user, i => {
		return (
	<div>
	    <Card
		 Key={i}
		  id={robots[0].id}
		  name={robots[0].name}
		  email={robots[0].name.email}
		   />
		   );
	})
}
</div>
);
}
	

export default CardList;