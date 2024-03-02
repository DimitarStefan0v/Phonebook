import classes from './Card.module.css';

const Card = ({ person }) => {
	return (
		<div className={classes.card}>
			<div className={classes.heading}>{person.name}</div>
			<div>{person.email}</div>
			<div>{person.phone}</div>
		</div>
	);
};

export default Card;
