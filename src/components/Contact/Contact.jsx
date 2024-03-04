import classes from './Contact.module.css';

const Contact = ({ contact }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.heading}>{contact.name}</div>
			<div>{contact.email}</div>
			<div>{contact.phone}</div>
		</div>
	);
};

export default Contact;
