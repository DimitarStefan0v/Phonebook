const Card = ({ person }) => {
	return (
		<>
			<div>{person.name}</div>
			<div>{person.email}</div>
			<div>{person.phone}</div>
		</>
	);
};

export default Card;
