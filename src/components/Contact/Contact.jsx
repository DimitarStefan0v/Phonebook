import classes from './Contact.module.css';

const Contact = ({ contact }) => {
    const cutString = (str, maxLength) => {
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    };

	return (
		<div className={classes.contact}>
			<div className={classes.name}>{cutString(contact.name, 16)}</div>
			<div>{cutString(contact.email, 16)}</div>
			<div>{cutString(contact.phone, 14)}</div>
		</div>
	);
};

export default Contact;
