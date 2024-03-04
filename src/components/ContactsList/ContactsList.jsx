import Contact from '../Contact/Contact';

import classes from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
	return (
		<div className={classes.contacts}>
			{contacts.map((contact) => (
				<Contact key={contact.name} contact={contact} />
			))}
		</div>
	);
};

export default ContactsList;
