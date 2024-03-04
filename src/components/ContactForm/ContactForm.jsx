import classes from './ContactForm.module.css';

const ContactForm = () => {
	return (
		<form className={classes.form}>
			<div className={classes['form-control']}>
				<input type='text' id='name' className={classes.input} required />
                <div className={classes.placeholder}>Enter your name</div>
			</div>
            <div className={classes['form-control']}>
				<input type='text' id='email' className={classes.input} required />
                <div className={classes.placeholder}>Enter your email</div>
			</div>
		</form>
	);
};

export default ContactForm;
