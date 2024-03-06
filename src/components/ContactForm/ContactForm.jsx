import { useState } from 'react';

import classes from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
	const onNameChangeHandler = (event) => {
		setName(event.target.value);
	};

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

	return (
		<form className={classes.form}>
			<div className={classes['form-control']}>
				<input
					type='text'
					id='name'
					className={classes.input}
					onChange={onNameChangeHandler}
					required
				/>
				<div className={classes.placeholder}>Name</div>
			</div>
			<div className={classes['form-control']}>
				<input
					type='text'
					id='email'
					className={classes.input}
                    onChange={onEmailChangeHandler}
					required
				/>
				<div className={classes.placeholder}>Email</div>
			</div>
			<div>
				<button className={classes.button}>Add</button>
			</div>
		</form>
	);
};

export default ContactForm;
