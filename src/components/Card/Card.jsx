import { useState } from 'react';

const dummyData = {
	name: 'Test name',
	email: 'testemail@gmail.com',
	phone: '+35923434343',
};

const Card = () => {
	const [data, useData] = useState(dummyData);

	return (
		<>
			<div>{data.name}</div>
			<div>{data.email}</div>
			<div>{data.phone}</div>
		</>
	);
};

export default Card;
