import Card from './components/Card/Card';

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
];

const App = () => {
	return (
		<main>
            {dummyData.map(x => <Card key={x.name} person={x} />)}
		</main>
	);
};

export default App;
