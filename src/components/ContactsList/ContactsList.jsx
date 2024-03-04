import Contact from '../Contact/Contact';

const ContactsList = ({ contacts }) => {
	return (
		<div>
			{contacts.map((contact) => (
				<Contact key={contact.name} contact={contact} />
			))}
		</div>
	);
};

export default ContactsList;
