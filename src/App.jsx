import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';

const dummyData = [
	{
		name: 'Test name1',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
	{
		name: 'Test name2',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
    {
		name: 'Test name3',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
    {
		name: 'Test name4',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
    {
		name: 'Test name5',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
    {
		name: 'Test name6',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
    {
		name: 'Test name7',
		email: 'testemail@gmail.com',
		phone: '+35923434343',
	},
];

const App = () => {
	return (
		<main>
            <ContactForm />
            <ContactsList contacts={dummyData} />
		</main>
	);
};

export default App;
